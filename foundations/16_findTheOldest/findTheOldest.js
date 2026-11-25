const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}
const findTheOldest = function(array) {
    return array.reduce((oldest, newPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const newAge = getAge (newPerson.yearOfBirth, newPerson.yearOfDeath);
    return oldestAge < newAge ? newPerson : oldest;
})

};

// Do not edit below this line
module.exports = findTheOldest;
