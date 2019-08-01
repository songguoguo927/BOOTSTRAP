jQuery的使用
## 引入，可以下载js文件到本地，也可以去bootcdn上复制个链接下来
jQuery不需要安装，想要在某个页面上使用jQuery时，只需要在相关的html中引入jQuery的库文件即可。

## 在script标签中写
```js
$(document).ready(function(){ //等待dom元素加载完毕
	alert("Hello World");	  //弹出窗口
});
//另一种写法
$(function() {
    //文档加载完毕执行
})
```
## jQuery选择器

>基本上css3中有的所有选择器，应该都可以覆盖，可以去核对一下

- 基本选择器

    所有选择器	*
    标签选择器	标签名
    ID选择器	#ID
    类选择器	.className
    组合选择器	selector1,selector2 多个选择器使用逗号分割，取并集
    
- 层级选择器

    1.后代选择器  selector1 selector2
        两个选择器使用空格隔开，表示可以获取当前元素的子代以及孙子代等等后代元素。
    2.子代选择器  selector1>selector2
        两个选择器使用>隔开，表示只能获取当前选中元素的子代【直接子代】元素。
    3. 兄弟选择器
        1.下一个兄弟选择器	 selector1+selector2
        
        两个选择器使用+隔开，表示可以获取当前元素下一个兄弟元素，下一个兄弟元素要能符合selector2。
        2.之后所有兄弟选择器  selector1~selector2
        
        两个选择器使用~隔开，表示可以获取当前元素之后的所有兄弟元素，之后所有兄弟元素要能符合selector2。		

## jQuery选择器可配套使用的过滤器

>jQuery的过滤器必须用在jQuery选择器后，表示对通过前面的jQuery选择器选择到的内容的过滤。是建立在前面选择器已经选择到元素的基础之上的。

基本过滤器
语法：`selector:过滤器`
            :first 		获取所有已选择到的元素中的第一个元素
            :last 		------------------------最后一个元素
            :even 	    ------------------------索引为偶数元素
            :odd 		------------------------索引为奇数元素
            :eq(index) 	------------------------索引为index的元素
            :lt(index)	------------------------索引值小于num的元素
            :gt(index)	------------------------索引值大于num的元素
            :header	    ------------------------标题元素 [h1~h6]
            selector1:not(selector2)
                        ------------------------除了selector2的元素
内容过滤器
语法：`selector:过滤器`			
        :contains(text)	------------------------文本包含text的元素
        :empty		    ------------------------空元素（没有子节点）
        :parent		    ------------------------非空元素（有子节点,文本也是节点，注释也是）如$("div:parent")
        selector:has(selector2)	
                        ------------------------包含selector2的元素如$("div:has('span')")	

可见性过滤器
语法：`selector:过滤器`
        :visible	选择所有占据屏幕空间的元素
		:hidden	    选择所有不占据屏幕空间的元素	

拓展：隐藏类型分2种：
	1. 不占据屏幕空间
		display:none
		<input type="hidden">
	2. 占据屏幕空间
		visibility:hidden  
		透明度为0

属性过滤器
语法：`selector[属性过滤器]`
[attrKey]		    获取所有已选择到的元素中具有属性attrKey的元素
[attrKey=attrVal]	------------------------------------，并且属性值为attrVal的元素
[attrKey!=attrVal]	------------------------------------，并且属性值不为attrVal的元素或者没有属性attrKey的元素
[attrKey^=attrVal]	------------------------------------，并且属性值为以attrVal开头的元素
[attrKey$=attrVal]	------------------------------------，并且属性值为以attrVal结尾的元素
[attrKey*=attrVal]	------------------------------------，并且属性值为包含attrVal的元素

还可以多个属性过滤器，用法如`$("input[id][name$='man']")`

后代过滤器【wait todo】
选择器一定要先选择到后代元素，是对选择到的后代元素的过滤,【注意】空格与>（即子代）的区别。

1. selector:nth-child(index)	
	获取每个selector元素中索引为index的子元素【注意】index从1开始
