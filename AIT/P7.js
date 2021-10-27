var querystring = require("querystring");
var q = querystring.parse(
	"year=2021&month=April&&day=Thursday&&date=15&&time=12:00 AM"
);

console.log("Year is", q.year);
console.log("Month is", q.month);
console.log("Day is", q.day);
console.log("Date is", q.date);
console.log("Time is", q.time);
