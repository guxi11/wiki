# 常见概念

## CSS中link和@import的使用区别

1.从属关系区别
@import是 CSS 提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。

2.加载顺序区别
加载页面时，link标签引入的 CSS 被同时加载；@import引入的 CSS 将在页面加载完毕后被加载。

3.兼容性区别
@import是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link标签作为 HTML 元素，不存在兼容性问题。

4.DOM可控性区别
可以通过 JS 操作 DOM ，插入link标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import的方式插入样式。

5.权重区别(该项有争议，下文将详解)
link引入的样式权重大于@import引入的样式。


原文链接：https://blog.csdn.net/qq_40990854/article/details/88426144

1. `link`最大限度支持并行下载，`@import`过多嵌套导致串行下载，出现`FOUC`(文档样式短暂失效) http://blog.poetries.top/FE-Interview-Questions/base/#_2-display-none-与visibility-hidden-的区别




