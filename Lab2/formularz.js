window.onload = bgkolor;
var color1 = [];
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
var randomColor = Math.floor(Math.random() * color1.length);
function bgkolor(){
document.getElementById("bgkolor").style.backgroundColor = color1[randomColor];
}
