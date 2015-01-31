/*
 * query
 * Abstraction to querySelectorAll for increased 
 * performance and greater usability
 * @param {String} selector
 * @param {Element} context (optional)
 * @return {Array}
 */

(function(win){
    'use strict';

    var doc = win.document, 
    simpleRe = /^(#?[\w-]+|\.[\w-.]+)$/, 
    periodRe = /\./g, 
    slice = [].slice;

    win.query = function(selector, context){
        context = context || doc;
        // Redirect call to the more performant function 
        // if it's a simple selector and return an array
        // for easier usage
        if(simpleRe.test(selector)){
            switch(selector[0]){
                case '#':
                    return [context.getElementById(selector.substr(1))];
                case '.':
                    return slice.call(context.getElementsByClassName(selector.substr(1).replace(periodRe, ' ')));
                default:
                    return slice.call(context.getElementsByTagName(selector));
            }
        }
        // If not a simple selector, query the DOM as usual 
        // and return an array for easier usage
        return slice.call(context.querySelectorAll(selector));
    };
    
})(this);