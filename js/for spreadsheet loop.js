for()
{
	var lat = 
	var lng = 
	var teamNumber = 
	var teamName = 
	var teamBio = 
	var teamLink = 

	var teamLatLng = new.google.maps.LatLng(lat, lng);

	var markerOptions = {
		position: teamLatLng,
		map: map
	}

	var marker = new google.maps.Marker(markerOptions);

	var teamInfo = teamName <br> teamNumber <br> teamBio <br> teamLink ;

	var infowindow = new google.maps.InfoWindow({content: teamInfo});

	arker.addListener('click', function() {
		infowindow.open(map, marker); });
}