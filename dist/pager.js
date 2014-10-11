/*!
 * web pager guid v1.0.0 (https://github.com/cqol/pager/)
 * Copyright (c) 2014 cqol_77
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
function Pager(container, config) {
    var defalut = {
        half: 3,
        total: 10,
        current: 1,
        prefix: 2,
        nexfix: 2,
        skin: "blue",
        callback: function(toindex) {}
    };
    this.fixs = $.extend({}, defalut, config);
    this.box = $(container);
    this.init();
}

Pager.prototype = {
    init: function() {
        this.renderPager();
    },
    renderPager: function() {
        var i, len, html = "", current = this.fixs.current, total = this.fixs.total, radius = this.fixs.half, skin = this.fixs.skin + "-page-skin", prefix = this.fixs.prefix, nexfix = this.fixs.nexfix, cb = this.fixs.callback;
        if (cb) {
            cb(current);
        }
        if (!current) {
            return;
        }
        if (total < 2) {
            return;
        }
        if (total < current) {
            return;
        }
        if (current > 1) {
            html += '<a class="vm-page-prev" href="#" data-k="page" data-v="' + (current - 1) + '"><s data-k="page" data-v="' + (current - 1) + '">‹</s>上一页</a>';
        } else {
            html += '<span class="vm-page-prev"><s>‹</s>上一页</span>';
        }
        if (current <= prefix + radius + 1) {
            for (i = 1; i <= current; i += 1) {
                if (i === current) {
                    html += '<span class="vm-page-current">' + i + "</span>";
                } else {
                    html += '<a href="#" data-k="page" data-v="' + i + '">' + i + "</a>";
                }
            }
        } else {
            for (i = 1; i < prefix + 1; i += 1) {
                html += '<a href="#" data-k="page" data-v="' + i + '">' + i + "</a>";
            }
            html += '<span class="vm-page-break">...</span>';
            for (i = current - radius; i <= current; i += 1) {
                if (i === current) {
                    html += '<span class="vm-page-current">' + i + "</span>";
                } else {
                    html += '<a href="#" data-k="page" data-v="' + i + '">' + i + "</a>";
                }
            }
        }
        if (total <= current + radius + nexfix) {
            for (i = current + 1; i <= total; i += 1) {
                html += '<a href="#" data-k="page" data-v="' + i + '">' + i + "</a>";
            }
        } else {
            for (i = current + 1, len = current + radius; i <= len; i += 1) {
                html += '<a href="#" data-k="page" data-v="' + i + '">' + i + "</a>";
            }
            html += '<span class="vm-page-break">...</span>';
            for (i = total - nexfix + 1; i <= total; ++i) {
                html += '<a href="#" data-k="page" data-v="' + i + '">' + i + "</a>";
            }
        }
        if (current < total) {
            html += '<a href="#" class="vm-page-next" data-k="page" data-v="' + (current + 1) + '">下一页<s data-k="page" data-v="' + (current + 1) + '">›</s></a>';
        } else {
            html += '<span class="vm-page-next">下一页<s>›</s></span>';
        }
        this.box.html('<div class="vm-page">' + html + "</div>");
        $(".vm-page").addClass(skin);
    }
};