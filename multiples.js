
function show(){
    var a=document.getElementById("num").value;
    var sum=0;
    for (var i= 2; i<=a; i++) {
        if(i%2!=0){
            sum+=i; 
        }
    }
    alert(sum);
}