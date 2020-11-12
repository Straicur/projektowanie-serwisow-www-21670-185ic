window.onload = podrecznik;
var bgcolor ;
var node ;
var tekst;
var textnode;
bgcolor = document.querySelector(".poderecznik");
function podrecznik(){
bgcolor.style.backgroundColor = "black";
node = document.createElement("i");               
textnode = document.createTextNode("Strona z podręcznika"); 
node.style.fontSize = "30px"; 
node.appendChild(textnode);                              
document.querySelector(".poderecznik").prepend(node);

tekst = document.querySelector(".dodatkowytext");
tekst.innerHTML="Lambda syntax, including optional parts";
tekst.style.color = "green";    
bgcolor.addEventListener("mouseleave",zmianabg1);
bgcolor.addEventListener("mouseenter",zmianabg2);
window.addEventListener("scroll",skroll);
}

function zmianabg1(){
    bgcolor.style.backgroundColor = "grey";

}
function zmianabg2(){
    bgcolor.style.backgroundColor = "green";
    
}
function skroll(){
    alert("Powodzenia w czytaniu :)");
}
