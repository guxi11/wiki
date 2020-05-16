---
sidebarDepth: 2
---

# 数据类型

## 基本类型

### String

#### 常用方法

* substring(start/end, end/start) [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes) 
* Substr(start, length); 
* includes()
* slice(1,4), slice(-3), start, end
* slice(-3), last 3
* indexOf(c, after_position)
* lastIndexOf
* replace(str | pattern, str) . return new string.
* split
* .trim() 去掉两部的空白

* char <-> asc code [r](https://www.cnblogs.com/ooo0/p/8465200.html) 
  * "A".charCodeAt();  // 65
  * String.fromCharCode(97);  // 'a'

## 对象类型

### Array

#### 判断一个JavaScript对象是不是Array

```js
typeof(arr); //返回object

arr instanceof Array; //返回true

//Array.isArray(arr) 是ES5中的方法。
Array.isArray(arr); //返回true

//最准确的方法：但是也容易被改
Object.prototype.toString.call(arr)==='[Object Array]'
/***
为什么不直接调用arr.toString()？
这是因为虽然Array继承自Object，它也有toString()方法
const a = ['Hello','Howard'];
a.toString();//"Hello,Howard"
***/
```

#### 去重

```js
uniq = [...new Set(array)];
Array.from(new Set([1,2]))
```

#### flatten

```js
let b = [1,[2,3],[[4]]];

// 缺点是元素都会被转坏为数字，场景有限
Array.prototype.flat = function() {
    console.log(this)
    this.toString().split(',').map(item => +item )
    return this
}
console.log(b.flat())

function flatten(arr) {
    return arr.reduce((acc, cur) => {
        return acc.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, [])
}
console.log(flatten(b))
```

#### 二维数组初始化

```js
let arr = Array(n).fill(0).map(() => Array(m).fill(0))
let arr = Array.from(Array(3)).map(() => Array(3).fill(0))
let arr = [...Array(3)].map(() => Array(3).fill(0))
```

先用 `Array()` 生成一维数组，然后通过 `map()` 每次迭代返回**新数组的引用**（而非同一个数组的引用），再通过 `fill()` 填充初始值。（直接 `new Array()` 返回的数组需要 `fill()` 填充值，如`undefined`，才能使用 `map`）

需要注意的是，对于Array 来说，new 是可以省略的，但完全一样。规范里这么说：[Annotated ES5](https://link.zhihu.com/?target=http%3A//es5.github.io/) ：


> 15.4.1 The Array Constructor Called as a Function [#](http://es5.github.io/#x15.4.1) [Ⓣ](http://es5.github.io/#x15.4.1-toc) 
>
> When `Array` is called as a function rather than as a constructor, it creates and initialises a new Array object. Thus the function call `Array(…)` is equivalent to the object creation expression `new Array(…)` with the same arguments.



## 参考资料

1. string https://www.cnblogs.com/jiajialove/p/11382855.html
2. [JavaScript数组去重（12种方法，史上最全） - 前端开发随笔 - SegmentFault 思否](https://segmentfault.com/a/1190000016418021?utm_source=tag-newest) 
3. flatten https://github.com/mqyqingfeng/Blog/issues/36
4. 二维数组初始化 https://segmentfault.com/q/1010000011425373 
5. 关于JavaScript new 的一些疑问? - Murphy的回答 - 知乎 https://www.zhihu.com/question/60778790/answer/185306869