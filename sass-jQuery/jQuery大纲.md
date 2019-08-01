# jQuery的一些原理性的东西

## 学习目标

理解jQuery的工作原理
熟练掌握jQuery选择器和过滤器
熟练掌握jQuery中DOM操作
理解并掌握事件的概念和用法
掌握jQuery中的常用API
了解Ajax的工作原理
掌握jQuery中的动画


优点：轻量，简洁，跨平台的兼容性，jQuery封装了很多预定义的对象和函数

## 常见的javascript库？
Prototype：
    是最早成型的JS库之一，对于JS的内置对象做了大量的扩展。
Dojo：
    Dojo提供了很多其他JS库没有的提供的功能。例如：离线存储的API，生成图标的组件等等。
YUI：
    是由Yahoo公司开发的一套完备的，扩展性良好的富交互网页程序工作集。
Ext JS：
    原本是对YUI的一个扩展，主要用于创建前端用户界面。
Moo Tools：
    是一套轻量、简洁、模块化和面向对象的JS框架。
jQuery：
    同样是一个轻量级的库，拥有强大的选择器等更多优点，吸引了更多的开发者去学习使用它。

## jQuery的特性

HTML元素选取
HTML元素操作
CSS操作
HTML事件函数
JavaScript特效和动画
HTML DOM遍历和修改
AJAX
Utilities

## jQuery优势以及特点
轻量级
强大的选择器
出色的DOM操作的封装
可靠地事件处理机制
完善的Ajax
不污染顶级变量
出色的浏览器兼容性
链式操作方式
隐式迭代
行为层与结构层的分离
丰富的插件支持
完善的文档
开源

## jQuery的发展历程
从Javascript到jQuery

1、Javascript弊端：
		1.复杂的文档对象模型（DOM）
    	2.不一致的浏览器实现
2、Javascript库
	为了简化Javascript的开发，Javascript库封装了很多预定义的对象和使用数。
3、JQuery
     JQuery就是js的一个库(其实就是别人给我们封装好的js文件,简化我们平时的js中的代码操作)。jQuery简洁的语法和跨平台的兼容性，极大的简化Javascript开发人员遍历HTML文档，操作DOM，处理事件，执行动画和开发AJAX(Javascript + xml + json )，其理念：write less,do more。

## jQuery函数

jQuery库只提供了一个叫jQuery的函数，该函数中以及该函数的原型中定义了大量的方法，方便jQuery对象和jQuery函数调用。

jQuery函数具有四种参数：

    1. 参数为选择器（字符串）

        jQuery函数通过该选择器获取对应的DOM，然后将这些DOM封装到一个jQuery	对象中并返回。

    2. 参数为DOM对象(即Node的实例) 

        jQuery函数将该DOM封装成jQuery对象并返回。

    3. 参数为HTML文本字符串

        jQuery函数会根据传入的文本创建好HTML元素并封装成jQuery对象返回。
        $("<div class='one'>one<div>");

    4. 参数为一个匿名函数
        $(function(){ });当文档结构加载完毕之后jQuery函数调用匿名函数。

## jQuery对象

	jQuery对象是jQuery函数的一个实例，该对象可以调用jQuery原型中的方法,也就是我们后面学的很多方法，比如each,map,slice,first,find, filter,not, on,off,css等方法。
	**jQuery对象是一个类数组对象，内部存放的是DOM对象。**
	jQuery对象的获取通常是使用选择器来获取。
		比如，获取所有class为one的元素$(".one")。

## jQuery对象与Dom对象

jQuery对象与Dom对象是两种完全不一样的对象，jQuery对象是jQuery函数的实例，是一个类数组对象，而DOM对象是Node的实例，他们所能调用的方法完全不同。但是它们又有一定的关联性，jQuery对象的类数组的元素为DOM对象，对jQuery对象的操作实际上就是对jQuery数组中DOM对象的批量操作。jQuery对象和DOM对象可以相互转化。    

DOM对象 --> jQuery对象

通过jQuery函数来转换
```js
    var $dom = jQuery(dom);
    dom为一个DOM对象，$dom为jQuery对象
```
jQuery对象 --> DOM对象

jQuery是类数组对象，并且数组中存放的是DOM元素
    
```js
    var $doms = jQuery(".one");	//获取所有class为one的dom元素，可能多个，$doms为jQuery对象

    var doms = $doms[0];	//获取封装在jQuery对象中的第一个dom对象，doms为dom对象  

   // $doms为jQuery对象，doms为DOM对象
```

还有个get方法
 ```js
   //---jQuery中的工具方法
    console.log($('input').get()); //返回一个包含DOM节点组成的数组
    <input type="text" value="lall1" />
    <input type="text" value="lall2" />
```
>jQuery函数可以简写成$

一些疑问：？
如何实现的链式调用

随时创建jQuery对象
接下来就是学习并熟练使用jQuery提供给我们的一些方法！