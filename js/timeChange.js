
/**
* Copped this from StackOverflow 
* http://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates-using-javascript
* ed. Emily
**/
date1 = new Date("January 3 2015");
date2 = new Date();

// The number of milliseconds in one day
var ONE_DAY = 1000 * 60 * 60 * 24

// Convert both dates to milliseconds
var date1_ms = date1.getTime()
var date2_ms = date2.getTime()

// Calculate the difference in milliseconds
var difference_ms = Math.abs(date1_ms - date2_ms)

// Convert back to days
var number_of_days = Math.ceil(difference_ms/ONE_DAY)
var number_of_weeks = Math.ceil(number_of_days/7)

document.getElementById("dateCheck").innerHTML = "It's week " + number_of_weeks + "!"