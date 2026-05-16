import{Bt as e,Gn as t,Gt as n,H as r,Qn as i,Rt as a,V as o,X as s,_n as c}from"./framework.DfD1zdSt.js";import{t as l}from"./theme.DMgGaAyl.js";import"./chunks/vue-i18n.BSMUyWAh.js";import{a as u,i as d}from"./chunks/vue-router.DZdD3Cav.js";var f={__name:`crypto-1`,setup(f,{expose:p}){let m=t(JSON.parse(`{"title":"crypto-","description":"","frontmatter":{"title":"crypto-","date":"2025-05-11 14:33:47","tags":["crypto"],"categories":["密码笔记"]},"headers":[],"relativePath":"pages/posts/crypto-1.md"}`)),h=u(),g=d(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,e(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{title:`crypto-`,date:`2025-05-11 14:33:47`,tags:[`crypto`],categories:[`密码笔记`]}}),(e,t)=>{let u=l;return a(),r(u,{frontmatter:i(_)},{"main-content-md":c(()=>[...t[0]||=[o(`p`,null,`摘要：Zer0pts2020ROR 这道题重点是看ror 我们知道了每次以bit为单元移动且题目告诉了我们所有位的pow结果 也就是题目想要我们逆向计算binm的每一位来反推m 注意到n为偶数。而奇数mod偶数末位为1 偶数mod偶数末位为0。`,-1),o(`p`,null,`<!-- more -->`,-1),o(`h2`,{id:`zer0pts2020-ror`,tabindex:`-1`},[s(`[Zer0pts2020]ROR `),o(`a`,{class:`header-anchor`,href:`#zer0pts2020-ror`,"aria-label":`Permalink to "[Zer0pts2020]ROR"`},`​`)],-1),o(`div`,{class:`language-py`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`py`),o(`pre`,null,[o(`code`,{class:`language-py`},`import random
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

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`这道题重点是看ror`,-1),o(`p`,null,`我们知道了每次以bit为单元移动且题目告诉了我们所有位的pow结果`,-1),o(`p`,null,`也就是题目想要我们逆向计算bin(m)的每一位来反推m 注意到n为偶数！！！ 而奇数mod偶数末位为1 偶数mod偶数末位为0！`,-1),o(`p`,null,`所以根据每次pow的结果我们可以确定一个比特位！！！`,-1),o(`p`,null,`最后取个反序 long_to_bytes即可得到flag`,-1),o(`div`,{class:`language-py`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`py`),o(`pre`,null,[o(`code`,{class:`language-py`},`from Crypto.Util.number import *
from Crypto.PublicKey.RSA import * 
import primefac

with open(r'.\\chall.txt','r+') as f:
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

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1)]]),"main-header":c(()=>[n(e.$slots,`main-header`)]),"main-header-after":c(()=>[n(e.$slots,`main-header-after`)]),"main-nav":c(()=>[n(e.$slots,`main-nav`)]),"main-content-before":c(()=>[n(e.$slots,`main-content-before`)]),"main-content":c(()=>[n(e.$slots,`main-content`)]),"main-content-after":c(()=>[n(e.$slots,`main-content-after`)]),"main-nav-before":c(()=>[n(e.$slots,`main-nav-before`)]),"main-nav-after":c(()=>[n(e.$slots,`main-nav-after`)]),comment:c(()=>[n(e.$slots,`comment`)]),footer:c(()=>[n(e.$slots,`footer`)]),aside:c(()=>[n(e.$slots,`aside`)]),"aside-custom":c(()=>[n(e.$slots,`aside-custom`)]),default:c(()=>[n(e.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{f as default};