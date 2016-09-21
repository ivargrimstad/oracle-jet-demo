define(['b'], function (b) {
    return {
        functionC: function () {
            console.log("c called");
            b.functionB();
            return true;
        }
    };

});

