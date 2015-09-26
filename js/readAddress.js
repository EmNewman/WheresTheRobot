<div class="results"></div> 
 
<script>
 
 // ID of the Google Spreadsheet
 var spreadsheetID = "13oMpK1vV_7kHJuL0Md0ja3TUsqHh5L7VPl9zTmuZfxI";
 
 // Make sure it is public or set to Anyone with link can view 
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/values?alt=json";
 
 $.getJSON(url, function(data) {
 
  var entry = data.feed.entry;
 
  $(entry).each(function(){
    // Column names are name, age, etc.
    $('.results').prepend('<p>'+this.gsx$address.$t+this.gsx$city.$t+'</p>');
  });
 
	return results;

 });
 
</script>

//http://ctrlq.org/code/20004-google-spreadsheets-json 
