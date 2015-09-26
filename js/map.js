<<<<<<< Updated upstream
//map!!!!
function initialize() 
{
	var mapCanvas = document.getElementById('map');
	var pittLatLng = new google.maps.LatLng(40.44, -79.98);
=======
<!DOCTYPE html>
<html>
	<head>
		<style>
			#map {
				width: 400px;
				height: 500px;
				float: left;
			}
		</style>
		<script src="https://maps.googleapis.com/maps/api/js"></script>
		<script>
			function initialize() 
			{
				var mapCanvas = document.getElementById('map');
				var pittLatLng = new google.maps.LatLng(40.44, -79.98);
>>>>>>> Stashed changes

	var mapOptions = {
		center: pittLatLng,
		zoom: 6,
		mapTypeId: google.maps.MapTypeId.ROADMAP }

	var map = new google.maps.Map(mapCanvas, mapOptions);

	var markerOptions = {
		position: pittLatLng,
		map: map }

	var marker = new google.maps.Marker(markerOptions);
}

<<<<<<< Updated upstream
google.maps.event.addDomListener(window, 'load', initialize);
=======
			google.maps.event.addDomListener(window, 'load', initialize);

		</script>
	</head>
 
	<body>
		<div id="map"></div>
	</body>
</html>
>>>>>>> Stashed changes
