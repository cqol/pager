module('requireJS');

asyncTest('test requireJS support', function() {
    expect(1);
    require(['jquery', '../dist/pager'], function( $ ) {
        start();
        ok( !!$.fn.countdown, "Should load the plugin via requireJS" );
    });
});