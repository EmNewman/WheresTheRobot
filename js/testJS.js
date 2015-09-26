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

var rows = [""]
for (i=0; i < entries.length; i++) {
    rows.push(entries[i]["content"]["$t"]);
};

var info = [""]
for (i=0; i < rows.length; i++) {
    info.push(info,(rows[i].split(": ")));
    for(k=0; k < info[i].length; k++) {
        stringLength = info[i][k].length
        info[i][k] = info[i][k].substring(stringLength - 6, stringLength)
    }
};

/*
for (i=0; i < info.length; i++ ) {
    console.log(info[i]);
}; */
console.log(info);

