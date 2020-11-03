"use strict";
var str;
var font1;
var font2; 
var tekst;
var button1;
var tekstdot;
var kolor1 = [];
var kolor2 = [];
var poch;
var textnode ;
var interakcja;


interakcja = document.querySelector(".interakcja");
interakcja.style.backgroundColor = "rgb(204, 247, 134)";
interakcja.style.fontSize = "24px";
interakcja.style.color = "white";
poch = document.createElement("i");
tekstdot = document.querySelector("#dodatek");


for(var i = 0;i < document.querySelectorAll(".interakcja div select option").length;i++){

   kolor1[i]=document.querySelectorAll(".interakcja div select option")[i].value;
    
}
for(var i = 0;i < document.querySelectorAll(".interakcja div div select option").length;i++){

    kolor2[i]=document.querySelectorAll(".interakcja div div select option")[i].value;
     
}
   
function button2(){
    tekst = document.getElementById("tekscik").value;
    textnode = document.createTextNode("Twój tekst : "+tekst);
    poch.appendChild(textnode);  
    tekstdot.appendChild(poch);
    font1 = document.querySelector(".interakcja div select ").selectedIndex;
    font2 = document.querySelector(".interakcja div div select ").selectedIndex;
    interakcja.style.backgroundColor = kolor2[font2];
    document.getElementById("tekscik").style.color = kolor1[font1];
    alert(tekst);
};

