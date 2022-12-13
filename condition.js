let btn = document.getElementById("btn")
let inputField = document.getElementById("name"); 
btn.onclick = ()=> {
    let name = inputField.value.toLowerCase();
    if(name == "alice" || name == "bob") {
        alert("Hello " + name);
    } else {
        alert("Hello stranger")
    }

    inputField.value = "";
};
