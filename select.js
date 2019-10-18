/**
 * selector A jQuery plug-in for replacing native select
 * 1.0.1
 * shulkme
 * 2019-10-18
 * https://github.com/shulkme/select
 */
(function ($,window,document,undefined) {
    var Selector = function (ele,options) {
        this.element = ele;
        this.defaults = {
            index:0,
            activeClass:'item-active',
            disabledClass:'select-disabled',
            itemDisabledClass:'item-disabled',
            openClass:'select-open',
            gutter: 2,
            initCallback:function(){},
            selectClick:function(){},
            itemClick:function(){},
            data:[{name :'select',value :'',disabled : false}]
        };
        this.pos = {
            x:0,
            y:0
        };
        this.sid = '';
        this.opts = $.extend({}, this.defaults, options)
    };
    Selector.prototype = {
        init: function() {
            var _this = this;
            _this.checkData();
            _this.setSelected(_this.opts.index);
            _this.bind('init');
            var _call = _this.opts.initCallback;
            if (typeof _call === 'function'){
                (_call).call(this);
            }
            return _this;
        },
        checkData:function(){
            var _this = this;
            var _defaultData = _this.opts.data;
            if (_defaultData.length>0){
                return true;
            }else{
                _this.opts.data = [{
                    name:'select',
                    value:'',
                    disabled: false
                }];
                return false;
            }
        },
        update:function (data) {
            var _this = this;
            _this.opts.data = data;
            _this.destroy();
            _this.opts.index = 0;
            _this.setSelected(_this.opts.index);
            return _this;
        },
        bind:function (handle) {
            var _this = this;
            var _ele = _this.element;
            if (handle ==='init'){
                _ele.on('click',function (e) {
                    e.stopPropagation();
                    if (!$(this).hasClass(_this.opts.disabledClass)){
                        if ($(this).hasClass(_this.opts.openClass)){
                            $(this).removeClass(_this.opts.openClass);
                            _this.destroy();
                        } else{
                            $(this).addClass(_this.opts.openClass);
                            _this.render();
                        }
                        var _call = _this.opts.selectClick;
                        if (typeof _call === 'function'){
                            (_call).call(this);
                        }
                    }
                });
                $(window).resize(function () {
                    _this.destroy();
                });
                $(document).click(function () {
                    _this.destroy();
                });
            } else if(handle === 'render'){
                $('#'+_this.sid).on('click',function (e) {
                    var _item = $(e.target);
                    var _items = $(this).find('.select-options .select-option-item');
                    if (_item.hasClass('select-option-item') && !_item.hasClass(_this.opts.itemDisabledClass)) {
                        var _index = _items.index(_item);
                        var _call = _this.opts.itemClick;
                        _this.opts.index = _index;
                        _this.setSelected(_index);
                        _items.removeClass(_this.opts.activeClass);
                        _item.addClass(_this.opts.activeClass);
                        if (typeof _call === 'function'){
                            (_call).call(this,_index,_item);
                        }
                    }
                });
            }
        },
        render:function(){
            var _this = this;
            _this.sid = 'select_' + new Date().getTime();
            var _html = '';
            _html +=    '<div class="select-wrapper" id="'+_this.sid+'">'+
                '<div class="select-content">'+
                '<ul class="select-options">';
            if (_this.checkData()){
                var _items = _this.opts.data;
                for (var i = 0; i < _items.length; i++){
                    if (_items[i].disabled) {
                        _html += '<li class="select-option-item '+ _this.opts.itemDisabledClass +'" data-value="'+_items[i].value+'">'+_items[i].name+'</li>';
                    }else{
                        if (_this.opts.index === i){
                            _html += '<li class="select-option-item '+ _this.opts.activeClass +'" data-value="'+_items[i].value+'">'+_items[i].name+'</li>';
                        }else{
                            _html += '<li class="select-option-item" data-value="'+_items[i].value+'">'+_items[i].name+'</li>';
                        }
                    }
                }
            }else{
                _html += '<li class="select-option-item" data-value=""></li>';
            }
            _html += '</ul></div></div>';
            $('body').append(_html);
            _this.setPosition();
            _this.bind('render');
        },
        setSelected:function(index){
            var _this = this;
            var _index = parseInt(index);
            var _ele = _this.element;
            var _inner = _ele.find('.select-inner');
            var _input = _ele.find('input[type="hidden"]');
            var _data = _this.opts.data[0];
            if (_index>=0 && _index < _this.opts.data.length){
                _data = _this.opts.data[_index];
            }else if (_index === -1) {
                _data = {
                    name  : 'select',
                    value : ''
                };
            }
            _this.opts.index = _index;
            _inner.text(_data.name);
            _input.val(_data.value);
            return _this;
        },
        setPosition:function(){
            var _this = this;
            var _ele = _this.element;
            var _selector = $('#'+_this.sid);
            var _gutter = _this.opts.gutter;
            var _eleSize = {
                w : $(_ele).outerWidth(true),
                h : $(_ele).outerHeight(true)
            };
            var _elePos = {
                x : $(_ele).offset().left,
                y : $(_ele).offset().top
            };
            var _selectorSize = {
                w : _selector.outerWidth(true),
                h : _selector.outerHeight(true)
            };
            var _space = {
                t : _elePos.y - $(window).scrollTop(),
                r : $(window).width() - (_elePos.x - $(window).scrollLeft()),
                b : $(window).height() - (_elePos.y - $(window).scrollTop()) - _eleSize.h,
                l : _elePos.x - $(window).scrollLeft()
            };
            if (_space.r < _selectorSize.w){
                if (_space.l < _selectorSize.w){
                    //r
                    _this.pos.x = _elePos.x;
                } else{
                    //l
                    _this.pos.x = _eleSize.w + _elePos.x - _selectorSize.w;
                }
            }else{
                //r
                _this.pos.x = _elePos.x;
            }
            if (_space.b < _selectorSize.h){
                if (_space.t < _selectorSize.h){
                    //b
                    _this.pos.y = _eleSize.h + _elePos.y + _gutter;
                } else{
                    //t
                    _this.pos.y = _elePos.y - _selectorSize.h - _gutter;
                }
            } else{
                //b
                _this.pos.y = _eleSize.h + _elePos.y + _gutter;
            }
            _selector.css({
                width: _eleSize.w,
                left:_this.pos.x + 'px',
                top:_this.pos.y + 'px'
            });
        },
        disabled:function (bool) {
            var _this = this;
            var _ele = $(_this.element);
            if (bool === undefined){
                if (_ele.hasClass(_this.opts.disabledClass)){
                    _this.destroy();
                    _ele.removeClass(_this.opts.disabledClass);

                } else{
                    _ele.addClass(_this.opts.disabledClass);
                }
            } else{
                if (bool){
                    _ele.addClass(_this.opts.disabledClass);
                } else{
                    _this.destroy();
                    _ele.removeClass(_this.opts.disabledClass);
                }
            }

            return _this;
        },
        destroy : function () {
            var _this = this;
            var _selector = $('#'+_this.sid);
            if (_selector.length>0){
                _selector.remove();
            }
            $(_this.element).removeClass(_this.opts.openClass);
            _selector.unbind();
            return _this;
        },
        getValue:function () {
            return this.opts.data[this.opts.index].value;
        },
        getName:function () {
            return this.opts.data[this.opts.index].name;
        }
    };
    $.fn.select = function(options) {
        var selector = new Selector(this, options);
        return selector.init();
    };
})(jQuery,window,document);