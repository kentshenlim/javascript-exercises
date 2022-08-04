/*Check is letter or not, then form an array of char, then reverse then cmp*/
const palindromes = function (str) {
    let strArray = str.split('');
    strArray = strArray.filter(item => {
        return item.toUpperCase() !== item.toLowerCase()
    });
    return strArray.join('').toLowerCase() === 
    strArray.reverse().join('').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
