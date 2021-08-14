/*!

    Copyright (c) 2011 Peter van der Spek

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    
 */
!function(e){var t,n={},i=!1,r={ellipsis:"...",setTitle:"never",live:!1};function a(t,n){var i=t.data("jqae");i||(i={});var r=i.wrapperElement;r||(r=t.wrapInner("<div/>").find(">div")).css({margin:0,padding:0,border:0});var a=r.data("jqae");a||(a={});var c=a.originalContent;c?r=a.originalContent.clone(!0).data("jqae",{originalContent:c}).replaceAll(r):r.data("jqae",{originalContent:r.clone(!0)}),t.data("jqae",{wrapperElement:r,containerWidth:t.width(),containerHeight:t.height()});var h=t.height(),d=(parseInt(t.css("padding-top"),10)||0)+(parseInt(t.css("border-top-width"),10)||0)-(r.offset().top-t.offset().top),f=!1,g=r;n.selector&&(g=e(r.find(n.selector).get().reverse())),g.each((function(){var t=e(this),i=t.text(),a=!1;if(r.innerHeight()-t.innerHeight()>h+d)t.remove();else if(s(t),t.contents().length){for(f&&(l(t).get(0).nodeValue+=n.ellipsis,f=!1);r.innerHeight()>h+d;){if(!(a=o(t))){f=!0,t.remove();break}if(s(t),!t.contents().length){f=!0,t.remove();break}l(t).get(0).nodeValue+=n.ellipsis}"onEllipsis"==n.setTitle&&a||"always"==n.setTitle?t.attr("title",i):"never"!=n.setTitle&&t.removeAttr("title")}}))}function o(t){var n=l(t);if(n.length){var i=n.get(0).nodeValue,r=i.lastIndexOf(" ");return r>-1?(i=e.trim(i.substring(0,r)),n.get(0).nodeValue=i):n.get(0).nodeValue="",!0}return!1}function l(e){if(e.contents().length){var t=(n=e.contents()).eq(n.length-1);return t.filter(c).length?t:l(t)}var n;return e.append(""),(n=e.contents()).eq(n.length-1)}function s(t){if(t.contents().length){var n=t.contents(),i=n.eq(n.length-1);if(i.filter(c).length){var r=i.get(0).nodeValue;return""==(r=e.trim(r))&&(i.remove(),!0)}for(;s(i););return!i.contents().length&&(i.remove(),!0)}return!1}function c(){return 3===this.nodeType}e.fn.ellipsis=function(o,l){var s,c,h;return s=e(this),"string"!=typeof o&&(l=o,o=void 0),(c=e.extend({},r,l)).selector=o,s.each((function(){a(e(this),c)})),c.live?function(r,o){n[r]=o,t||(t=window.setInterval((function(){!function(){if(!i){for(var t in i=!0,n)e(t).each((function(){var i,r;(r=(i=e(this)).data("jqae")).containerWidth==i.width()&&r.containerHeight==i.height()||a(i,n[t])}));i=!1}}()}),200))}(s.selector,c):(h=s.selector,n[h]&&(delete n[h],n.length||t&&(window.clearInterval(t),t=void 0))),this}}(jQuery);