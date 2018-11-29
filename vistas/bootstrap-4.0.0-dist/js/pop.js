  function window_open(url){
   window.open( "http://www.facebook.com", "nombrePop-Up", "width=380,height=500, top=85,left=50");
  }
	document.getElementById("botonWindowOpen").onclick = function() {window_open()};