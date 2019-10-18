# Select
> 一个替换原生select的jQuery插件，支持自定义css样式

![demo preview](https://github.com/shulkme/select/blob/master/preview.png)

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
<div class="select" id="select_test">
    <input type="hidden" name="" value="">
    <div class="select-inner"></div>
</div>
```
### 设置
| 选项    | 类型              | 默认值 | 注释   |
| ---------- | ----------------- | ---- | ------------ |
| index       | integer              | 0   | 默认选中的项目id |
| activeClass       | string              | item-active   | 项目选中时的样式 |
| disabledClass       | string              | select-disabled   | 选择器禁用时的样式 |
| itemDisabledClass       | string              | item-disabled   | 项目禁用时的样式 |
| openClass       | string              | select-open   | 选择器打开时的样式 |
| gutter       | integer              | 2   | 列表相对选择器的偏移距离 |
| initCallback       | function              | null   | 初始化后的回调函数 |
| selectClick       | function              | null   | 点击选择器时的回调函数 |
| itemClick       | function              | null   | 点击项目时的回调函数 |
| data       | array              |   | 项目集合 |
##### 选项示例
熟悉以上选项后，您可以根据需要，自行配置。一个基本的示例像这样使用:

```javascript
$('#select_test').select({
	data:[{
		name:'Active',
		value:'active'
	},{
		name:'Item',
		value:'item'
	},{
		name:'Disabled',
		value:'disabled',
		disabled: true
	},{
		name:'Item',
		value:'item'
	},{
		name:'Hover',
		value:'hover'
	},{
		name:'Item',
		value:'item'
	}]
});
```
### 方法

| 方法  |  参数 | 说明  |
| ------------ | ------------ | ------------ |
| disabled  | [boolean]  | 设置选择器的禁用状态，如果没有参数，则会转换相反状态   |
|getName   | -  |  获取当前选中的名称 |
|getValue   | -  | 获取当前选中的值   |
|setSelect   | index  |  手动设置选中的项目id   |
|update   | data  |动态更新项目集合   |

### 浏览器支持
除了其他现代浏览器（例如Chrome，Firefox和Safari）之外，Select还可以在IE8 +上运行。
> 提示 : 以上浏览器我均测试过，其它浏览器可能也支持，但没有测试。
