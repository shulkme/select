# select
> A select plugin based on jquery

[中文文档](https://github.com/shulkme/select/tree/master/zh "中文文档")
![demo preview](https://github.com/shulkme/select/blob/master/select_preview.png)

### Usage

Just add a link to the css file in your `<head>`:

```html
<!-- Add the default styling selectX.css -->
<link rel="stylesheet" type="text/css" href="[Your Project Path]/select.css"/>
```
Then, before your closing ```<body>``` tag add:

```html
<script type="text/javascript" src="[Your Project Path]/select.min.js"></script>
```

Example:

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
### Settings
| options    | type              | Default | Description   |
| ---------- | ----------------- | ---- | ------------ |
| activeClass       | string              | item-active   | Style when item is selected |
| disabledClass       | string              | select-disabled   | Style when select is disabled |
| itemDisabledClass       | string              | item-disabled   | Style when item is disabled |
| openClass       | string              | select-open   | Style when select is opened |
| gutter       | integer              | 2   | Gutter of list relative to select |
| placeholder       | string              | null  | Display without options |
##### Responsive Option Example

```javascript
$('.select').select({
//options
});
```
### Methods
> When setting values and values, you can directly operate the native elements. Don't worry, they will be updated automatically.

For example：
``` javascript
var selector = $('#select');
//get value 
selector.val();
//set value
var index = 0;//Option index for selector
selector.trigger('change',index);
```

### Browser support
Select works on IE8+ in addition to other modern browsers such as Chrome, Firefox, and Safari.
> Tip : I have tested all the above. Other browsers may also support it, but I have not tested it.
