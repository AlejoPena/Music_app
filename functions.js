

(function() {
"use strict";

  var texxt = "";
  var tes= "";
  
  var datta= window.MUSIC_DATA['playlists'];
  var len= datta.length;
  
  texxt=datta[0].name;
  for (var i=0; i< len; i++){
  document.getElementById('results').innerHTML =  datta[i].name;

  }
  
  document.getElementById('other').innerHTML =  tes;
 /* document.getElementById("plist").innerHTML = "hola";*/
 /* window.MUSIC_DATA['playlists', 'name'];*/



})();

$(function () {
	$(".nav a").click( changeCol)
});

function changeCol{
	$(this).CSS({ color:purple})
}