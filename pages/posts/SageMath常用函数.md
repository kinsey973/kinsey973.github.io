---
title: SageMath常用函数
date: 2020-04-05 00:26:43
categories:
- 密码学
tags:
- 抽象代数
- 安全
- python
---

# SageMath常用函数

> panfengblog 于 2020-04-05 00:26:43 发布 阅读量2.6w 收藏 255 点赞数 46
> 文章链接：https://blog.csdn.net/weixin_44338712/article/details/105320810

## SageMath常用函数

### 一、算术函数

#### 1.1 基本运算

##### +、-、*、/

加减乘除大家都懂

##### 近似除法（RealDoubleField）

```Python
print(RDF(5/3))#近似除法
print(5/3)
```

```
1.6666666666666667
5/3
```

通常用来在近似计算中将表达式变成实数，损失一定精度，但可以提高计算效率

##### 模除

```python
print(5//3)
```

```
1
```

##### 幂运算

```python
print(2^3,2**3)
```

```
8 8
```

##### 向下、向上取整

```python
print(floor(5/3),ceil(5/3))
```

```
1 2
```

#### 1.2 最大公因数&最小公倍数

```python
print(gcd(6,9),lcm(6,9))
```

```
3 18
```

#### 1.3 扩展欧几里得算法

```python
a=6
b=9
g,s,t=xgcd(a,b)
print(str(g)+"="+str(s)+"*"+str(a)+"+"+str(t)+"*"+str(b))
```

```
3=-1*6+1*9
```

#### 1.4 幂模运算

```python
print("17^20200301(mod 105)="+str(power_mod(17,2020301,105)))
```

```
17^20200301(mod 105)=47
```

#### 1.5 模逆运算

```python
print("5^-1="+str(inverse_mod(5,14))+"(mod 14)")
```

```
5^-1=3(mod 14)
```

#### 1.7 中国剩余定理

