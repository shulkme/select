# Select
> 一个替换原生select的jQuery插件，支持自定义css样式

![demo preview](https://github.com/shulkme/select/blob/master/select_preview.png)

### 使用

只需在您的文件中添加指向CSS文件的链接 `<head>`:

```html
<!-- 添加默认样式 select.css -->
<link rel="stylesheet" type="text/css" href="[Your Project Path]/select.css"/>
```
然后，在 ```<body>``` 标签之前添加:

```html
<script type="text/javascript" src="[Your Project Path]/select.min.js"></script>
```

示例:

```html
<div class="select">
    <div class="select-inner"></div>
	<select>
		<option value="1">item1</option>
		<option value="2">item2</option>
		<option value="3">item3</option>
		<option value="4">item4</option>
		<option value="5">item5</option>
	</select>
</div>
```
### 设置
| 选项    | 类型              | 默认值 | 注释   |
| ---------- | ----------------- | ---- | ------------ |
| activeClass       | string              | item-active   | 项目选中时的样式 |
| disabledClass       | string              | select-disabled   | 选择器禁用时的样式 |
| itemDisabledClass       | string              | item-disabled   | 项目禁用时的样式 |
| openClass       | string              | select-open   | 选择器打开时的样式 |
| gutter       | integer              | 2   | 列表相对选择器的偏移距离 |
| placeholder       | array              |   | 没有选项时显示的文本 |
##### 选项示例
熟悉以上选项后，您可以根据需要，自行配置。一个基本的示例像这样使用:

```javascript
$('.select').select({
//options
});
```
### 方法
设置值或者取值时直接操作原生元素即可
例如：
``` javascript
var selector = $('#select');
//获取值
selector.val();
//设置值
var index = 0;//选择器中选项的索引下标
selector.trigger('change',index);
```

### 浏览器支持
除了其他现代浏览器（例如Chrome，Firefox和Safari）之外，Select还可以在IE8 +上运行。
> 提示 : 以上浏览器我均测试过，其它浏览器可能也支持，但没有测试。
