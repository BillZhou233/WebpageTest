---
layout: post
title: Cloud Studio - 你现在没法使用的已废设在线 IDE
date: 2019-12-13
tags: ['C++', 'JavaScript', '开发']
categories: main
---

旧版 Cloud Studio 是个很适合 JavaScript 的在线 IDE，笔者用了大半年了，不过现在没了。

然而这东西的新版有点坑，一天使用时间有限制，而老版本不会...

### Overview

Cloud Studio 是由某讯云推出的功能强大的在线 IDE。目前其有两个版本：

 - 基于 VSCode 代码的新版本
   - 简直就是 VSCode 的完全移植
   - 使用有时间限制
   - 云终端为 Ubuntu 18.04，支持连接自己的 VPS
   - 账号系统使用 Coding 企业版
   
 - 旧版本
   - 使用无时间限制
   - 云终端为 Ubuntu 16.04，默认带有 g++ 和 Python 2/3
   - 账号系统使用腾讯云

本文主要介绍旧版本。

### 账号注册

腾讯云这东西的账号系统坑点很多，注册要微信扫码，异地登陆要微信扫码或验证手机，反正很多东西不配置的话对学校不让带手机的 OIer 们并不友好。因此，笔者推荐邮箱或 QQ 注册 [腾讯云](//cloud.tencent.com/) （虽然还是要扫码），然后去 [账号安全设置](//console.cloud.tencent.com/developer/security) 里面关掉“登录保护”和“异地登录校验”。准备完毕之后进入 [腾讯云在线开发者平台](//dev.tencent.com/) 初始化一下账户并且新建一个代码仓库。

### 开始使用

先点开你需要编辑的代码仓库，并在左侧边栏里面选择“代码浏览”一项，此时便可以看到上方的“使用 Cloud Studio 编辑”的字样，点一下就可以进入工作空间了。

![](https://s2.ax1x.com/2019/12/13/Q2n7tS.jpg)

如果是第一次编辑某个仓库，网站会自动创建好工作空间，以后再进入时就会直接载入先前创建好的工作空间。进入工作空间之后，主界面大概长这样：

![](https://s2.ax1x.com/2019/12/13/Q2uYHP.jpg)

我们在左边文件夹区新建一个代码文件，双击打开它，就可以在编辑区里面编辑了。

### C++ 基本套路

这个部分是用 iPad 写的。

在 Cloud Studio 里面编译运行 C++ 代码需要借助云终端来完成，基本的操作过程和在 Linux 实机终端下手动编译运行的过程基本一致。

在终端中手动编译一份 C++ 代码，一般使用这个命令

<pre class="command-line language-bash" data-prompt="workspace git:(master) $"><code class="language-bash">g++ [source].cpp -o [program] -lm -Wall</code></pre>

编译成功后应该就可以在文件夹区看到生成的可执行程序了，然后用这个命令来运行

<pre class="command-line language-bash" data-prompt="workspace git:(master) $"><code class="language-bash">./[program]</code></pre>

至于调试，这货只支持手动 gdb 调试，然鹅笔者不会用手动调试，一般都直接用本地 VSCode 来调。 

### 文件操作

首先，在 Cloud Studio 里面写代码是可以使用 `freopen` 重定向到文件输出的，但是需要注意文件的大小以免文件过大没办法下下来...

文件在编辑区里面编辑完之后会自动保存到工作空间，如果想要下载到本地，直接在文件夹区里面右键要下载的文件（夹）点“下载”就行了。浏览器会自动把文件保存在下载目录里面，如果是文件夹，则会自动压缩为 `tar.gz` 格式。