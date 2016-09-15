# BiliBili 高级弹幕 API 文档

原地址：[分类:Script - 嗶哩嗶哩百科](http://docs.bilibili.cn/wiki/%E5%88%86%E7%B1%BB:Script)

由于原始地址已经无法访问许久，在查询 BiliBili 的高级弹幕 API 时很不方便。幸好以前的一个项目保留着一份[转录的资料](https://github.com/Hozuki/DanmakuKun/tree/master/DanmakuKun/Resources)，于是以此尝试恢复这个 API 文档。

**_[文档列表](docs)_**

大多数内容为自动转换，代码见 [ax2m](ax2m)。

生成 `ax2m`：

```shell
$ cd ax2m
$ npm install
$ tsc
```

生成文档：

```shell
$ node --harmony_destructuring ax2m/src/index.js
```
