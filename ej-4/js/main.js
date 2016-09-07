window.addEventListener("load", function() {
	var boton = document.getElementById("go");
	boton.addEventListener("click", function() {
	var intervalo = parseInt(document.getElementById("intervalo").value);

setInterval (changeColor, intervalo*1000);

});

function changeColor(){

	var change = "#"+Math.floor(Math.random()*16777215).toString(16);
	document.body.style.backgroundColor=change;
}

});
