
// Convert an object to a String
function objToStr(obj) {
    return JSON.stringify(obj);
}

// Convert a string to an object
function strToObj(str) {
    return JSON.parse(str);
}

// Calculate the difference between current and given timestamp
function diff (given) {
    let date1 = new Date();
    let date2 = new Date(given);
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return `The difference is ${Math.abs(Math.floor(Difference_In_Days))} days`;
}

module.exports = {
    objToStr, strToObj, diff
}
