//variables
var textDefault = document.getElementById("box");
var paragraph = document.getElementById("paragraph");

//para.id = "" or para.setAttribute("id", "idname")

//styling
textDefault.style.fontSize = "18px";
textDefault.style.color = "Blue";
paragraph.style.fontSize = "24px";
paragraph.style.color = "red";

setInterval(function calculate() {
	
	paragraph.innerHTML = textDefault.value.length + " digits";
			
}, 50);