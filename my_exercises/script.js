function add7 (num) {
    return num += 7;
}

function multiply (num1, num2) {
    return num1 * num2;
}
function capitalize (string) {
    let string2 = string.substr(1).toLowerCase();
    let string1 = string[0].toUpperCase();
    return string1 + string2;
}
function lastLetter (string) {
    return string.substr(-1);
}