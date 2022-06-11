function isweekend () {
return new Date().getDay() === 6 || new Date().getDay() === 0;
}

function leapYear () {
    const year = new Date().getFullYear()
 return new Date(year, 2, 0).getDate() === 29
}

module.exports = {
    isweekend,
    leapYear
};

    
