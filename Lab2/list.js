window.onload = start  ;

var dzisiaj1 = new Date();
	
var dzien = dzisiaj1.getDate();
var miesiac = dzisiaj1.getMonth()+1;
var rok = dzisiaj1.getFullYear();


var button = document.createElement("button"); 
var button1 = document.createElement("button");
button.innerText = "Powiększ litery";
button1.innerText = "Zmien nazwisko";  
var pixele = "30px";


button.onclick = function(){
    document.getElementById("tekst1").style.fontSize = pixele ;
};
button1.onclick = (function(){
    var name = window.prompt("Enter your name: ");
    document.getElementById("nazwisko").innerHTML=name;
});


function start(){  
document.getElementById("data").innerHTML = 
"Gdynia"+"/"+ dzien+"/"+miesiac+"/"+rok;

document.getElementById("b1").appendChild(button);
document.getElementById("b2").appendChild(button1);
}



