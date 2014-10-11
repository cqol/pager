pager
=====

web pager guid

Getting started
---------------

```html
<div id="getting-started"></div>
<script type="text/javascript">
    var defalut = {
		half: 3,   //半径
		total: 10, //总页数
		current: 1, //当前的页码
		prefix : 2, //前缀
		nexfix : 2, //后缀
		skin: "red",//自定义样式名称
		callback : function (toindex) {}
	};

    function renderPage(index, num) {
      $('#getting-started').empty();
         if (num > 0) {
             new Pager('#getting-started', defalut);
         }
     }
</script>
```