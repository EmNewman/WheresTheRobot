// ID of the Google Spreadsheet
var spreadsheetID = "13oMpK1vV_7kHJuL0Md0ja3TUsqHh5L7VPl9zTmuZfxI";

// Make sure it is public or set to Anyone with link can view 
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/basic?alt=json";
//https://docs.google.com/spreadsheets/d/13oMpK1vV_7kHJuL0Md0ja3TUsqHh5L7VPl9zTmuZfxI/edit?usp=sharing

var j = [];

$.ajax({
  type: 'GET',
  url: url,
  dataType: 'json',
  success: function(data) { j = data;},
  async: false
});

entries = j["feed"]["entry"];

vals = entries.map(
        function (elem){
            return elem.content["$t"].split(": ")
        }
    );

vals2 = [ ];
for (i=0; i<vals.length;i++) {
    vals2[i] = [ ]
    for(k=1; k<vals[i].length;k++) {
        if (k == 11) {
            vals2[i][k-1] = vals[i][k]
        }
        else {
            vals2[i][k-1] = vals[i][k].substring(0, vals[i][k].length-6);
        }
    }
}


function initialize() 
{
    // ID of the Google Spreadsheet
    var spreadsheetID = "13oMpK1vV_7kHJuL0Md0ja3TUsqHh5L7VPl9zTmuZfxI";

    // Make sure it is public or set to Anyone with link can view 
    var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/basic?alt=json";
    //https://docs.google.com/spreadsheets/d/13oMpK1vV_7kHJuL0Md0ja3TUsqHh5L7VPl9zTmuZfxI/edit?usp=sharing

    var j = [];

    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
      success: function(data) { j = data;},
      async: false
    });

    entries = j["feed"]["entry"];

    vals = entries.map(
            function (elem){
                return elem.content["$t"].split(": ")
            }
        );
    console.log(vals);
    vals2 = [ ];
    for (i=0; i<vals.length;i++) {
        vals2[i] = [ ]
        for(k=1; k<vals[i].length;k++) {
            if (k == 11) {
                vals2[i][k-1] = vals[i][k]
            }
            else {
                vals2[i][k-1] = vals[i][k].substring(0, vals[i][k].length-6);
            }
        }
    }
    console.log(vals2);

    var mapCanvas = document.getElementById('map');
    var pittLatLng = new google.maps.LatLng(40.44, -79.98);

    var mapOptions = {
        center: pittLatLng,
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP }

    var map = new google.maps.Map(mapCanvas, mapOptions);
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    var teamInfo = [ ]
    for(i=0; i< vals2.length; i++) {
        var lat = vals2[i][9]
        var lng = vals2[i][10]
        var teamNumber = vals2[i][0]
        var teamName = vals2[i][1]
        var teamBio = vals2[i][4]
        var teamLink = vals2[i][5]

        var teamLatLng = new google.maps.LatLng(lat, lng);

        var markerOptions = {
            position: teamLatLng,
            map: map
        }

        marker = new google.maps.Marker(markerOptions)

        teamInfo[i] = "Name: "+teamName+" #"+teamNumber+"<br>Bio: "+teamBio+"<br><a href=\""+teamLink+"\">"+teamLink+"</a>";

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
            infowindow.setContent(teamInfo[i]);
            infowindow.open(map, marker);
            }
        })(marker, i));


    }



}

google.maps.event.addDomListener(window, 'load', initialize);