2. selector:first-child	
	获取每个selector元素中第一个子元素（每个父元素的第一个子元素）
	注意与selector :first的区别，获取所有selector元素的子元素中的第一个（只有一个）
3. selector:last-child		
	获取每个selector元素中最后一个子元素（每个父元素的最后一个子元素）
4. selector :only-child		
    获取每个selector元素中独生子子元素（每个父元素如果只有一个孩子元素，获	取该元素）
5. selector :first-of-type	
	获取每个selector元素中每种类型子元素中的第一个
6. Selector :last-of-type	
	获取每个selector元素中每种类型子元素中的最后一个	

表单过滤器：主要是对选择的表单元素进行过滤
:enabled	
	选取所有可用元素该选择器仅可用于选择支持disabled属性（attribute）的HTML	元素(<button>, <input>,<optgroup>,<option>, <select>,和 <textarea>)
:disabled	
	选取所有不可用的元素该选择器也是仅可用于支持disabled属性的HTML元素
:checked	
	选取所有被选中的元素，用于复选框和单选框，下拉框
:selected	
	选取所有被选中的选项元素，该选择器只适用于<option> 
:focus	
	选择当前获取焦点的元素
:input	
	选取所有的<input><textarea><select><button>元素。注意：$(“:input”)是选择可	以让用户输入的标签元素；而$(“input”)是选择名字为input的标签元素
:text	
	选取所有的单行文本框（<input type="text">）
:password	
	选取所有的密码框
:radio	选取所有的单选框
:checkbox	选取所有的多选框		
:submit	选取所有的提交按钮      		
:image	选取所有input类型为image的表单元素
:reset	选取所有input类型为reset的表单元素      	
:button	选取所有input类型为button的表单元素	
:file		选取所有input类型为file的表单元素
:hidden		  <input type="hidden">
 
## jQuery中的DOM操作

>对DOM操作的方法，可以通过jQuery对象点的方式去调用，且可以链式调用。

学习目标
熟练掌握jQuery如何创建节点
熟练掌握jQuery如何插入节点到不同位置
熟练掌握删除节点
掌握掌握复制节点
掌握掌握替换节点
掌握掌握包裹节点
熟练掌握节点的遍历

---
>参数以中括号表示可选-即可写可不写
### 查找节点	 
	通过jQuery选择器来完成。
### 创建节点
	 
	创建元素节点：`var newTd = $("<td></td>")`
	创建文本节点：在创建元素节点时直接把文本内容写出来: `var newTd = $("<td>文本内容</td>")`
### 插入节点

#### 内部插入
append()	
    在每个匹配元素里面的末尾处插入参数内容。作为它的最后一个子元素。
    参数：为一个或多个DOM元素，DOM元素数组，HTML字符串，或者jQuery对象。

>ps.如果将页面上一个元素A插入到另一个元素B，元素A会被从老地方移走。

appendTo(target)	
	颠倒了$(A).append(B)的效果，$(A).appendTo(B)将A追加到B中，将匹配的元素插入到目标元素的最后面。

prepend()	
    将参数内容插入到每个匹配元素的前面（元素内部）。也就是当前元素中的第一个子元素。
prependTo(target)	
	颠倒了$(A).prepend(B)的效果。

```js
$(A).append(B) //含义：在A的内部末尾加B
$(A).appendTo(B) //含义：把A加到B的内部末尾
$(A).prepend(B) //含义：在A内部的前面加B
$(A).prependTo(B) //含义：把A加到B内部的前面
```
#### 外部插入
after()		
	在匹配元素集合中的每个元素后面插入参数所指定的内容，作为其兄弟节点插在每个匹配元素的后面。

insertAfter(target)   
	在目标元素后面插入集合中每个匹配的元素(插入的元素作为目标元素的兄弟元素)。颠倒了$(A).after(B)的效果。

before()	
	在匹配元素的前面插入内容（外部插入）作为其兄弟节点插在集合中每个匹配元素前面。

insertBefore(target) 
	颠倒了$(A).before(B)的效果。
