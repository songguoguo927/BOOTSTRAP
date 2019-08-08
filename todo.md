- [ ] 一套自定义的响应式布局方案及通用样式的封装
- [ ] 源码解读
      theme-color() 是自定义函数

darken()

> Sass 函数--颜色函数--HSL 函数
> HSL 函数中最常见的应该是 lighten()、darken()、saturate()、desaturate()、grayscale()、complement()和 invert() 几个函数。
> http://www.mamicode.com/info-detail-1126451.html
HSL函数简介
HSL颜色函数包括哪些具体的函数，所起的作用是什么：

当颜色的亮度值接近或大于 100%，颜色会变成白色；反之颜色的亮度值接近或小于 0 时，颜色会变成黑色
    hsl($hue,$saturation,$lightness)：通过色相（hue）、饱和度(saturation)和亮度（lightness）的值创建一个颜色；
    hsla($hue,$saturation,$lightness,$alpha)：通过色相（hue）、饱和度(saturation)、亮度（lightness）和透明（alpha）的值创建一个颜色；

    hue($color)：从一个颜色中获取色相（hue）值；
    saturation($color)：从一个颜色中获取饱和度（saturation）值；
    lightness($color)：从一个颜色中获取亮度（lightness）值；

    adjust-hue($color,$degrees)：通过改变一个颜色的色相值，创建一个新的颜色；

saturate($color,$amount)：通过改变颜色的饱和度值，让颜色更饱和，从而创建一个新的颜色
    desaturate($color,$amount)：通过改变颜色的饱和度值，让颜色更少的饱和，从而创建出一个新的颜色；
    grayscale($color)：将一个颜色变成灰色，相当于desaturate($color,100%);
    
    lighten($color,$amount)：通过改变颜色的亮度值，让颜色变亮，创建一个新的颜色；
    darken($color,$amount)：通过改变颜色的亮度值，让颜色变暗，创建一个新的颜色；

    
    complement($color)：返回一个补充色，相当于adjust-hue($color,180deg);
    invert($color)：反回一个反相色，红、绿、蓝色值倒过来，而透明度不变。

在 HSL 颜色表达方式上，色相是从 -360 和 360 之间，负值逆时针转，正值顺时针转。在这个实例中，原色的色相值约 356deg，加上 30deg 后，新颜色变成了 386deg，但我们的色盘中并没有比 360deg 更大的值，此时新颜色的值也并不会是386deg，那将怎么办呢？其实很简单，当值大于 360deg时，表示色盘转完了一圈，继续顺时针转余下的值（这里是 26deg），那么这个继续转的值就是新颜色的色相值。反之，得到的负数值也是一样的道理。

grayscale() 函数处理过的颜色，其最大的特征就是颜色的饱和度为 0。

---

map-merge() 是 sass 的函数

```
_variable.scss  --> _function.scss  -->bootstrap-reboot.scss

-->_grid.scss-->mixins/_grid.scss-----
    |                                  |其中一些变量，去看
    |make-grid-columns()               |-------->_variable.scss----》发现@include函数了--》 _function.scss
    |                                  |
    ——>mixins/_grid-framework.scss-----
---mixin/中的文件在上一级目录中组织串联起来--》_mixin.scss
```

媒体查询：使用以下媒体查询（media query）来创建关键的分界点阈值。

768 992 1200 三个点四个阈

单设一个是向上兼容的 比如如果设 min-width 768 那么 768 以上的屏都可以用这里的样式

```css
/* 超小屏幕（手机，小于 768px） */
/* 没有任何媒体查询相关的代码，因为这在 Bootstrap 中是默认的（还记得 Bootstrap 是移动设备优先） */

/* 小屏幕（平板，大于等于 768px） */
@media (min-width: $screen-sm-min) {
  ...;
}

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: $screen-md-min) {
  ...;
}

/* 大屏幕（大桌面显示器，大于等于 1200px） */
@media (min-width: $screen-lg-min) {
  ...;
}
```

偶尔也会在媒体查询代码中包含 max-width 从而将 CSS 的影响限制在更小范围的屏幕大小之内。

```css
@media (max-width: $screen-xs-max) {
  ...;
}
@media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {
  ...;
}
@media (min-width: $screen-md-min) and (max-width: $screen-md-max) {
  ...;
}
@media (min-width: $screen-lg-min) {
  ...;
}
```

--->察觉到 变量需要拼接的形式 然后有对应的样式值  好像有点明白_root.scss的意图

》。所有“列（column）必须放在 ” .row 内。 默认12格

》.container 修改为 .container-fluid，就可以将固定宽度的栅格布局转换为 100% 宽度的布局。

》设置针对小屏or中屏的类，可以实现响应式，可以为了你想要实现的效果，使用多个类

》如果在一个 .row 内包含的列（column）大于12个，**包含多余列**（column）的元素将作为一个整体单元被另起一行排列。

row
    9
    4
    6

会被分成9
        4 6

## 响应式列重置
即便有上面给出的四组栅格class，也不免会碰到一些问题，例如，在某些阈值时，某些列可能会出现比别的列高的情况。为了克服这一问题，建议联合使用 .clearfix 和 响应式工具类。
![]('./assets/clearfix.png')
.clearfix--->mixin/clearfix.scss
```scss
@mixin clearfix() {
    &::after {
      display: block;
      clear: both;
      content: "";
    }
  }
 /* &可以引用父元素：比如a:hover伪类，可以写成
  a{
      &:hover{}
  }*/
```
mixin/ 主要定义一些可重用的代码块 
![]('./assets/列排序.png')
### 列偏移
除了列在分界点清除响应， 您可能需要 重置偏移, 后推或前拉某个列
![]('./assets/列偏移.png')
### 列嵌套
![]('./assets/列嵌套.png')
mixins/_caret.scss是三角图标的样式


==0802==

Bootstrap 4

- 兼容IE10+
- 使用flexbox布局
- 抛弃Nomalize.css
- 提供布局和reboot版本（默认样式）

基础组件 常用组件 JS插件

bootstrap.bundle.js 里包含Popper.js--[单独用来处理弹出框的一个js插件]

JS组件的使用需要引入三个文件
JQuery Popper.js bootstrap.js
          |         |
          ————————————
                |包含
                V
          bootstrap.bundle.js

使用方式：
  基于data-*属性
  基于JS API

Bootstrap 实现响应式布局

原理：通过使用media query设置不同分辨率的class
使用：为不同的分辨率选择不同的网格class

>精华部分，值得好好体会

网格布局方案--【天才方案】

在不同的分辨率下有不同的分配

## Bootstrap 定制化
3种方法
1，使用CSS同名类覆盖--通过浏览器的调试工具，观察对应的样式出现在哪个类中，去改写对应类种设置的某些样式--》缺点：无法使用相对应的计算关系，一旦覆盖需要全面覆盖。适用简单场景。
2，修改源码重新构造---弄清源码结构，去修改变量或mixin，重新编译 ，就能彻底定制
3，引用scss源文件 修改变量---把bs当成一个预处理器框架来用，需要什么我们就引进哪个模块，同时还可以对这些模块进行定制，灵活 要求更高 对文件结构的理解

Bootstrap的优点和缺点

CSS代码结构合理，现成的样式可以直接用；但定制较为繁琐，体积大