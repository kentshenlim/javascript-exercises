const sumAll = function(lowerNum, upperNum) {
    // Typeof check
    if (lowerNum<0 || upperNum<0 || typeof lowerNum !== 'number' ||
    typeof upperNum !== 'number') {
        return 'ERROR';
    }

    // Swap if first arg bigger than second
    if (lowerNum > upperNum) {
        let temp = lowerNum;
        lowerNum = upperNum;
        upperNum = temp;
    }

    // Execute if two checks passed
    let sum = 0;
    for (let i = lowerNum; i <= upperNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
