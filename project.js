$(document).ready(function(){
console.log('live')

	var city = "New york";
	var queryURL = "http://maps.google.com/maps/api/geocode/json?address="+city;

	$.ajax({url: queryURL, method: 'GET'}).done(function(response){

		// console.log(response.results[0].geometry.viewport.northeast.lat)
		var latCord = response.results[0].geometry.viewport.northeast.lat;
		var lngCord = response.results[0].geometry.viewport.northeast.lng;

		console.log(latCord);
		console.log(lngCord);



   
        var marker = new google.maps.Marker({
          position: {lat: latCord, lng: lngCord},
          map: map,
          title: "Hellow World!"
        })
      

	});



});
var map;
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40, lng: -73},
          zoom: 2
        });
    }
  initMap();