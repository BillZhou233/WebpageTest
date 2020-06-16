# 这里是 h1

## 这里是 h2

### 这里是 h3

#### 这里是 h4

##### 这里是 h5

###### 这里是 h6

```
# 这里是 h1
## 这里是 h2
### 这里是 h3
#### 这里是 h4
##### 这里是 h5
###### 这里是 h6
```

## 段落

段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落

段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落

## 超链接

[TMaize Blog](http://blog.tmaize.net)

```
[TMaize Blog](http://blog.tmaize.net)
```

## 引用

> 这里是引用

```
> 这里是引用
```

## 常见字体样式

_斜体_

**粗体**

~~删除线~~

```
_斜体_
**粗体**
~~删除线~~
```

## 列表

- 无序列表 1-1

  缩进 2 空格

  - 缩进 2 空格
  - 缩进 2 空格

- 无序列表 1-2
- 无序列表 1-3

1. 有序列表 1-1

   缩进 3 空格

   1. 缩进 3 空格
   2. 缩进 3 空格

2. 有序列表 1-2
3. 有序列表 1-3

```
- 无序列表 1-1

  缩进 2 空格

  - 缩进 2 空格
  - 缩进 2 空格

- 无序列表 1-2
- 无序列表 1-3

1. 有序列表 1-1

   缩进 3 空格

   1. 缩进 3 空格
   2. 缩进 3 空格

2. 有序列表 1-2
3. 有序列表 1-3
```

## 分割线

---

```
---
```

## 代码块

```cpp
#include <bits/stdc++.h>
int main ()
{
    puts("Awee, World!");
    system("PAUSE");
    return 0;
}
```

````
```cpp
#include <bits/stdc++.h>
int main ()
{
    puts("Awee, World!");
    system("PAUSE");
    return 0;
}
```
````

## 表格测试

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

```md
| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |
```

## Extend

docsify extends Markdown syntax to make your documents more readable.

> Note:  For the special code syntax cases, you'd better put them within a code backticks to avoid any conflicting from configurations or emojis. 

## important content

Important content like:

```markdown
!> **Time** is money, my friend!
```

is rendered as:

!> **Time** is money, my friend!

## General tips

General tips like:

```markdown
?> _TODO_ unit test
```

are rendered as:

?> _TODO_ unit test

## Ignore to compile link

Some time we will put some other relative path to the link, you have to need to tell docsify you don't need to compile this link. For example

```md
[link](/demo/)
```

It will be compiled to `<a href="/#/demo/">link</a>` and will be loaded `/demo/README.md`. Maybe you want to jump to `/demo/index.html`.

Now you can do that

```md
[link](/demo/ ':ignore')
```

You will get `<a href="/demo/">link</a>`html. Do not worry, you can still set title for link.

```md
[link](/demo/ ':ignore title')

<a href="/demo/" title="title">link</a>
```

## Set target attribute for link

```md
[link](/demo ':target=_blank')
[link](/demo2 ':target=_self')
```

## Disable link

```md
[link](/demo ':disabled')
```

## Github Task Lists

```md
- [ ] foo
- bar
- [x] baz
- [] bam <~ not working
  - [ ] bim
  - [ ] lim
```

- [ ] foo
- bar
- [x] baz
- [] bam <~ not working
  - [ ] bim
  - [ ] lim

## Markdown in html tag

You need to insert a space between the html and markdown content.
This is useful for rendering markdown content in the details element.

```markdown
<details>
<summary>Self-assessment (Click to expand)</summary>

- Abc
- Abc

</details>
```

<details>
<summary>Self-assessment (Click to expand)</summary>

- Abc
- Abc

</details>