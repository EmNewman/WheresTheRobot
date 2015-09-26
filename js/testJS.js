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
    for(k=1; k<vals[i].length-1;k++) {
        vals2[i][k-1] = vals[i][k].substring(0, vals[i][k].length-6)
    }
}

console.log(vals2);

/*
var rows = [""]
for (i=0; i < entries.length; i++) {
    rows.push(entries[i]["content"]["$t"]);
};

console.log(typeof rows[0].split)

var info = [""]
for (i=0; i < rows.length; i++) {
    info.push.apply(info,(rows[i].split(": ")));
    for(k=0; k < info[i].length; k++) {
        stringLength = info[i][k].length

        //info[i][k] = info[i][k].substring(stringLength - 6, stringLength)
    }
};

/*
for (i=0; i < info.length; i++ ) {
    console.log(info[i]);
}; */
/*
console.log(info);
console.log(typeof info)
console.log(typeof info[0]);
console.log(typeof info[0][0]);
*/