```js
$(A).after(B) //在A的后面加B
$(A).insertAfter(B) //把A加到B的后面
$(A).before(B) //在A的前面加B
$(A).insertBefore(B) //把A加到B的前面
```

### 删除节点

remove([selector]) 
	从DOM中删除所有匹配的元素；该方法会移除元素，同时也会移除元素内部的一切，包括绑定的事件及与该元素相关的jQuery数据。
    参数：可以为空，是选中符合条件（你使用选择器选取的）的DOM元素
    返回值：一个指向已经被删除的节点的引用，可以在以后再使用这些元素。
    
detach([selector])
	功能和返回值与remove类似，但是.detach()保存所有jQuery数据和被移走的元素的相关联事件。

empty()  
	删除匹配的元素集合中所有的子节点。无参数。

### 复制节点
`$("#id").clone(false)`
clone()
    参数：一个布尔值

    > 默认为false，为浅复制；true，为深复制;深浅针对的是是否--复制元素的同时复制元素中所绑定的事件

	返回值：一个节点的引用，

### 替换节点

replaceWith(newContent) 
	用提供的内容替换集合中所有匹配的元素。该方法会删除与节点相关联的所有数据和事件处理程序。【remove的升级版吖】
	参数：用来插入的内容-->[HTML字符串，DOM元素，或者jQuery对象]
    返回值：被删除元素的集合
replaceAll(target)
	用集合的匹配元素替换每个目标元素。颠倒了replaceWith()操作效果。

### 包裹节点 【有点迷】  	

wrap([wrappingElement])
	在每个匹配的元素外层包上一个html元素。

wrapAll([wrappingElement]) 
	将所有匹配的元素用一个元素来包裹，在所有匹配元素外面包一层HTML结构。
    	
    这种结构可以嵌套多层，但是最内层只能有一个元素。
    所有匹配元素将会被当作是一个整体，在这个整体的外部用指定的HTML结构进行包裹。

wrapInner([wrappingElement])
	每个匹配元素里面内容(子元素)都会被这种结构包裹。

### 节点遍历	

>注意:使用这些方法去解析html文档和xml文档都是可以的，因为html文档和xml文档都可以转换为dom模型。(也就是说在ajax中，如果后台传过来的是xml文档，那么我们使用jquery也可以用下面方法解析)。  	

children([selector])
	用于取得匹配元素的子元素集合（只考虑(儿)子元素而不考虑任何后代元素）。
		
    `$(".content .inner")`=> `$(".content").children(".inner");`

find(selector) 【比children更包容】
	在当前元素对象中的子元素中查找，和参数所匹配的所有的后代元素`$(".content").find(".inner");`

next([selector])
	取得匹配的元素集合中每一个元素紧邻的后面兄弟元素。
nextAll([selector])
	查找当前元素之后所有的同辈元素。

prev([selector])
	取得匹配元素前面紧邻的兄弟元素
prevAll([selector])
   	查找当前元素之前所有的同辈元素
siblings([selector])
   	取得匹配元素前后所有的兄弟元素
closest( selector)
   	取得和参数匹配的最近的元素，如果匹配不上继续向上查找父元素
filter(selector)
   	把当前所选择的所有元素再进行筛选过滤
parent([selector])【唯一指的是：不管爸爸的爸爸】
   	取得一个包含着所有匹配元素的唯一父元素的元素集合。
       ```js
        //查找段落的父元素中每个类名为selected的父元素   
        $("p").parent(".selected") 
       ```
parents([selector])【不加任何参数进行过滤的话，爸爸的爸爸都要取到（好像包含根元素-html）】
   取得一个包含着所有匹配元素的祖先元素的元素集合

## jQuery的事件和API

学习目标
熟练掌握事件如何绑定
熟练掌握事件如何解除绑定
熟练掌握常用鼠标事件
熟练掌握常用键盘事件
熟练掌握常用表单事件
了解jQuery中的API
熟练掌握jQuery中的常用的API

### 事件绑定与解绑

question：bind unbind on off

`bind(eventType[,eventData ],handler(eventObject)) `

>事件类型的值可以取下面列出的鼠标，键盘，表单事件的方法名

