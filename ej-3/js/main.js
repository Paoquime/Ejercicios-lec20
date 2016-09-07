 window.addEventListener("load", function() {
	var boton = document.getElementById("go");
	boton.addEventListener("click", function() {
		var segundos = parseInt(document.getElementById("segundos").value);
		var inicio = parseInt(document.getElementById("inicio").value);

		contador(segundos, inicio);
	});

	function contador(segundos, inicio) {
		setInterval(function(){document.write(inicio++)}, segundos*1000);
	}
});