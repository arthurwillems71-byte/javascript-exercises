const palindromes = function (word) {
    alfabet = ("azertyuiopqsdfghjklmwxcvbn1234567890");
    const cleanWord = word.toLowerCase().split('').filter(letter => alfabet.includes(letter)).join('');
    const reversed = cleanWord.split('').reverse().join('');
    return cleanWord === reversed;

};

// Do not edit below this line
module.exports = palindromes;
