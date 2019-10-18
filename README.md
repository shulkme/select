# select
>一个替换原生<select>的jQuery插件，支持自定义css样式

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
