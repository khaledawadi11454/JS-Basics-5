
function show(x){
    var x=document.getElementById("num").value;
   console.log(x)
   if(x.includes("+")) {
      var cal=0;
      var s=parseInt(x.split("+"));
      for (i=1;i<=s;i++) {
         cal+=i;
        }
   }else if (x.includes("*")) {
      var cal=1;
      var s=parseInt(x.split("*"));
console.log(s)
      for (i=1;i<=s;i++) {
         cal*=i;
        }
   }
console.log(cal)
   alert(cal)
}