// ID of the Google Spreadsheet
var spreadsheetID = "13oMpK1vV_7kHJuL0Md0ja3TUsqHh5L7VPl9zTmuZfxI";

// Make sure it is public or set to Anyone with link can view 
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/basic?alt=json";
//https://docs.google.com/spreadsheets/d/13oMpK1vV_7kHJuL0Md0ja3TUsqHh5L7VPl9zTmuZfxI/edit?usp=sharing


$.getJSON(url, function(data) {

    var entry = data.feed.entry;

    $(entry).each(function(){
        // Column names are name, age, etc.
        $('.results').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$age.$t+'</p>');
    });

});
 
