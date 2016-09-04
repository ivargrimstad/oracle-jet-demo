define(['c'], function(c) {
   return {
       functionB: function() {
           console.log("b called");
           c.functionC();
           return true;
       }
   }; 
    
});

