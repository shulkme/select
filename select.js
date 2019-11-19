;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    'use strict';
    var Select = window.Select || {};
    Select = function (element,options){
        this.defaults = {
            activeClass:'item-active',
            disabledClass:'select-disabled',
            itemDisabledClass:'item-disabled',
            openClass:'select-open',
            gutter: 2,
            placeholder:'请选择'
        };
        this.trigger = $(element);
        this.opts = $.extend({}, this.defaults, options);
        this.init();
    };
    Select.prototype = {
        constructor : Select,
        init : function(){
            var _this = this,
                _trigger = this.trigger;
            $.each(_trigger,function (k,e) {
                $(e).attr('data-select',k);
                _this.setActive(e,$(e).find('select'),0);
            });
            _this.bindEvents();
        },
        bindEvents : function(){
            var _this = this;
            _this.trigger.on('click',function (e) {
                e.stopPropagation();
                var _trigger = $(this),
                    _selector = _trigger.find('select'),
                    _items = _this.getData(_selector);
                _this.trigger.not(this).removeClass(_this.opts.openClass);
                if (!_trigger.hasClass(_this.opts.disabledClass) && !_trigger.hasClass(_this.opts.openClass)){
                    _this.render(_trigger,_items);
                    _trigger.addClass(_this.opts.openClass);
                }else{
                    _this.destroy();
                }

            });
            _this.trigger.find('select').on('change',function (e,n) {
                _this.setActive($(this).parent(),this,n);
            });
            $(document).on('click','.select-option-item',function () {
                var _index = $(this).index();
                var _sid = $(this).parents('.select-wrapper').attr('data-select');
                var _trigger = _this.trigger.filter('[data-select="'+_sid+'"]');
                _trigger.find('select').trigger('change',_index);
            });
            $(document).click(function () {
                _this.destroy();
            });
        },
        getData : function (select) {
            var _items = [],
                _isActive = false;
            var _optionsNode = select.find('option');
            for (var i=0;i<_optionsNode.length;i++){
                _isActive = select.get(0).selectedIndex === i;
                _items.push({
                    name     : $(_optionsNode[i]).text(),
                    value    : $(_optionsNode[i]).val(),
                    disabled : $(_optionsNode[i]).attr('disabled') !==undefined,
                    active   : _isActive
                })
            }
            return _items;
        },
        setActive : function(trigger,select,index){
            var _this = this;
            var _index = parseInt(index);
            var _options = $(select).find('option');
            if (_options.length > 0){
                if (_index >= _options.length || _index < 0){
                    _index = 0;
                }
                $(select).get(0).selectedIndex = _index;
                $(trigger).find('.select-inner').text($(_options[_index]).text());
            } else {
                $(trigger).find('.select-inner').text(_this.opts.placeholder);
            }
        },
        render : function (trigger,data) {
            var _this = this,
                _trigger = trigger,
                _html = '',
                _items = data,
                _sid = _trigger.attr('data-select');
            _html +=    '<div class="select-wrapper" data-select="'+_sid+'">'+
                            '<div class="select-content">'+
                                '<ul class="select-options">';
            for (var i = 0; i < _items.length; i++){
                if (_items[i].disabled) {
                    _html += '<li class="select-option-item '+ _this.opts.itemDisabledClass +'" data-value="'+_items[i].value+'">'+_items[i].name+'</li>';
                }else{
                    if (_items[i].active){
                        _html += '<li class="select-option-item '+ _this.opts.activeClass +'" data-value="'+_items[i].value+'">'+_items[i].name+'</li>';
                    }else{
                        _html += '<li class="select-option-item" data-value="'+_items[i].value+'">'+_items[i].name+'</li>';
                    }
                }
            }
            _html += '</ul></div></div>';
            $('.select-wrapper').remove();
            $('body').append(_html);
            var _triggerStyle = {
                w : _trigger.outerWidth(true),
                h : _trigger.outerHeight(true),
                l : _trigger.offset().left,
                t : _trigger.offset().top
            };
            $('.select-wrapper').css({
                width : _triggerStyle.w + 'px',
                top   : _triggerStyle.t + _triggerStyle.h + _this.opts.gutter + 'px',
                left  : _triggerStyle.l + 'px'
            });
        },
        destroy : function () {
            this.trigger.removeClass(this.opts.openClass);
            $('.select-wrapper').remove();
        }
    };
    $.fn.select = function(options) {
        return new Select(this,options);
    };
    $.fn.select.Constructor = Select;
}));
