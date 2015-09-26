//map!!!!
function initialize() 
{
	var mapCanvas = document.getElementById('map');
	var pittLatLng = new google.maps.LatLng(40.44, -79.98);

	var mapOptions = {
		center: pittLatLng,
		zoom: 6,
		mapTypeId: google.maps.MapTypeId.ROADMAP }

	var map = new google.maps.Map(mapCanvas, mapOptions);

	var markerOptions = {
		position: pittLatLng,
		map: map }

<<<<<<< HEAD
				var marker = new google.maps.Marker(markerOptions);

				var contentString = 'pittsburgh';

				var infowindow = new google.maps.InfoWindow({ content: contentString });

				marker.addListener('click', function() {
					infowindow.open(map, marker); });
			}
=======
	var marker = new google.maps.Marker(markerOptions);
}
>>>>>>> origin/master

google.maps.event.addDomListener(window, 'load', initialize);
