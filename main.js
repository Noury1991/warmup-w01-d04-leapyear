//////Reem's Solution///////

const isLeapYear = function (year) {
    if (year % 4 === 0 && year % 100 !== 0) { return true; }
    else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else return false;
}


//////Waleed's Solution///////

const isLeapYear2 = (year) => ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

console.log(isLeapYear(1990))
console.log(isLeapYear(1996))
console.log(isLeapYear2(1997))
console.log(isLeapYear2(2000))


/////// Sager Soluttion //////

const isLeapYear = function (year) {
    //  first special case
    if (year % 400 == 0)
        return true;
    // second special case
    if (year % 100 == 0)
        return false;
    //  base case
    if (year % 4 == 0)
        return true;
    return false;
}

console.log(isLeapYear(1997));
console.log(isLeapYear(1996));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
