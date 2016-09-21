require.config({
    baseUrl: './',
    paths: {
        b: 'js/b',
        a: 'js/a',
        c: 'js/c'
    }
});

require(['a', 'c'], function(a,c) {
    console.log("main");
    a.functionA();
    c.functionC();
});

