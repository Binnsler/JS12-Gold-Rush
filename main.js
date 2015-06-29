$(document).on('ready', function(){

	$('.map').on('click', function(event){
		var posX = event.pageX;
		var posY = event.pageY;
	$('.marker-div').append('<img class="marker" src="http://cdn.leafletjs.com/leaflet-0.4/images/marker-icon.png">');
	$('.marker').last().css({
		"position": "absolute",
		"left": posX,
		"top": posY,
		})
	});	

	$('body').on('click', '.marker',function(){
		$(this).remove();
	})





});