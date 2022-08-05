const findTheOldest = function(arrayOfObj) {
    const sortedArray = arrayOfObj.sort((a,b) => {
        if (!('yearOfDeath' in a)) a.yearOfDeath = new Date().getFullYear();
        if (!('yearOfDeath' in b)) b.yearOfDeath = new Date().getFullYear();
        const aYear = a.yearOfDeath - a.yearOfBirth;
        const bYear = b.yearOfDeath - b.yearOfBirth;
        return bYear - aYear; // Descending
    });
    return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
