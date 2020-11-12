window.onload = przycisk;
var color1 = [];
var przycisk;
var bgkolor;
color1[0] = "#CC99FF";
color1[1] = "#FF99CC";
color1[2] = "#FF9999";
color1[3] = "#FFCC99";
color1[4] = "#FFFF99";
color1[5] = "#CCFF99";
color1[6] = "#99FF99";
color1[7] = "#99FFCC";
color1[8] = "#66FFFF";
color1[9] = "#66CCFF";
color1[10] = "#CAFF99";
color1[11] = "#96FA99";
color1[12] = "#19BFCC";
color1[13] = "#69FFFA";
color1[14] = "#63CCFB";

function przycisk(){
    przycisk = document.querySelector(".przycisk");
    przycisk.style.width = "300px";
    przycisk.style.height = "50px"; 
    window.addEventListener("keyup",bgkolor); 
    window.addEventListener("keydown",bgkolor); 
    
}
function bgkolor(){
    var x = event.key;
    if(x=='w'){
    var randomColor = Math.floor(Math.random() * color1.length);
    bgkolor =document.getElementById("bgkolor");
    bgkolor.style.backgroundColor = color1[randomColor];
    }   
}

