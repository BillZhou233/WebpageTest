# Docsify - 简单生成在线文档页的方法

## 0x00 概述

[Docsify](https://docsify.js.org/) 是一个无需后端的、完全运行时驱动的网页生成器，它以 Markdown 为源文件，直接在浏览器端生成在线文档页。不过由于这一特性，它对 SEO 并不够友好。如果你只是想要快速得到可用的文档，并不关注 SEO，同时也不想安装大量依赖，它便是非常好的选择！并且，Docsify 的核心文件仅大约 80~90KB，并且可以通过 UNPKG 等 CDN 进行分发，提升载入速度。

截至编写该教程时，Docsify 的版本为 4.11.3，本教程基于该版本编写，但模板中的 CDN 地址则会自动请求 4.x 的最新版本。

## 0x01 前置知识

大部分开发者使用 GitHub 来存放自己的项目，并采用 GitHub Pages 来部署项目文档。这种情况下只需要一个顺手的编辑器和能访问 GitHub 的 Git/SVN 客户端便可以基于 GitHub Pages 来部署 Docsify，而无需在自己的设备上利用 NPM / PIP 等安装其他环境。

在 GitHub Pages 中部署项目文档时，可将 Docsify 核心文件以及文档对应的 Markdown 文件新开一个仓库专门存放。或者，也可以将文件放置在项目根目录下的某个子文件夹，再在项目 Settings 里面指派 Source 项即可。无论您选用何种方式，部署后默认的访问地址均为 `https://<username>.github.io/<repo>/`。

除了 GitHub Pages 之外，它也支持在任意的静态网站服务器软件上部署，例如笔者本地测试使用的是 nginx。

## 0x02 快速开始

在站点根目录新建 `index.html`，粘贴[模板代码](https://www.luogu.com.cn/paste/t0xw1xfb)的内容并修改自己的标题。

接下来，新建 `README.md`，向里面写入首页的内容。

在上传至 GitHub 前，还需要新建一个名为 `.nojekyll` 的文件，无需写入任何内容，以防止 GitHub Pages 用默认的 Jekyll 方式将 Markdown 生成为网页。

部署后的页面应该长这样：

![Nkuf9P.png](https://s1.ax1x.com/2020/06/16/Nkuf9P.png)

如果 Markdown 正文中的内容能正常渲染，说明已经成功部署。但是如图中所见，代码高亮等功能仍然需要更多的配置。

## 0x03 基础配置

### 更多 Markdown 页面

在站点根目录及其子目录下新建一些 Markdown 文件，部署后在地址栏的 `/#/` 后加上 Markdown 文件的相对路径（无需 `.md` 后缀）即可载入对应文档。

例如，文件名为 `debug.md`，则地址栏中内容为 `https://<username>.github.io/<repo>/#/debug`。

文件相对路径为 `./test/test.md`，则地址栏中内容为 `https://<username>.github.io/<repo>/#/test/test`。

### 侧边目录

首先在站点根目录新建 `_sidebar.md`，以 Markdown 列表的形式书写文档目录，每个节点可以是链接或普通文本。例如：

```md
- [首页]()
- [一级分类 1](/1)
  - [二级分类 1](/1.1)
  - [二级分类 2](/1.2)
- [一级分类 2](/2)
  - [二级分类 1](/2.1)
```

接下来，在 `index.html` 的配置区域添加如下内容（用上面的模板就取消注释即可，手动添加注意区分大小写）：

```js
loadSidebar: true,
```

部署后侧边栏的目录应该长这样：

![Nklgr8.png](https://s1.ax1x.com/2020/06/16/Nklgr8.png)

### 代码高亮

Docsify 默认的代码高亮仅支持 HTML、JS、CSS，我们需要引入 PrismJS 的语言模块来让其支持对应的语言。例如，对于 C++，请在 `</body>` 前加上如下的代码。

```html
<script src="https://unpkg.com/prismjs@1/components/prism-clike.min.js"></script>
<script src="https://unpkg.com/prismjs@1/components/prism-c.min.js"></script>
<script src="https://unpkg.com/prismjs@1/components/prism-cpp.min.js"></script>
```

其他语言请自行去 [UNPKG](https://unpkg.com/browse/prismjs@1/components/) 里面找。

另外，部分语言模块存在着依赖关系，例如：C++ 依赖 C，而 C 又依赖 clike，请特别注意。

### 更改配色

默认的主题色不好看？Docsify 的主题色是可以自定义的。

只需要在配置区域添加如下内容：

```js
themeColor: '#66CCFF',  //主题色，填十六进制 RGB 代码
```

再次部署后即可查看效果。

### 报错页面

站点根目录下新建 `404.md`，写入 404 报错的提示.

在配置区域添加如下内容：

```js
notFoundPage: '404.md',  //报错页面
```

再次部署后即可生效。

## 0x03 进阶操作

Docsify 有着强大的拓展性，通过增强功能和拓展组件，我们可以进行很多进阶操作，大部分拓展同样可通过 UNPKG 等 CDN 分发。官方文档中有完备的增强功能介绍和拓展列表，这里先介绍常用的几个。

### 使用 jsDelivr 的访问加速

若您的文档部署在 GitHub，可以通过 jsDelivr 提供的镜像进行访问加速，只需在配置区域添加如下内容并修改为自己的仓库路径。

```js
basePath: "https://cdn.jsdelivr.net/gh/<username>/<repo>@<branch>/<optional-path>",
```

### 一键复制代码

请在 `</body>` 前加上如下的代码，引入该拓展。

```
<script src="https://unpkg.com/docsify-copy-code@2/dist/docsify-copy-code.min.js"></script>
```

在配置区域添加如下内容：

```js
copyCode: {
    buttonText : '复制',
    errorText  : '失败',
    successText: '成功',
},  //可以更改成自定义提示文本
```

部署后代码块右上角会出现复制按钮，应该长这样：

![NkDdZd.png](https://s1.ax1x.com/2020/06/16/NkDdZd.png)

### 载入其他 Markdown

这个功能类似 HTML 的 `iframe`，可以在一篇 Markdown 中直接嵌入另一篇 Markdown 的内容。

该功能无需载入拓展，只需在一般的 Markdown 链接码的 URL部分后面添加 `':include'` 即可，例如：

```md
[filename](media/example.md ':include')
```

Docsify 在渲染时会将加入 `':include'` 的链接码解析为内嵌文字而非链接，效果参考[官方文档](https://docsify.js.org/#/embed-files)。

## 0x04 相关链接

Docsify 的更多功能，在[官方文档](https://docsify.js.org/)中均有说明，可以随时参阅。

另外，[Awesome Docsify](https://github.com/docsifyjs/awesome-docsify)中有很多拓展和一些主题，也收录使用该架构构建的项目文档。