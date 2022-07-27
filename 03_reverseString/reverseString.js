const reverseString = function(str) {
    const len = str.length;
    let final = '';
    for (let i = len-1; i >= 0; i--) {
        final += str[i];
    }
    return final;
};

// Do not edit below this line
module.exports = reverseString;
