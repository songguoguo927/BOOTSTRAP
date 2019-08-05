```js
/*关于ajax请求*/
// function reqListener () {
//   console.log(this.responseText);
// }
function get(url, callback) {
  var oReq = new XMLHttpRequest();
  // oReq.addEventListener("load", reqListener);
  oReq.onload = function() {
    // console.log(oReq.responseText)
    callback(oReq.responseText);
  };
  oReq.open("GET", url, true);
  oReq.send();
}
get("./data.json", function(data) {
  console.log(data);
});
```

```js
/*关于文件路径*/
var fs = require("fs");
var path = require("path");

// 一般在开发命令行工具的时候，这个设计是必须有用的一个特性
//  npm
//  webpack
// __dirname 和 __filename 这俩哥们儿就是专门用来动态的获取当前文件以及文件所属目录的绝对路径
console.log(path.join(__dirname)); //C:\Users\xjm\Desktop\TEST-Project\B-node7\07\code
console.log(path.join(__filename)); //C:\Users\xjm\Desktop\TEST-Project\B-node7\07\code\00-文件路径.js
fs.readFile(path.join(__dirname, "./00-文件路径.js"), function(err, data) {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});
```

typeof null //object
原理是这样的，不同的对象在底层都表示为二进制，在 JavaScript 中二进制前三位都为 0 的话会被判断为 object 类型，null 的二进制表示是全 0，自然前三位也是 0，所以执行 typeof 时会返回“object”。

```js
function getRandom(n, m) {
  return Math.floor(Math.random() * (m - n) + n);
}
getRandom(1, 6);
```
---
原生 JS 给元素添加 class 属性

```js
document.getElementsByTagName("body")[0].className = "snow-container"; //设置为新的
document.getElementsByTagName("body")[0].className += " snow-container"; //在原来的后面加这个
document.getElementsByTagName("body")[0].classList.add("snow-container"); //与第一个等价
```
正则表达式匹配包含某一个单词的字符串
        var reg = /\b(hidden)\b/gi;
---
jquery中ajax测试四种：jQuery的ajax默认提交的请求体是表单数据类型的数据

**get无参**   要请求的数据类型：文本，html，css，图片，视频，json数据， 后台会根据你请求的文件类型自己设置对应的请求头
**get有参**   （data:{id:1}）  ajax会帮你拼接url?id=1 
**post无参**   不常用
**post有参** 写在data里，并设置请求头（ajax默认自动给你加表单类型的请求头）--》你要传过去的数据类型  文本，form表单，图片..文件

//需求，做一个和jquery中的ajax功能差不多的myajax



split和join是一对