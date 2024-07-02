const moment = require('moment');


console.log("Current Date:", moment().toString())
let lastWeekMonday = moment().day(1);
console.log(
    "This last Week's Monday is:",
    lastWeekMonday.toString()
)