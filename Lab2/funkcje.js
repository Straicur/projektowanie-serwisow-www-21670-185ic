window.onload = function(){
odliczanieh();
amw();

};

function odliczanieh()
	{
		var dzisiaj = new Date();
	
		var godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;
		
		var minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;
		
		var sekunda = dzisiaj.getSeconds();
		if (sekunda<10) sekunda = "0"+sekunda;
		
		document.getElementById("zegarek").innerHTML = godzina+":"+minuta+":"+sekunda;
		 setTimeout("odliczanieh()",1000);
	}
function amw(){
	var element = document.getElementById("AMW");
	var student = document.createElement("p");
	student.style.fontSize = "30px";
	var notatka = document.createTextNode("Student");


	student.appendChild(notatka);  
	element.prepend(student);
    


	var amw = document.createElement("p");
	var node = document.createTextNode("AMW");
	amw.appendChild(node);  
	element.appendChild(amw);
	
}    

   

