window.onload = function(){
    for (var i = 2; i <= 30; i++) {
      var a = 0;
 
 
       for (var j = 2; j < i; j++) {
           if (i % j == 0) {
              a = 1;
 
               break;
 
           }
       }
       if (i > 1 && a== 0) {
          console.log(i)
         document.write(i+" ");
       }
 
   }
 
 
 };