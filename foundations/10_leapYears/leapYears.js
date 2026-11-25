const leapYears = function(year) {
    const div400 = year%400 === 0;
    const div100 = year%100 === 0;
    const div4 = year%4 === 0;

    if(div4 && (!div100  || div400)){
        return true;
    }else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
