---
title: crypto-suanfa
date: 2025-05-06 20:37:35
tags: crypto
categories: 密码笔记
sticky: 100
---

#### [网鼎杯 2020 青龙组]you_raise_me_up（大步小步算法）

首先，我们审计题目，可以发现题目中给予了我们m、c和n的值，其中n=2\**512,m则是在（2，m）之间的值，c是m^flag = c mod n

可以看出，这是一道求指标的题目，我们可以通过以下方法进行计算，已知的条件为：

2^e = c1 mod n   在这其中，除了e其余条件我们都已知，在这里，我们需要使用离散对数求解的思路：

> Shanks’s Babystep-Giantstep Algorithm算法：
> 1、n=[ √n ]+1
>
> 2、构造两个列表
>
> list1=[1,g,g^2,g^3,......,g^n]
>
> list2=[h,hg^(-n),hg^(-2n),......,hg^(-n**2)]
>
> 3、在两个列表中，找到两个相同的数 g^i=hg^(-jn)
>
> =>g^(i+jn)=h mod n
>
> 4、我们所求的e=i+jn
> python库应用：
>
> python(sympy库)  x=sympy.discrete_log(n,a,g)

exp

```
m = 391190709124527428959489662565274039318305952172936859403855079581402770986890308469084735451207885386318986881041563704825943945069343345307381099559075
c = 6665851394203214245856789450723658632520816791621796775909766895233000234023642878786025644953797995373211308485605397024123180085924117610802485972584499
n=2**512
 
 
import gmpy2
from Crypto.Util.number import *
import sympy
x=sympy.discrete_log(n,c,m)
print(long_to_bytes(x))
```

#### 救世捷径（dijstra算法）

这道题感觉跟acm的寻找最短路径一样.

txt文件中每行的前两个数字作为无向图的顶点，第三个数字是两顶点之间的距离，最后的字符串是两顶点之间的内容，将起点到终点最短路径经过的边上的内容组合起来便是flag。
单源点最短路径算法：dijstra算法。
一些想到哪是哪的tips写在这里咯：

**1.一些前期的初始化和数据处理**

1）初始化各点之间的距离为“无穷远”（在程序中用一个比较大的数代替这个无穷远的概念），一般可以直观地想出用27\*27的二维数组存这些距离值（Python中是用list套list作为过去高级语言中二维数组的那种存在……而且要注意要初始化把list里面都放上东西才行！），之后我们就操作索引是1-26的那些元素，浪费掉位置0处的空间，但可以恰好对应顶点1-26，清晰明了~

