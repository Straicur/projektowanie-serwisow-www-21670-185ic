window.onload = podrecznik;
var bgcolor ;
var node ;
var tekst;
var textnode;
function podrecznik(){
bgcolor = document.querySelector(".poderecznik").style.backgroundColor = "grey";
node = document.createElement("i");               
textnode = document.createTextNode("Strona z podręcznika"); 
node.style.fontSize = "30px"; 
node.appendChild(textnode);                              
document.querySelector(".poderecznik").prepend(node);

tekst = document.querySelector(".dodatkowytext");
tekst.innerHTML="Lambda syntax, including optional parts";
tekst.style.color = "green";    
}
