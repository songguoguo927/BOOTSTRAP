## 前置知识和环境搭建

CSS预处理器的原理: 是将类 CSS 语言通过 **Webpack/gulp等编译** 转成浏览器可读的真正 CSS。在这层编译之上，便可以赋予 CSS 更多更强大的功能，常用功能: 

    - 嵌套
    - 变量
    - 循环语句
    - 条件语句
    - 自动前缀
    - 单位转换
    - mixin复用

>面试中一般不会重点考察该点，一般介绍下自己在实战项目中的经验即可

## sass与less

less偏前端  1h就学会 easy
sass 偏后端

相关学习课程：
[课程1](http://www.imooc.com/learn/102);[课程1](http://www.imooc.com/learn/61)

## sass与scss

区别：在scss后缀的文件中严格按照c3的语法，sass中不严格

SASS文件就是普通的文本文件，里面可以直接使用CSS语法。文件后缀名是.scss，意思为Sassy CSS。

>一般我们习惯原来的css写法，所以写的sass文件以.scss命名结尾

## 需要编译环境ruby  

安装完ruby，然后命令行`gem install sass`；安装完毕命令行`sass -v`查看安装的版本，出现对应版本则安装成功

## 编译方式--如何使用sass命令

`sass a.scss a.css`编译a.scss为css文件

>如果嫌弃上面的命令每次手写不方便的话，可以去对单文件或文件夹进行监听

`sass --watch a.scss:a.css`

`sass --watch  文件夹名:编译到哪儿`

## 关于.scss文件中的注释**

- //不会被编译（编译过后没有）
- /**/ 会被编译（编译过后保留，因为原生css中的注释就是这种）

## 4种编译模式

用法：

```cmd
　sass --style compressed test.sass test.css
```
即编译后的css文件的格式
1. nested 默认--嵌套缩进的css代码
2. expanded css纵向写法--没有缩进
3. compact 横向
4. compressed 压缩（所有代码压缩成一行）

## Gulp与Sass 

>在项目根目录下安装一些包
`npm install --global gulp`(可以试一下要不要)

`npm install --save-dev gulp gulp-sass node-sass`

Gulp 配置 Sass 编译的示例代码
>在项目根目录下创建一个名为 gulpfile.js 的文件

```js
const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');
gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
  });

// gulp.task('default', ['sass','watch']);
```
[相关其他配置用法去npm官网](https://www.npmjs.com/package/gulp-sass/v/4.0.2)

**运行gulp**

`>gulp 任务名`
---

**变量和作用域**

在sass文件开头写上:`@charset "utf-8";`

变量 可以存多个值 

> 可以存很多东西，如css单位 颜色 文字字体

nth(哪个变量，第几个)

变量作用域：规则类似js中作用域

如果变量需要镶嵌在字符串之中，就必须需要写在#{}之中。

```sass
$side : left;

　　.rounded {
　　　　border-#{$side}-radius: 5px;
　　}
```

**字符串插值和运算**

#{变量名}  -表示转成字符串

 可以避免运算

加减乘除 运算符的前后必须要有空格

**嵌套**

标签怎么嵌套 它就可以怎么嵌套

记住，分号一定要写，算符两侧有空格，不然会报错

- 标签嵌套
- 属性嵌套 要用:来区分  （根据情况选用）

```scss
div {
　　　　hi {
　　　　　　color:red;
　　　　}
　　}
　　//css
　　div h1{
　　color:red;
　　}
```



@at-root 跳出选择器嵌套

与&配合使用

在嵌套的代码块内，可以使用&引用父元素。比如a:hover伪类，可以写成

```scss
a {
　　　　&:hover { color: #ffb3ff; }
　　}
//css
a:hover{
    color:#ffb3ff;
}
```

------

代码重用--mixin 继承

**混合mixin，调用，传参**

@mixin   声明

​	Mixin有点像C语言的宏（macro），是可以重用的代码块。

​	使用@mixin命令，定义一个代码块。

```scss
　@mixin left {
　　　　float: left;
　　　　margin-left: 10px;
　　}
```



@include  调用     二者配套使用   使用@include命令，调用这个mixin。

```scss
div {
　　　　@include left;
　　}
```

mixin的强大之处，在于可以指定参数和缺省值。使用的时候，根据需要加入参数：

@mixin opa()  不写参数  直接调用即可

@mixin opa($opa)  带了参数 调用时必须传参

@mixin opa($opa:40)  带了默认参数  可以选择性传参，传的参数优先

参数不确定的情况  ...

选择性传参 --三角示例

**继承**

@extend

自动会把公共部分提取

占位选择器  在用到的时候才会被编译出来

------

高级语句

**if for while each**

for循环在图片精灵处设置background-position有用

each类似与js中的for in

三目运算

？ 成立：不成立 类似js中的三目

[补充阅读-阮老师sass教程](http://www.ruanyifeng.com/blog/2012/06/sass.html)

**4.4 插入文件**

@import命令，用来插入外部文件。

> 　　@import "path/filename.scss";

如果插入的是.css文件，则等同于css的import命令。

> 　　@import "foo.css";

**5.3 自定义函数**

SASS允许用户编写自己的函数。

> 　　@function double($n) {
> 　　　　@return $n * 2;
> 　　}
>
> 　　#sidebar {
> 　　　　width: double(5px);
> 　　}

