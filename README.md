# Select
> A jquery plugin for replacing native selects, supports custom css styles

![demo preview](https://github.com/shulkme/select/blob/master/preview.png)

##### Example using jsDelivr

Just add a link to the css file in your `<head>`:

```html
<!-- Add the default styling select.css -->
<link rel="stylesheet" type="text/css" href="[Your Project Path]/select.css"/>
```
Then, before your closing ```<body>``` tag add:

```html
<script type="text/javascript" src="[Your Project Path]/select.min.js"></script>
```

Example:

```html
<div class="select" id="select_test">
    <input type="hidden" name="" value="">
    <div class="select-inner"></div>
</div>
```
### Settings
| options    | type              | Default | Description   |
| ---------- | ----------------- | ---- | ------------ |
| index       | integer              | 0   | Default selected item ID |
| activeClass       | string              | item-active   | Style when item is selected |
| disabledClass       | string              | select-disabled   | Style when select is disabled |
| itemDisabledClass       | string              | item-disabled   | Style when item is disabled |
| openClass       | string              | select-open   | Style when select is opened |
| gutter       | integer              | 2   | Gutter of list relative to select |
| initCallback       | function              | null   | Callback function after initialization |
| selectClick       | function              | null   | Callback function after select is opened |
| itemClick       | function              | null   | Callback function after item Click |
| data       | array              |   | Collection of items |
##### Responsive Option Example
The responsive option, and value, is quite unique and powerful.
You can use it like so:

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
### Methods

| Method  |  Argument | Description  |
| ------------ | ------------ | ------------ |
| disabled  | [boolean]  | Set the disabled of select. If it is empty, it will toggle disabled.   |
|getName   | -  |  Get the currently selected name |
|getValue   | -  | Get the currently selected value   |
|setSelect   | index  |  Dynamic setting corresponding selected item   |
|update   | data  |Update items collection   |

#### Browser support
Select works on IE8+ in addition to other modern browsers such as Chrome, Firefox, and Safari.
> Tip : I have tested all the above. Other browsers may also support it, but I have not tested it.
