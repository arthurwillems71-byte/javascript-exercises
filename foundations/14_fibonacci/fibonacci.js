const fibonacci = function(num) {
    num = Number(num);
    if (num < 0) {
        return 'OOPS';
    } else if (num === 0) {
        return 0;
    }
    let doublePrevious = 0;
    let previous = 0;
    let sum = 1;
    for (let i = 1; i < num; i++) {
        doublePrevious = previous;
        previous = sum;
        sum = previous + doublePrevious;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
