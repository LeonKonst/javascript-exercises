const findTheOldest = function(arr) {
    return arr.sort((a,b) => ((!b.hasOwnProperty("yearOfDeath")? 2025 : b.yearOfDeath) - b.yearOfBirth)- ((!a.hasOwnProperty("yearOfDeath")? 2025 : a.yearOfDeath) - a.yearOfBirth))[0]
};

// Do not edit below this line
module.exports = findTheOldest;