${x≡1(mod11)x≡2(mod3)x≡3(mod5)x≡4(mod7)\begin{cases}
x\equiv1(mod 11)\\
x\equiv2(mod 3)\\
x\equiv3(mod 5)\\
x\equiv4(mod 7)\\
\end{cases}$ 

```python
print(crt([1,2,3,4],[11,3,5,7]))
```

```
683
```

即 $\begin{cases}x\equiv683(mod 1155)\end{cases}$ 

#### 1.8 素数相关函数

判断是否为素数

```python
print(is_prime(3),is_prime(4))#判断是否为素数
```

```
True False
```

求第几位素数

```python
print(nth_prime(1),nth_prime(2),nth_prime(10))#第几个素数
```

```
2 3 29
```

求小于a的最大素数、大于a的最小素数

```python
print("大于10的最小素数:"+str(next_prime(10))+",小于10的最大素数:"+str(previous_prime(10)))
```

```
大于10的最小素数:11,小于10的最大素数:7
```

前n个素数

```python
print(primes_first_n(10))#前十个素数
```

```
[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```

区间内的素数

```python
print(list(primes(2,30)))#区间[2,30)内的素数，左闭右开
```

```
[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```

欧拉函数

```python
print(euler_phi(31))#欧拉函数
```

```
30
```

#### 1.9 整数分解

分解整数

```python
print(factor(100))
```

```
2^2 * 5^2
```

椭圆曲线分解寻找素因子

```python
print(ecm(1234567))
```

```
GMP-ECM 7.0.4 [configured with MPIR 3.0.0, --enable-asm-redc] [ECM]
Input number is 1234567 (7 digits)
Using B1=10, B2=84, polynomial x^1, sigma=1:3332739923
Step 1 took 0ms
Step 2 took 0ms
********** Factor found in step 2: 127
Found prime factor of 3 digits: 127
Prime cofactor 9721 has 4 digits
```

二次筛法分解

```python
print(qsieve(12345678901234567890123456789012345678902))
```

```
([2, 22, 6418, 70598, 349745854025172608009389976741900498, 3847204394276898688103289744160905478, 1122334445566778899102132435364758698082], '')
```

仅求出素因子

```python
print(prime_divisors(100))
```

```
[2, 5]
```

### 二、代数系统

#### 2.1 P元有限域

有限域 $z_7$ 

```python
k1=GF(7)
```

操作 $z_7$ 上的元素

```python
a=k1(5)
print(a,a^6,a^-1)
```

```
5 1 3
```

求解 $x^5\equiv2(mod 7)$ 和 $x^2\equiv2(mod 7)$ 

```python
print(k1(2).nth_root(5),k1(2).sqrt(2))
```

```
4 3
```

$z_7$ 的模多项式，以及其根

```python
print(k1.modulus(),k1.gen())
```

```
x + 6 1
```

用本原多项式生成 $z^7$ 

```Python
k2=GF(7,modulus='primitive')
print(k2.modulus(),k2.gen())
```

```
x + 4 3
```

#### 2.2 $p^n$ 元有限域

定义一个 $z^{7^3}$ 的有限域，以及对应的本原多项式、本原多项式的根、有限域元素个数、元素的阶

```Python
k1.<x>=GF(7^3,modulus='primitive')
print(k1.modulus())
print(k1.gen())
print(k1.order())
print((x+2).multiplicative_order())
```

```
x^3 + 6*x^2 + 4
x
343
19
```

在有限域中计算 $x^{100}$ 

```Python
print(x^100)
```

```
2*x^2 + x + 4
```

指定不可约多项式生成有限域，如 $x^3+2*x^2+1$ 

```Python
k2.<a>=GF(7^3,modulus=[1,0,2,1])#低次写到高次的系数
print(k2.modulus())
print(k2.gen())
print(k2.order())
print((a+2).multiplicative_order())
```

```
x^3 + 2*x^2 + 1
a
343
38
```

计算极小多项式，可通过列表获取系数

```Python
print(a^100)
print((a^100).minimal_polynomial())
print((a^100).minimal_polynomial()[0],(a^100).minimal_polynomial()[1])
```

```
2*a^2 + 5*a + 4
x^3 + 4*x^2 + 4*x + 6
6 4
```

#### 2.3 整数环

环的定义

```python
r=Zmod(26)
r=Integers(26)#环Z26的两种写法
a=r(9)
b=r(8)
print(a*b)
```

```
20
```

求逆、求离散对数、判断是否平方元、求平方根

```python
a^-1,a.log(7),a.is_square(),a.sqrt()
```

```
(3, 4, True, 3)
```

求a的乘法阶和加法阶

```python
a.multiplicative_order(),a.additive_order()
```

```
(3, 26)
```

求a的极小多项式

```python
print(a.minimal_polynomial())
```

```
x + 17
```

#### 2.4 多项式环

##### 一元多项式环

```python
R.<x>=ZZ[]#定义R为整系数上的多项式环，文字为x
f=4*x^2+4*x+1#定义f为整系数一元多项式
print(f.is_irreducible(),f.factor())#判断一元多项式是否可约
```

```
False (2*x + 1)^2
```

定义多项式的两种方式

```python
g=3*x^2+2*x+1#直接定义
s=R([1,2,3])#使用列表定义
print(g==s)
```

```
True
```

模除多项式、查找多项式的整数解

```python
print(f.factor_mod(3))
print(f.roots())
```

```
(x + 2)^2
[]
```

##### 环上的多项式

```python
R.<x>=Zmod(26)[]#定义R为Z26上的环，文字为x
f=(x+1)*(x^3+x+1)#定义环上的一个多项式f
print(f)
print("多项式的次数:",f.degree())#多项式的次数
print("多项式的值:",f(7))#多项式的值
print("幂运算:",f^2)#幂运算
print("最高公因式:",f.gcd(x+1))#最高公因式
print("扩展欧几里得算法:",f.xgcd(x+1))#扩展欧几里得算法
print("带余除法:",f.quo_rem(3*x-1))#带余除法
print("模运算:",f%(3*x-1))#模运算
print("整除:",f//(3*x-1))#整除
```

```
x^4 + x^3 + x^2 + 2*x + 1
多项式的次数: 4
多项式的值: 0
幂运算: x^8 + 2*x^7 + 3*x^6 + 6*x^5 + 7*x^4 + 6*x^3 + 6*x^2 + 4*x + 1
最高公因式: x + 1
扩展欧几里得算法: (x + 1, 0, 1)
带余除法: (9*x^3 + 12*x^2 + 13*x + 5, 6)
模运算: 6
整除: 9*x^3 + 12*x^2 + 13*x + 5
```

##### 域上的多项式

```python
R.<x>=Zmod(13)[]#定义R为Z13上的环，文字为x  与GF(13)相同
#R.<x>=GF(13)[]  等价定义
f=(x+1)*(x^3+x+1)#定义环上的一个多项式f
print(f.is_irreducible(),f.factor())#判断多项式是否可约，多项式因式分解
print(f.roots())#多项式求根，以及重数
```

```
False (x + 1) * (x + 6) * (x^2 + 7*x + 11)
[(12, 1), (7, 1)]
```

### 三、矩阵操作

定义整数环上的矩阵，并作求逆运算

```python
mt=matrix(r,2,2,[[24,15],[19,14]])#定义矩阵并赋值
print(mt[0][0])
print(mt)
print(mt^-1)
```

```
24
[24 15]
[19 14]
[12 15]
[19  2]
```

矩阵乘法

```python
mt2=matrix(r,2,2,[[17,23],[23,20]])
print(mt2)
print((mt^-1)*mt2)
```

```
[17 23]
[23 20]
[3 4]
[5 9]
```