eventType: 事件类型，字符串'click' 'submit'多个事件类型可以通过用空格隔开,一次性绑定'click submit'多个事件类型
eventData :事件数据，一个对象
handler: 事件处理函数
```js
//事件处理函数的参数说明
    eventObject： 事件对象
		currentTarget	        在事件冒泡过程中的当前DOM元素
		target		            触发事件的DOM元素
		preventDefault()  	    阻止默认事件行为
		stopPropagation()       防止事件冒泡到DOM树上
		type		            事件类型
		data		           传递给一个事件方法的数据对象--在bind方法中第二个eventData传过来的，在事件处理函数中存于这里
        --
		metaKey	    	        表示事件触发时哪个Meta键被按下
		pageX		            鼠标相对于文档的左边缘的位置
		pageY		            鼠标相对于文档的顶部边缘的位置
```
```js
//同时绑定多个事件类型/处理程序:
	$("button").bind({
  		click:function(){$("p").slideToggle();},
  		mouseover:function(){$("body").css("background-color","red");} 
	});
    //----
    $('#foo').bind('mouseenter mouseleave', function() {
        $(this).toggleClass('entered');
    });
```

unbind([eventType][,handler(eventObject)]) 
	从元素上删除一个以前附加事件处理程序。

	无参时 : 将移除元素上所有绑定的处理程序。
	参数为:某事件类型时，移除该事件类型上的所有绑定的处理程序。
	参数为:事件类型,事件处理函数，移除该事件类型上绑定的该处理函数。

on( events[,selector][,data],handler(eventObject)) 
	在选定的元素上绑定一个或多个事件处理函数。
	selector:一个选择器字符串，用于过滤出被选中的元素中能触发事件的后代元素。如果选择器是null 或者忽略了该选择器，那么被选中的元素总是能触发事件。
off( events [, selector ] [, handler ] )
    移除一个事件处理函数。

trigger( eventType[,extraParameters])
    在每一个匹配的元素上触发某类事件。【模拟绑定过的某一事件的发生】
	根据绑定到匹配元素的给定的事件类型执行所有的处理程序和行为。extraParameters传递给事件处理程序的额外参数。为数组类型。
	向事件中传入任意的数据：
		$("p").click( function (event, a, b) {
		}).trigger("click", ["foo", "bar"]);
### 鼠标事件
click()		鼠标单击事件
dblclick()		鼠标双击事件
hover()		鼠标悬停事件
mousedown()	鼠标按下事件
mouseup()		鼠标抬起事件
mouseenter()	鼠标进入事件	不支持子元素
mouseleave()	鼠标离开事件	不支持子元素
mouseout()		鼠标离开事件	支持子元素
mouseover()		鼠标进入事件	支持子元素
mousemove()   	鼠标移动事件

可以直接像下面这样使用。
```js
$('div').click(function(){//do something})
// <===>
$('div').bind('click',function(){})
```

### 键盘事件

keypress()

当键盘或按钮被按下时，发生 keypress 事件。
keypress事件与keydown 事件类似。当按钮被按下时，会发生该事件。它发生在当前获得焦点的元素上。
不过，与keydown事件不同，**每插入一个字符，就会发生 keypress 事件。**
注释：如果在文档元素上进行设置，则无论元素是否获得焦点，该事件都会发生。


>主要用来捕获数字(注意：包括Shift+数字的符号)、字母（注意：包括大小写）、小键盘等【除了F1-12、SHIFT、Alt、Ctrl、Insert、Home、PgUp、Delete、End、PgDn、ScrollLock、Pause、NumLock、{菜单键}、{开始键}和方向键外的ANSI字符。】
	
keyup()	

按键抬起触发事件