2）按行读取题目txt文件中的内容，用的是readlines()，得到的数据形式是每行作为一个元素组成的list。然后用strip()去掉行尾的换行符’\n’，再用split(’ ')将每行内容按空格分割组成新的list，方便后面在程序中的调用。

3）因为在2）步中已经分割出了每行的元素，就可以用2）步中的数据去初始化1）步中27*27的list中的数据，把已知的那些两点之间的距离放入即可，具体写法见程序代码。

**2.实现dijstra算法的函数**

1）初始化一个长度是27，元素全是0xffff（代表距离很远）的list，用于记录当前顶点（索引与顶点序号一致是1-26）对于顶点1的最短距离。

2）初始化一个长度为27，元素全是0的list，元素值用于记录当前顶点（索引与顶点序号一致是1-26）是否已经找到了距离顶点1的最短路径，确定了最短路径就置该顶点序号对应索引值的元素为1。后面将这里元素值是1的顶点称为“已经确定的集合”。每次更新完各顶点到顶点1的距离后，找到最短的一个，将该顶点位置元素置1，该顶点就不再参与后续的遍历。

3）初始化一个长度为27，元素全是1的list，用于记录当前顶点到顶点1的最短路径的前驱顶点，用于最后回溯路径。

**过程：**

首先找到和顶点1直连的顶点，找到这些顶点中距离顶点1最短的一个顶点，将该顶点加入“已经确定的集合“，遍历该顶点的邻接顶点，更新顶点1到各个邻接顶点的最短距离。再找到现在与顶点1距离最短的顶点（在”已经确定的集合“中的顶点就不再遍历），再去遍历该顶点的邻接顶点，更新顶点1到这些邻接顶点的最短距离，从中找到距离最短的顶点加入“已经确定的集合”，再遍历该顶点的邻接顶点，更新这些顶点与顶点1的最短距离，找到与顶点1距离最短的顶点……以此循环直至所有顶点都加入“确定的集合”。

核心思想：

每次循环都找到当前距离顶点1最近的一个顶点，判断路径中经过该顶点后再到达与其邻接的其他顶点的距离，是否比之前存储的这些顶点到顶点1的距离更短，如果更短就更新对应顶点到顶点1的最短距离，更新完后再找到与顶点1距离最短的顶点重复上述操作。

```py
graph=[]
for i in range(27):
    graph.append([]) #在一个list中放27个list，索引0-26
for i in range(27):
    for j in range(27):
        graph[i].append(0xffff) #先将图中各个顶点之间的距离初始化为一个比较大的数
f=open('./Downloads/dij.txt','r').readlines()  #按行读取，每行内容是list中的一个元素，全部内容组成一个整体的list
#这里需要先手动将txt文件中的最后一行换行去掉否则会多一个'\n'
#print(f)
li=[]
for x in f:
    li.append(x.strip().split(' ')) #strip()删除字符串前后空格，这里是去掉了最后的换行符'\n'，然后再按' '分割每行的每个元素，原本在同一子list中的一行元素也彼此独立出来
#print(li)
for x in li:
    graph[int(x[0])][int(x[1])]=int(x[2])
    graph[int(x[1])][int(x[0])]=int(x[2])

def try_dijstra():
    min_d=[0xffff for i in range(27)]  #记录点i到起点1的最短距离
    route=[1 for i in range(27)]  #记录前驱顶点
    isSure=[0 for i in range(27)]  #记录各点到起点距离是否已经确定
    for i in range(2,27):
        min_d[i]=graph[i][1]  #初始化一下能直连1的顶点和1的距离
    min_d[1]=0
    isSure[1]=1

    for i in range(26):
        min=0xfffff
        temp=-1
        for j in range(2,27): # 找到当前离顶点1最近的顶点加入已经确定的“顶点阵营”
            if isSure[j]==0 and min>min_d[j]:
                min=min_d[j]
                temp=j
        isSure[temp]=1
        for j in range(2,27):# 判断从顶点1开始，在经过该顶点后，再到达其邻接顶点的距离，是否比其邻接顶点原本到顶点1的距离更近，如果更近就更新最短距离
            if min_d[j]>min_d[temp]+graph[temp][j]:
                min_d[j]=min_d[temp]+graph[temp][j]
                route[j]=temp
    return (route,min_d)

route,min_d=try_dijstra()
print(min_d[26]) #最短距离
print(route) #前驱顶点

passv=[]  #存放顶点之间的“内容”（内容最后要组成flag
for i in range(27):
    passv.append([]) # 还是在一个list中放27个list
for i in range(27):
    for j in range(27):
        passv[i].append(0)  #需要将内部list中初始化出27个“位置”否则会报错索引越界
for x in li:
    passv[int(x[0])][int(x[1])]=x[3]
    passv[int(x[1])][int(x[0])]=x[3]

y=26
l=[]
while y!=1:
    print(y) #输出终点到起点的最短路径经过的顶点
    l.append(passv[y][route[y]]) #y到其前驱顶点route[y]之间的内容
    y=route[y]
print()
l=l[::-1]
for i in range(len(l)):
    print(l[i],end='')

'''
339
[1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 5, 5, 5, 4, 4, 4, 6, 6, 6, 25, 9, 11, 12, 6, 18, 22, 25]
26 25 22 12 5 2 
FLAG{WEIVKASJVLSJCHFSJVHJSDEV}
'''
```



#### [GKCTF 2021]Random（梅森算法）

```py
import random
from hashlib import md5

def get_mask():
    file = open("random.txt","w")
    for i in range(104):
        file.write(str(random.getrandbits(32))+"\n")
        file.write(str(random.getrandbits(64))+"\n")
        file.write(str(random.getrandbits(96))+"\n")
    file.close()
get_mask()
flag = md5(str(random.getrandbits(32)).encode()).hexdigest()
print(flag)

```

通过阅读代码，我们知道是求生成104组随机数后的卜随机数

通过算法出的随机数是伪随机数，这里用到的随机数生成函数式random.getrandbits(k)

> random.getrandbits(k)
>
> 返回具有 k 个随机比特位的非负 Python 整数。 此方法随 MersenneTwister 生成器一起提供，其他一些生成器也可能将其作为 API 的可选部分提供。 在可能的情况下，getrandbits() 会启用 randrange() 来处理任意大的区间。在 3.9 版更改: 此方法现在接受零作为 k 的值。


所以这题考的其实是梅森算法，Mersenne Twister是为了解决过去伪随机生成器PRNG产生的伪随机数质量不高而生成的（传送门：[梅森旋转算法](https://liam.page/2018/01/12/Mersenne-twister/#:~:text=%E6%A2%85%E6%A3%AE%E6%97%8B%E8%BD%AC%E7%AE%97%E6%B3%95%EF%BC%88Mersenne%20Twister%20Algorithm%EF%BC%8C%E7%AE%80%E7%A7%B0%20MT%EF%BC%89%E6%98%AF%E4%B8%BA%E4%BA%86%E8%A7%A3%E5%86%B3%E8%BF%87%E5%8E%BB%E4%BC%AA%E9%9A%8F%E6%9C%BA%E6%95%B0%E5%8F%91%E7%94%9F%E5%99%A8%EF%BC%88Pseudo-Random%20Number%20Generator%EF%BC%8C%E7%AE%80%E7%A7%B0%20PRNG%EF%BC%89%E4%BA%A7%E7%94%9F%E7%9A%84%E4%BC%AA%E9%9A%8F%E6%9C%BA%E6%95%B0%E8%B4%A8%E9%87%8F%E4%B8%8D%E9%AB%98%E8%80%8C%E6%8F%90%E5%87%BA%E7%9A%84%E6%96%B0%E7%AE%97%E6%B3%95%E3%80%82.%20%E8%AF%A5%E7%AE%97%E6%B3%95%E7%94%B1%E6%9D%BE%E6%9C%AC%E7%9C%9E%EF%BC%88Makoto,%E6%98%AF%E4%B8%BA%E4%BA%86%E8%A7%A3%E5%86%B3%E8%BF%87%E5%8E%BB%20PRNG%20%E8%B4%A8%E9%87%8F%E4%BD%8E%E4%B8%8B%E7%9A%84%E9%97%AE%E9%A2%98%EF%BC%8C%E9%82%A3%E4%B9%88%E9%A6%96%E5%85%88%E6%88%91%E4%BB%AC%E5%B0%B1%E5%BF%85%E9%A1%BB%E8%A6%81%E6%9C%89%E4%B8%80%E4%B8%AA%E8%83%BD%E5%A4%9F%E5%BA%A6%E9%87%8F%20PRNG%20%E8%B4%A8%E9%87%8F%E7%9A%84%E6%96%B9%E6%B3%95%E3%80%82.%20%E5%90%A6%E5%88%99%EF%BC%8C%E3%80%8C%E5%85%AC%E8%AF%B4%E5%85%AC%E6%9C%89%E7%90%86%E5%A9%86%E8%AF%B4%E5%A9%86%E6%9C%89%E7%90%86%E3%80%8D%EF%BC%8C%E6%88%91%E4%BB%AC%E5%B0%B1%E6%97%A0%E6%B3%95%E5%AF%B9%20PRNG%20%E4%BD%9C%E5%87%BA%E7%BB%9F%E4%B8%80%E7%9A%84%E8%AF%84%E4%BB%B7%E4%BA%86%E3%80%82.)）。我们了解MT19937能做生成在1<=k<=623个均匀分布的32位随机数。而真巧我们已经有624(（104+104*64/32+104\*96/32）=624)个生成的随机数了，也就是说，根据已有的随机数，我们完全可以推出下面会生成的随机数

我们需要用到rendcrack库

先了解一下rendcrack

> randcrack
> 工作原理
> 该生成器基于M e r s e n n e T w i s t e r MersenneTwisterMersenneTwister（梅森算法），能够生成具有优异统计特性的数字（与真正的随机数无法区分）。但是，此生成器的设计目的不是加密安全的。您不应在关键应用程序中用作加密方案的PRNG。
> 您可以[在维基百科上]了解有关此生成器的更多信息(https://en.wikipedia.org/wiki/Mersenne_Twister).
> 这个饼干的工作原理如下。
> 它从生成器获得前624个32位数字，并获得Mersenne Twister矩阵的最可能状态，即内部状态。从这一点来看，发电机应该与裂解器同步。
> 如何使用
> 将生成器生成的32位整数准确地输入cracker非常重要，因为它们无论如何都会生成，但如果您不请求它们，则会删除它们。 同样，您必须在出现新种子之后，或者在生成624 ∗ 32 位之后，准确地为破解程序馈电，因为每个624 ∗ 32 位数字生成器都会改变其状态，并且破解程序设计为从某个状态开始馈电。

```py
from hashlib import md5
from randcrack import RandCrack
def foo(l,i):
    a=[]
    a.append(l[i])
    b1=l[i+1]>>32
    b2=l[i+1]&(2**32-1)
    a.append(b2)
    a.append(b1)
    b1=l[i+2]>>64
    b2=(l[i+2]&(2**64-1))>>32
    b3=l[i+2]&(2**32-1)
    a.append(b3)
    a.append(b2)
    a.append(b1)
    return a
with open(r'random.txt','r') as f:
    l=f.readlines()
l=[int(i.strip()) for i in l]
ll=[]
for i in range(0,len(l),3):
    ll+=foo(l,i)
rc=RandCrack()
for i in ll:
    rc.submit(i)
aa=rc.predict_getrandbits(32)
print(md5(str(aa).encode()).hexdigest())

```

脚本源于：

代码就很容易读懂了，先将我们有的随机数排列到一个列表ll中，然后挨个用RandCrack.submit()提交，最后用RandCrack.predict_getrandbits()预测下一个32位随机数，然后md5一下输出就好了



#### [SUCTF2019]MT（梅森算法）

考点是MT19937,也就是梅森旋转算法

```py
from Crypto.Random import random
from Crypto.Util import number
from flag import flag

def convert(m):
    m = m ^ m >> 13
    m = m ^ m << 9 & 2029229568
    m = m ^ m << 17 & 2245263360
    m = m ^ m >> 19
    return m

def transform(message):
    assert len(message) % 4 == 0
    new_message = ''
    for i in range(len(message) / 4):
        block = message[i * 4 : i * 4 +4]
        block = number.bytes_to_long(block)
        block = convert(block)
        block = number.long_to_bytes(block, 4)
        new_message += block
    return new_message

transformed_flag = transform(flag[5:-1].decode('hex')).encode('hex')
print 'transformed_flag:', transformed_flag
# transformed_flag: 641460a9e3953b1aaa21f3a2

```

加密原理很简单，就是通过 **convert()** 函数获取随机数将 flag 加密。考的题型是 **逆向 extract_number函数**

解题EXP：

```py
#python2
from Crypto.Util import number

# right shift inverse
def inverse_right(res, shift, bits=32):
    tmp = res
    for i in range(bits // shift):
        tmp = res ^ tmp >> shift
    return tmp


# right shift with mask inverse
def inverse_right_mask(res, shift, mask, bits=32):
    tmp = res
    for i in range(bits // shift):
        tmp = res ^ tmp >> shift & mask
    return tmp

# left shift inverse
def inverse_left(res, shift, bits=32):
    tmp = res
    for i in range(bits // shift):
        tmp = res ^ tmp << shift
    return tmp


# left shift with mask inverse
def inverse_left_mask(res, shift, mask, bits=32):
    tmp = res
    for i in range(bits // shift):
        tmp = res ^ tmp << shift & mask
    return tmp


def extract_number(y):
    y = y ^ y >> 11
    y = y ^ y << 7 & 2636928640
    y = y ^ y << 15 & 4022730752
    y = y ^ y >> 18
    return y&0xffffffff

def convert(y):
    y = inverse_right(y,19)
    y = inverse_left_mask(y,17,2245263360)
    y = inverse_left_mask(y,9,2029229568)
    y = inverse_right(y,13)
    return y&0xffffffff

def transform(message):
    assert len(message) % 4 == 0
    new_message = ''
    for i in range(len(message) / 4):
        block = message[i * 4 : i * 4 +4]
        block = number.bytes_to_long(block)
        block = convert(block)
        block = number.long_to_bytes(block, 4)
        new_message += block
    return new_message

transformed_flag = '641460a9e3953b1aaa21f3a2'
c = transformed_flag.decode('hex')
flag = transform(c)
print flag.encode('hex')

```

第二种解法是基于出题人的算法，使得明文通过不断的加密最后还是明文。

```py
#python2
from Crypto.Random import random
from Crypto.Util import number

def convert(m):
    m = m ^ m >> 13
    m = m ^ m << 9 & 2029229568
    m = m ^ m << 17 & 2245263360
    m = m ^ m >> 19
    return m

def transform(message):
    assert len(message) % 4 == 0
    new_message = ''
    for i in range(len(message) / 4):
        block = message[i * 4 : i * 4 +4]
        block = number.bytes_to_long(block)
        block = convert(block)
        block = number.long_to_bytes(block, 4)
        new_message += block
    return new_message
def circle(m):
    t=m
    while True:
        x=t
        t=transform(t)
        if t==m:
            return x
transformed_flag='641460a9e3953b1aaa21f3a2'
flag = circle(transformed_flag.decode('hex')).encode('hex')
print('transformed_flag:', flag)

```

#### [De1CTF2019]xorz（重复密钥异或用汉明距离）

```py
from itertools import *
from data import flag,plain

key=flag.strip("de1ctf{").strip("}")
assert(len(key)<38) 37
salt="WeAreDe1taTeam"
ki=cycle(key)
si=cycle(salt)
cipher = ''.join([hex(ord(p) ^ ord(next(ki)) ^ ord(next(si)))[2:].zfill(2) for p in plain])
print cipher
# output:
# 49380d773440222d1b421b3060380c3f403c3844791b202651306721135b6229294a3c3222357e766b2f15561b35305e3c3b670e49382c295c6c170553577d3a2b791470406318315d753f03637f2b614a4f2e1c4f21027e227a4122757b446037786a7b0e37635024246d60136f7802543e4d36265c3e035a725c6322700d626b345d1d6464283a016f35714d434124281b607d315f66212d671428026a4f4f79657e34153f3467097e4e135f187a21767f02125b375563517a3742597b6c394e78742c4a725069606576777c314429264f6e330d7530453f22537f5e3034560d22146831456b1b72725f30676d0d5c71617d48753e26667e2f7a334c731c22630a242c7140457a42324629064441036c7e646208630e745531436b7c51743a36674c4f352a5575407b767a5c747176016c0676386e403a2b42356a727a04662b4446375f36265f3f124b724c6e346544706277641025063420016629225b43432428036f29341a2338627c47650b264c477c653a67043e6766152a485c7f33617264780656537e5468143f305f4537722352303c3d4379043d69797e6f3922527b24536e310d653d4c33696c635474637d0326516f745e610d773340306621105a7361654e3e392970687c2e335f3015677d4b3a724a4659767c2f5b7c16055a126820306c14315d6b59224a27311f747f336f4d5974321a22507b22705a226c6d446a37375761423a2b5c29247163046d7e47032244377508300751727126326f117f7a38670c2b23203d4f27046a5c5e1532601126292f577776606f0c6d0126474b2a73737a41316362146e581d7c1228717664091c
```

cycle函数

`cycle()` 函数是 Python 标准库 `itertools` 中的一个函数，可以在一个可迭代对象（例如列表、元组或字符串）中无限循环遍历元素。

zfill函数

返回指定长度的字符串，原字符串右对齐，前面填充0。

我们来审计代码，代码使用了p、ki、si进行了异或，未知部分有两个，flag和plain，最后输出结果是16进制的密文，salt和key都是循环使用的

salt是已知的，因此先把salt层去掉

```py
from itertools import *
salt="WeAreDe1taTeam"
si=cycle(salt)
c = '49380d773440222d1b421b3060380c3f403c3844791b202651306721135b6229294a3c3222357e766b2f15561b35305e3c3b670e49382c295c6c170553577d3a2b791470406318315d753f03637f2b614a4f2e1c4f21027e227a4122757b446037786a7b0e37635024246d60136f7802543e4d36265c3e035a725c6322700d626b345d1d6464283a016f35714d434124281b607d315f66212d671428026a4f4f79657e34153f3467097e4e135f187a21767f02125b375563517a3742597b6c394e78742c4a725069606576777c314429264f6e330d7530453f22537f5e3034560d22146831456b1b72725f30676d0d5c71617d48753e26667e2f7a334c731c22630a242c7140457a42324629064441036c7e646208630e745531436b7c51743a36674c4f352a5575407b767a5c747176016c0676386e403a2b42356a727a04662b4446375f36265f3f124b724c6e346544706277641025063420016629225b43432428036f29341a2338627c47650b264c477c653a67043e6766152a485c7f33617264780656537e5468143f305f4537722352303c3d4379043d69797e6f3922527b24536e310d653d4c33696c635474637d0326516f745e610d773340306621105a7361654e3e392970687c2e335f3015677d4b3a724a4659767c2f5b7c16055a126820306c14315d6b59224a27311f747f336f4d5974321a22507b22705a226c6d446a37375761423a2b5c29247163046d7e47032244377508300751727126326f117f7a38670c2b23203d4f27046a5c5e1532601126292f577776606f0c6d0126474b2a73737a41316362146e581d7c1228717664091c'.decode('hex')
no_salt = ''.join([chr(ord(p) ^ ord(next(si))) for p in c])
print no_salt.encode('hex')
```

```
no_salt =1e5d4c055104471c6f234f5501555b5a014e5d001c2a54470555064c443e235b4c0e590356542a130a4242335a47551a590a136f1d5d4d440b0956773613180b5f184015210e4f541c075a47064e5f001e2a4f711844430c473e2413011a100556153d1e4f45061441151901470a196f035b0c4443185b322e130806431d5a072a46385901555c5b550a541c1a2600564d5f054c453e32444c0a434d43182a0b1c540a55415a550a5e1b0f613a5c1f10021e56773a5a0206100852063c4a18581a1d15411d17111b052113460850104c472239564c0755015a13271e0a55553b5a47551a54010e2a06130b5506005a393013180c100f52072a4a1b5e1b165d50064e411d0521111f235f114c47362447094f10035c066f19025402191915110b4206182a544702100109133e394505175509671b6f0b01484e06505b061b50034a2911521e44431b5a233f13180b5508131523050154403740415503484f0c2602564d470a18407b775d031110004a54290319544e06505b060b424f092e1a770443101952333213030d554d551b2006064206555d50141c454f0c3d1b5e4d43061e453e39544c17580856581802001102105443101d111a043c03521455074c473f3213000a5b085d113c194f5e08555415180f5f433e270d131d420c1957773f560d11440d40543c060e470b55545b114e470e193c155f4d47110947343f13180c100f565a000403484e184c15050250081f2a54470545104c5536251325435302461a3b4a02484e12545c1b4265070b3b5440055543185b36231301025b084054220f4f42071b1554020f430b196f19564d4002055d79
```

去掉salt层后，就只剩下plain和key了，key就是我们要求的flag，这里我们注意到key的位数小于38位，所以使用key来循环异或加密的，对于利用重复密钥异或的情况，我们有现成的脚本Break repeating-key XOR，原理为汉明距离hamming_distance

例子

- "karolin"   and "kathrin" is 3.
- "karolin"   and "kerstin" is 3.
- 1011101 and 1001001 is   2.
- 2173896 and 2233796 is   3.

> **汉明距离（Hamming Distance）** 是衡量两个字符串（或两个二进制数）之间的差异的度量。它表示的是两个字符串（或二进制数）中相同位置上不同字符的个数。简而言之，它就是计算两个字符串中对应字符不同的位置的数量。
>
> 或者
>
> **hamming_distance**：在信息论中表示两个等长字符串在对应位置上不同字符的数目 以d(x, y)表示字符串x和y之间的汉明距离 简单来说 汉明距离度量了通过替换字符的方式将字符串x变成y所需要的最小的替换次数

```py
# coding:utf-8

# python3

no_salt =bytes.fromhex('1e5d4c055104471c6f234f5501555b5a014e5d001c2a54470555064c443e235b4c0e590356542a130a4242335a47551a590a136f1d5d4d440b0956773613180b5f184015210e4f541c075a47064e5f001e2a4f711844430c473e2413011a100556153d1e4f45061441151901470a196f035b0c4443185b322e130806431d5a072a46385901555c5b550a541c1a2600564d5f054c453e32444c0a434d43182a0b1c540a55415a550a5e1b0f613a5c1f10021e56773a5a0206100852063c4a18581a1d15411d17111b052113460850104c472239564c0755015a13271e0a55553b5a47551a54010e2a06130b5506005a393013180c100f52072a4a1b5e1b165d50064e411d0521111f235f114c47362447094f10035c066f19025402191915110b4206182a544702100109133e394505175509671b6f0b01484e06505b061b50034a2911521e44431b5a233f13180b5508131523050154403740415503484f0c2602564d470a18407b775d031110004a54290319544e06505b060b424f092e1a770443101952333213030d554d551b2006064206555d50141c454f0c3d1b5e4d43061e453e39544c17580856581802001102105443101d111a043c03521455074c473f3213000a5b085d113c194f5e08555415180f5f433e270d131d420c1957773f560d11440d40543c060e470b55545b114e470e193c155f4d47110947343f13180c100f565a000403484e184c15050250081f2a54470545104c5536251325435302461a3b4a02484e12545c1b4265070b3b5440055543185b36231301025b084054220f4f42071b1554020f430b196f19564d4002055d79')
import base64
import string

def bxor(a, b):# xor two byte strings of different lengths
   if len(a) > len(b):
        return bytes([x ^ y for x, y in zip(a[:len(b)], b)])
   else:
      return bytes([x ^ y for x, y in zip(a, b[:len(a)])])
def hamming_distance(b1, b2):
    differing_bits =0

    for byte in bxor(b1, b2):
        differing_bits += bin(byte).count("1")
    return differing_bits

def score(s):
   freq = {}
   freq[' '] = 700000000
   freq['e'] = 390395169
   freq['t'] = 282039486
   freq['a'] = 248362256
   freq['o'] = 235661502
   freq['i'] = 214822972
   freq['n'] = 214319386
   freq['s'] = 196844692
   freq['h'] = 193607737
   freq['r'] = 184990759
   freq['d'] = 134044565
   freq['l'] = 125951672
   freq['u'] = 88219598
   freq['c'] = 79962026
   freq['m'] = 79502870
   freq['f'] = 72967175
   freq['w'] = 69069021
   freq['g'] = 61549736
   freq['y'] = 59010696
   freq['p'] = 55746578
   freq['b'] = 47673928
   freq['v'] = 30476191
   freq['k'] = 22969448
   freq['x'] = 5574077
   freq['j'] = 4507165
   freq['q'] = 3649838
   freq['z'] = 2456495

   score = 0
   string=bytes.decode(s)
   for c in string.lower():
       if c in freq:
            score += freq[c]
   return score

def break_single_key_xor(b1):
    max_score = 0
    english_plaintext = 0
    key = 0

    for i in range(0,256):
        b2 = [i]* len(b1)
        try:
            plaintext = bxor(b1, b2)
            pscore = score(plaintext)
        except Exception:
            continue
        if pscore > max_score or not max_score:
           max_score = pscore
           english_plaintext = plaintext
           key = chr(i)
    return key

b = no_salt

normalized_distances = []

for KEYSIZE in range(2, 40):

   # 我们取其中前6段计算平局汉明距离

   b1 = b[: KEYSIZE]
   b2 = b[KEYSIZE: KEYSIZE * 2]
   b3 = b[KEYSIZE * 2: KEYSIZE * 3]
   b4 = b[KEYSIZE * 3: KEYSIZE * 4]
   b5 = b[KEYSIZE * 4: KEYSIZE * 5]
   b6 = b[KEYSIZE * 5: KEYSIZE * 6]
   b7 = b[KEYSIZE * 6: KEYSIZE * 7]

   normalized_distance = float(
      hamming_distance(b1, b2) +
      hamming_distance(b2, b3) +
      hamming_distance(b3, b4) +
      hamming_distance(b4, b5) +
      hamming_distance(b5, b6) 
   ) / (KEYSIZE * 5)
   normalized_distances.append(
      (KEYSIZE, normalized_distance)
   )

normalized_distances = sorted(normalized_distances, key=lambda x: x[1])


for KEYSIZE, _ in normalized_distances[:5]:
   block_bytes = [[] for _ in range(KEYSIZE)]
   for i, byte in enumerate(b):
        block_bytes[i % KEYSIZE].append(byte)
   keys = ''

   for bbytes in block_bytes:
        keys += break_single_key_xor(bbytes)
   key = bytearray(keys * len(b), "utf-8")
   plaintext = bxor(b, key)
   print("keysize:", KEYSIZE)
   print("key is:", keys, "n")
   s = bytes.decode(plaintext)
   print(s)
```

![image-20250310220753348](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503102208453.png)

参考

https://www.jianshu.com/p/ecd767d9af0d

[小记一类ctf密码题解题思路 ](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.anquanke.com%2Fpost%2Fid%2F161171)

 [https://xz.aliyun.com/t/3256#toc-22](https://links.jianshu.com/go?to=https%3A%2F%2Fxz.aliyun.com%2Ft%2F3256%23toc-22)

 [https://cypher.codes/writing/cryptopals-challenge-set-1](https://links.jianshu.com/go?to=https%3A%2F%2Fcypher.codes%2Fwriting%2Fcryptopals-challenge-set-1)

 [https://cryptopals.com/sets/1/challenges/6](https://links.jianshu.com/go?to=https%3A%2F%2Fcryptopals.com%2Fsets%2F1%2Fchallenges%2F6)

https://mp.weixin.qq.com/s?__biz=MzU3ODc2NTg1OA==&mid=2247484089&idx=1&sn=3f41f1d65595f47dc72918b22cffc128&chksm=fd7117f4ca069ee292d6bbabe37d5aa9445747d0c13dd8b2d2f1d274f7afa32f910fe28ff07e&mpshare=1&scene=23&srcid=&sharer_sharetime=1565101436270&sharer_shareid=0a12e40935fbeb4e04dfab7ff42aca93#rd

#### [羊城杯 2020]GMC（二次剩余和勒让德符号）



#### [De1CTF2019]Babylfsr(B-M算法)

参考：[ctfwiki](https://ctf-wiki.org/crypto/streamcipher/fsr/lfsr/#b-m)



#### [UTCTF2020]Curveball（Shamir秘密共享算法）

Shamir秘密共享算法基本原理

![image-20250724110310401](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507241103589.png)

![image-20250724113125617](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507241131729.png)

```
(C81E728D9D4C2F636F067F89CC14862C, 31E96A93BF1A7CE1872A3CCDA6E07F86)
(ECCBC87E4B5CE2FE28308FD9F2A7BAF3, ADF6E4F1052BDE978344743CCDCF5771)
(E4DA3B7FBBCE2345D7772B0674A318D5, 0668FBCFE4098FEA0218163AC21E6531)
```

题目中的三组数据为md5加密后的数据，md5解密得到

```
(2,5398141)
(3,5398288)
(5,5398756)

```

所以用sage在有限域上解密 exp.sage

```
x_0,y_0 = (2,5398141)
x_1,y_1 = (3,5398288)
x_2,y_2 = (5,5398756)
R.<x> = QQ[]
l_0 = ((x-x_1)/(x_0-x_1))*((x-x_2)/(x_0-x_2))
l_1 = ((x-x_0)/(x_1-x_0))*((x-x_2)/(x_1-x_2))
l_2 = ((x-x_0)/(x_2-x_0))*((x-x_1)/(x_2-x_1))
f_x = (y_0*l_0) + （y_1*l_1） + （y_2*l_2）
print(f_x)

```

得到

```
29*x^2 + 2*x + 5398021
```

但5398021不是flag，那只能是txt行数，我们在5398021看到flag

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/5b011611a86ccd031604a199941fff21.png)
