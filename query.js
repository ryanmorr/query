/*
 * query
 * Abstraction to querySelectorAll for increased performance and greater usability
 * @param {String} selector
 * @param {Element} context
 * @return {Element/Array}
 */

(function(win){
    'use strict';

    var doc = win.document, simpleRe = /^(#?[\w-]+|\.[\w-.]+)$/, periodRe = /\./g, slice = [].slice;

    win.query = function(selector, context){
        context = context || doc;
        if(simpleRe.test(selector)){
            switch(selector.charAt(0)){
                case '#':
                    return context.getElementById(selector.substr(1));
                case '.':
                    return slice.call(context.getElementsByClassName(selector.substr(1).replace(periodRe, ' ')));
                default:
                    return slice.call(context.getElementsByTagName(selector));
            }
        }
        return slice.call(context.querySelectorAll(selector));
    };
    
})(this);