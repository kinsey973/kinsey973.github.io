---
title: crypto-
date: 2025-05-11 14:33:47
tags:
     - crypto
categories: 密码笔记
---

## [Zer0pts2020]ROR

```py
import random
from secret import flag

ror = lambda x, l, b: (x >> l) | ((x & ((1<<l)-1)) << (b-l))

N = 1
for base in [2, 3, 7]:
    N *= pow(base, random.randint(123, 456))
e = random.randint(271828, 314159)

m = int.from_bytes(flag, byteorder='big')
assert m.bit_length() < N.bit_length()

for i in range(m.bit_length()):
    print(pow(ror(m, i, m.bit_length()), e, N))

```

这道题重点是看ror

我们知道了每次以bit为单元移动且题目告诉了我们所有位的pow结果

也就是题目想要我们逆向计算bin(m)的每一位来反推m
注意到n为偶数！！！ 而奇数mod偶数末位为1 偶数mod偶数末位为0！

所以根据每次pow的结果我们可以确定一个比特位！！！

最后取个反序 long_to_bytes即可得到flag

```py
from Crypto.Util.number import *
from Crypto.PublicKey.RSA import * 
import primefac

with open(r'.\chall.txt','r+') as f:
    cipher = f.readlines()

m = ""
for s in cipher:
    s = int(s,10)
    if s%2 == 1 :
        m += "1"
    else:
        m += "0"

m = int(m[::-1],2)
print(long_to_bytes(m))

```