>通常可以捕获键盘除了PrScrn所有按键(这里不讨论特殊键盘的特殊键）。

keydown()

当键盘或按钮被按下时，发生 keydown 事件。
注释：如果在文档元素上进行设置，则无论元素是否获得焦点，该事件都会发生。

>通常可以捕获键盘除了PrScrn所有按键(这里不讨论特殊键盘的特殊键）。

### 表单事件

focus()   	聚焦事件
blur()		失去焦点事件
change()	当元素的值发生改变时激发的事件
select()  	当textarea 或文本类型的input元素中的文本被选择时触发的事件。绑定在单行文本框或多行文本框上
submit()	表单提交事件，绑定在form

### jQuery中常用的API

#### jQuery中的html() text() val() 方法
val([value])用来读取或修改【表单元素】value属性的值

参数：
	无参 获取value值--- 返回value的值
	参数 value，设置value的值，---返回当前更改后的jQuery对象
	参数 function(index,oldVal) 回调函数，index索引，oldVal当前val【有点迷??】

html([html])用为读取和修改元素的HTML标签。

参数：
	无参 获取html的值
	参数 html，设置html的值
	参数 function(index,oldhtml) 回调函数，index索引，oldhtml当前html【有点迷??】
text([text])用来读取或修改元素的纯文本内容

参数：
	无参 获取文本值
	参数 text，设置文本值
	参数 function(index,oldText) 回调函数，index索引，oldText当前text【有点迷??】

#### jQuery中的工具方法
get()
	无参：调用这个方法将会返回所有匹配的DOM节点，这些节点包含在一个标准的数组中。**返回数组**
	参数 index: 索引，从0开始计数，用来确定获取索引指定【DOM对象】。
		    如果index的值超出范围小于元素数量的负数或等于或大于元素的数量，那么它将返回undefined。
toArray() 

	无参 ：返回一个包含jQuery对象集合中的所有DOM元素数组。【和get无参时功能类似】

eq(index)

	参数 index：用于指示元素的索引，当为负数时从集合中的最后一个元素开始倒数；返回指定索引位置上的jQuery对象。【和get有参时功能类似，但返回值不同，这里时jQuery对象】

filter() 过滤器函数

	参数 ：选择器字符串
	参数：function(index){} 匿名函数，
        如果函数返回true，该元素将被包含在筛选集合中；返回值:jQuery对象。
map() 	

	该方法特别适用于获取或设置元素集合中的值；参数function(index,item){} 回调函数。
not() 	
	从匹配的元素集合中移除指定的元素。
each() 	
	
	**遍历一个jQuery对象，为每个匹配元素执行一个函数；**
	参数 function(index, Element) 。
first() 	
	获取匹配元素集合中第一个元素。无参数。
last() 		
	获取匹配元素集合中最后一个元素。无参数。

is()	
	返回值：boolean类型。
	判断当前匹配的元素集合中的元素，是否为一个选择器/DOM元素/jQuery对象，如果这些元素至少一个匹配给定的参数，那么返回true。

has() 	
	
	筛选匹配元素集合中的那些有相匹配的选择器或DOM元素的后代元素。

slice()
	
    返回：一个新的jQuery对象
	根据指定的下标范围，过滤匹配的元素集合，并生成一个新的jQuery对象。
	参数(start [, end ]):start整数，从0开始计数的下标。
	代表将要被选择的元素的起始下标。如果指定的下标是一个负数，那么代表从末尾开始计数。end整数，从0开始计数的下标。代表将要被选择的元素的结束下标。如果指定的下标是一个负数，那么代表从末尾开始计数。如果忽略此参数，则选择的范围是从start开始，一直到最后。
#### jQuery中的属性设置函数
  
1. attr( key|key,val|{key:val,key2:val2} )

>推荐用于操作自有属性和自定义属性

获取匹配元素集合中的第一个元素的属性的值
或者给每一个匹配的元素设置一个或多个属性。
   
2. prop( key|key,val|{key:val,key2:val2} )  

获取匹配的元素集中第一个元素的属性值或设置每一个匹配元素的一个或多个属性，常用于单值属性。 推荐用于操作布尔属性
   
3. removeAttr( attributeName )

为匹配的元素集合中的每个元素中移除一个属性(attribute)。
4. removeProp( propertyName )

为集合中匹配的元素删除一个属性（property）。一般来说，只需要移除自定义的属性。
   
5. css( key|key,val|{key:val,key2:val2} )

获取匹配元素集合中的第一个元素的样式属性的计算值或设置每个匹配元素的一个或多个CSS属性。

6. addClass( className )

为每个匹配的元素添加指定的样式类名。
7. hasClass( className )
	
确定任何一个匹配元素是否有被分配给定的（样式）类。

8. removeClass([className ])

移除集合中每个匹配元素上一个，多个或全部样式。
			  		

## jQuery中的Ajax

学习目标

熟悉并理解Ajax的底层接口
熟练并掌握Ajax的快捷函数
理解全局ajax事件处理

### 底层接口

`jQuery.ajax(url[,settings]); `

作用：执行一个异步的HTTP(Ajax)的请求
参数：
	url      	: 一个用来包含发送请求的URL字符串。
	settings    : 以"{键:值}"组成的AJAX请求设置。所有选项都是可选的。
        async   : 是否异步请求，默认为true。
        cache   : 默认为true,表示浏览器缓存此页面。设置为false将不缓存。
        data    : 发送到服务器的数据。**将自动转换为请求字符串格式**。数据必须为"{键:值}"格式。
        method  : 默认为'GET'。HTTP 请求方法 (比如："POST","GET ","PUT")。
        dataType: 从服务器返回你期望的数据类型。
        "json"把响应的结果当作JSON执行，并返回一个JavaScript对象。JSON 数据以严格的方式解析；任何畸形的JSON将被拒绝，并且抛出解析错误信息。在jQuery1.9中，一个空响应也将被拒绝;服务器应该返回null或 {}响应代替。
        timeout	: 设置请求超时时间（毫秒）。
        beforeSend: 请求发送前的回调函数,返回false将取消这个请求。
        headers：{'content-type':''}	我们发送给服务器的数据类型,ajax会自动把我们写在这里的数据放在请求头中设置	
        complete   : 请求完成后的回调函数(请求success,error之后均调用)该选项可以接受一个函数数组，每个函数将被依次调用。
        error	   : 请求失败时调用此函数。
        success	   : 请求成功后的回调函数。可以接受一个函数数组。每个函数将被依次调用。
        statusCode : (默认: {})

        ```js
        $.ajax({
                statusCode: {
                404: function() {
                    alert("page not found");
                }
                }
            });
        ```

### Ajax快捷函数

$.get(url[,data][,success(data,textStatus,jqXHR)][,dataType]) 使用一个HTTP GET请求从服务器加载数据。这是一个Ajax功能的缩写
$.post(url[,data][,success(data,textStatus,jqXHR)][,dataType]) 使用一个HTTP POST 请求从服务器加载数据
$.getJSON(url[,data][,success(data,textStatus,jqXHR)]) 使用一个HTTP GET请求从服务器加载JSON编码的数据


$dom.load(url[,data][,complete(responseText,textStatus,XMLHttpRequest)])

>载入远程 HTML 文件代码并插入至 DOM 中。

url:待装入 HTML 网页网址。
data:发送至服务器的 key/value 数据。在jQuery 1.3中也可以接受一个字符串了。
callback:载入成功时回调函数。

```js
	$('#result').load('ajax/test.html #container');
	//载入test.html中的$("#container")
```
如果 url 参数的字符串中包含一个或多个空格，那么第一个空格后面的内容,会被当成是 jQuery 的选择器，从而决定应该加载返回结果中的哪部分内容。

### jQuery XHR对象 ---jqXHR

为了与XMLHttpRequest向后兼容，一个jqXHR对象会显露出以下的属性和方法：
    	readyState
    	status
    	statusText
    	responseXML和/或responseText，分别是在底层请求用xml和/或text响应时。
    
	setRequestHeader(name, value)
    	getAllResponseHeaders()
    	getResponseHeader()
    	statusCode()
    	abort()


## jQuery中的动画

学习目标

熟悉并掌握jQuery中的样式方法
体验jQuery中动画的效果
熟悉并掌握jQuery中的动画

### jQuery样式相关方法

宽度 = width + 2padding + 2border + 2margin

.height([val|fn])   获取匹配元素集合中的第一个元素的当前计算高度值或给每个匹配的元素设置高度。

>.css('height') 和 .height()之间的区别是后者返回一个没有单位的数值（例如，	400），前者是返回带有完整单位的字符串（例如，400px）。需要数学计算的时候推荐使用.height()方法。

.width([val|fn]) 获取匹配元素集合中的第一个元素的当前计算宽度值或给每个匹配的元素设置宽度。 

.innerHeight()

获取匹配元素集合中的第一个元素的当前计算的内部高度（包括padding，但不包括border），或设置每一个匹配元素的内部高度。
>这个方法不适用于window 和 document对象，对于这些对象可以使用.height()代替。

.innerWidth()

	同理，内部宽度。
>这个方法不适用于window和document对象，对于这些对象可以使用.width()代替

.outerHeight()

	获取匹配元素集合中第一个元素的当前计算高度值,包括padding，border和选择性的margin。返回一个整数（不包含"px"）表示的值 ，或如果在一个空集合上调用该方法，则会返回 null。 
>这个方法不适用于window 和 document对象，可以使用.height()代替。 

.outerWidth()
	
	获取元素集合中第一个元素的当前计算宽度值,包括padding，border和选择性的margin。返回一个整数（不包含"px"）表示的值，或如果在一个空集合上调用该方法，则会返回 null）。
>这个方法不适用于window 和 document对象，可以使用.width()代替。
虽然.outerWidth()可以在表格元素上使用，使用 border-collapse:collapseCSS属性可能会产生意外结果。

.offset()

	在匹配的元素集合中，获取的第一个元素的当前坐标，或设置每一个元素的坐标，**坐标相对于文档document**。.offset()方法允许我们检索一个元素相对于文档（document）的当前位置。
    
    和.position()的差别在于：.position()是相对于相对于父级元素的位移。当通过全局操作（特别是通过拖拽操作）将一个新的元	素放置到另一个已经存在的元素的上面时，若要取得这个新的元素的位置，那么使用.offset()更合适。
    
    返回值：一个包含top和left属性的对象。

.position()

	.position()方法可以取得元素**相对于父元素的偏移位置**。与.offset()不同, .offset()是获得该元素相对于document的当前坐标，当把一个新元素放在同一个容器里面另一个元素附近时，用.position()更好用。
	
    返回值：一个包含top和left属性的对象。

.scrollLeft()
	
	获取匹配的元素集合中第一个元素的当前水平滚动条的位置或设置每个匹配元素的水平滚动条位置。

.scrollTop()	

	获取匹配的元素集合中第一个元素的当前垂直滚动条的位置或设置每个匹配元素的垂直滚动条位置。

.offsetParent()

	取得离指定元素最近的含有定位信息的祖先元素。含有定位信息的元素指的是，CSS 的 position 属性是 relative, absolute, 或 fixed 的元素。

### 基本效果

隐藏
	`$obj.hide()`如果没有提供参数,被匹配的元素将不带动画地立即隐藏。这大致地等同于`.css( "display", "none" )`

	`$obj.hide( [duration ][, complete ] )`
	
	如果提供了一个duration，或者提供了一个complete回调函数，.hide()方法就变成了一个动画方法。.hide()方法同时地变动了匹配的元素宽度、高度以及不透明度。当这些值到达0时，display样式属性会被设置为none以确保元素不会影响网页的布局。
	
    duration 持续时间：
		默认值      : 400毫秒
		用毫秒数指定: 更大的数字表示更慢的动画而不是更快的动画
		'fast'     : 表示200毫秒的持续时间
		'normal'  : 正常
		'slow'     : 表示800毫秒的持续时间
		complete    : 一个函数，在动画一旦结束时调用它，对每个匹配的元素调用一次

显示
	$obj.show()
	$obj.show( [duration ] [, complete ] )
	用法与hide类似。

隐藏与显示 (切换显隐)

	$obj.toggle( [duration ] [, complete ] )
	$obj.toggle( display )
	display：
		类型：Boolean
		使用true显示元素，使用false隐藏元素

淡入淡出效果

淡入

	$obj.fadeIn( [duration ] [, complete ] )
	通过把匹配的元素渐显为不透明，来显示匹配的元素。该方法变动了匹配的元素的不透明度。它近似于.fadeTo()方法，但是那个方法没有取消隐藏元素，并可以指定最终的不透明程度。

淡出

	$obj.fadeOut([duration ] [, complete ] )
	方法变动了匹配的元素的不透明度。一旦不透明度到达0，样式属性	display会被设置为none，因此元素不再影响网页的布局。


淡入到

	$obj.fadeTo( duration, opacity [, complete ] )
	调整匹配的元素的不透明度opacity一个0到1之间的数字，表示目标不透明度。
	
淡入与淡出
	
	$obj.fadeToggle( [duration ] [, complete ] )
	通过变动匹配的元素的不透明度，来显示或隐藏匹配的元素。

滑动效果

滑下
	$obj.slideDown( [duration ] [, complete ] )
	用滑移动作显示匹配的元素。

滑上
	$obj.slideUp( [duration ] [, complete ] )
	用一个滑移动作隐藏匹配的元素。

滑上与滑下
	$obj.slideToggle( [duration ] [, complete ] )
	用一个滑移动作显示或者隐藏匹配的元素。

自定义效果
animate()
	animate( properties [, duration ] [, complete ] )
	
	properties：一个CSS属性和值的对象，动画将根据这组对象移动。
	
	1. 所有变动的属性必须变动到一个单一数字值 (width,height,left)
	2. 除了样式属性，有些非样式属性，比如说scrollTop和scrollLeft，以及自定义属性，也可以变动。
	3. 如果一个值的前面加了+=或者-=这些字符，则目标值会根据属性的当前值累加或连减给定的数字计算出来。

.stop()
	停止匹配元素当前正在运行的动画。
	.stop( [clearQueue ] [, jumpToEnd ] )
	
	当一个元素调用.stop()，当前正在运行的动画（如果有的话）立即停止。如果一个元素用.slideUp()隐藏的时候，调用.stop()，该元素依然会有一部分是处于显示状态的。由于元素上的动画尚未执行完成，所以动画完成时执行的回调函数是不会被调用的。

	clearQueue参数值为true时,那么在队列中的动画其余被删除并永远不会运行。

	jumpToEnd参数值为true时,当前动画将停止，但该元素上的 CSS 属性会被立刻修改成动画的目标值。
```js
	//点击 slideToggle 按钮，会开始动画。然后在动画结束前再次点击该按钮,此时，会立刻从当前位置向反方向开始动画。
	$('#toggle').on('click', function(){
		$block.stop().slideToggle(1000);
	});
```

.finish()
	.finish()方法和.stop(true, true)很相似，.stop(true, true)将清除队列，并且目前的动画跳转到其最终值。但是，不同的是，.finish()会导致所有排队的动画的CSS属性跳转到他们的最终值。

.queue()
	显示或操作匹配的元素上已经执行的函数列队。
	.queue([queueName ])
	queueName:一个含有队列名的字符串。默认是fx，标准的动画队列。
```js	
    //获取定义在div上的动画队列
	var n = div.queue("fx");
```

.delay()
	设置一个延时来推迟执行队列中后续的项。

	.delay( duration )只有队列中连续的事件会延迟;
	例如不带参数的 .show() 或者.hide()不会延迟，因为他们没有使用效果队列。
```js
	//div1,div2同时滑上，div1延迟800毫秒再淡入。
	$("button").click(function() {
		$("div.first").slideUp(300).delay(800).fadeIn(400);
		$("div.second").slideUp(300).fadeIn(400);
	});
```

.clearQueue()
	=> stop(true);
	从列队中移除所有未执行的项。
	
	当.clearQueue()方法被访问的时候，所有在这个列队中未执行的函数将被移除。当不使用参数的时候，.clearQueue()会从标准的动画队列	fx中移除剩下的函数。这个方法类似.stop(true)。然而.stop()方法只	适用在动画中。
	.clearQueue()还可以用来移除用.queue()方法添加到普通jQuery列表的任何函数。 
