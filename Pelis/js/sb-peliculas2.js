$(document).ready(function(){
	$("#folder").mouseover(function(evento){
		var mousex = window.event.x;   
			var mousey = window.event.y;  
			user.style.visibility = 'visible'; 
			user.style.left = mousex + 5;  
			user.style.top = mousey; 
		var documento = $("<div><h1>Título metido en ejecución</h1></div>");
		documento.css("position:absolute",
			"width:150px",
			"height:100px",
			"color:blue",
			"background-color:#ff9999",
			"text-align:center",
			"visibility:hidden",
			"z-index:10");
		documento.appendTo("body")
	});
	$("#folder").mouseout(function(event){
		$("#folder").removeClass("cajas");
	});
});