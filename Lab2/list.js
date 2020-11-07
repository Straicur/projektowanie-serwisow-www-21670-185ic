window.onload = start  ;

var dzisiaj1 = new Date();
	
var dzien = dzisiaj1.getDate();
var miesiac = dzisiaj1.getMonth()+1;
var rok = dzisiaj1.getFullYear();
var data ;
var tekst1;
var nazwisko;


var button = document.createElement("button"); 
var button1 = document.createElement("button");
button.innerText = "Powiększ litery";
button1.innerText = "Zmien nazwisko";  
button.style.background = "grey";
button1.style.background = "grey";

var pixele = "30px";


button.onclick = function(){
   tekst1 = document.getElementById("tekst1");
   tekst1.style.fontSize = pixele;
};
button1.onclick = (function(){
    var name = window.prompt("Enter your name: ");
    nazwisko = document.getElementById("nazwisko");
    nazwisko.innerHTML=name;
});


function start(){  
data1 = document.getElementById("data");
data1.innerHTML = "Gdynia"+"/"+ dzien+"/"+miesiac+"/"+rok;

document.getElementById("b1").appendChild(button);
document.getElementById("b2").appendChild(button1);
}



