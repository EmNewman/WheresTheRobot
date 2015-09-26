var address = //whatever we got from sheet json

var addressURL = address.replace(' ', '+'); //address formatted for url

src ='https://maps.googleapis.com/maps/api/geocode/json?address='+addressURL+'&key=AIzaSyDodhxYOwY1Nygtjz8BFhimgUm-n2Ehrik';

var lat = json.results.geometry.location.lat; //idk if syntax is right here???
var lng = json.results.geometry.location.lng; //^^

var latLng = '{'+lat+','+lng+'}'; //lat and lng formatted so geocode script can take
return latLng; //syntax?