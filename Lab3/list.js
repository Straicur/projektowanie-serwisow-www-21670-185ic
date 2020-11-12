window.onload = start  ;

var dzisiaj1 = new Date();
	
var dzien = dzisiaj1.getDate();
var miesiac = dzisiaj1.getMonth()+1;
var rok = dzisiaj1.getFullYear();
var data ;
var tekst1;
var nazwisko;
var nazwisko1;

var button = document.createElement("button"); 
button.innerText = "Powiększ litery";
button.style.background = "grey";
var tekst = document.createElement("p");
textnode = document.createTextNode("Jeżeli chcesz zmienić nazwisko kliknij 'w'"); 
tekst.style.fontSize="15px";
tekst.appendChild(textnode);



var pixele = "30px";


button.onclick = function(){
   tekst1 = document.getElementById("tekst1");
   tekst1.style.fontSize = pixele;
};
function nazwisko(){
    var x = event.keyCode;
    if(x==119){
    var name = window.prompt("Enter your name: ");
    nazwisko = document.getElementById("nazwisko");
    nazwisko.innerHTML=name;
    }
    else{
        alert("nie kliknąłeś W");
    } 
};


function start(){  
data1 = document.getElementById("data");
data1.innerHTML = "Gdynia"+"/"+ dzien+"/"+miesiac+"/"+rok;

document.getElementById("b1").appendChild(button);
document.getElementById("b1").appendChild(tekst);
window.addEventListener("keypress",nazwisko);
nazwisko1 = document.getElementById("nazwisko");
nazwisko1.addEventListener("copy",kopiuj);


}

function kopiuj(){
    alert("Zkopiowałeś nazwisko")
}




