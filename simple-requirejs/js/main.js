require.config({
    baseUrl: './',
    paths: {
        a: 'js/a',
        b: 'js/b',
        c: 'js/c'
    }
});

require(['a','b'], function(a, b) {
    console.log("main");
    a.functionA();
    b.functionB();
});

