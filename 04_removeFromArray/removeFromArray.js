const removeFromArray = function(array, ...optParam) {
    for (item of optParam) {
        array = removeOneFromArray(array, item);
    }
    return array;
};

function removeOneFromArray(array, one) {
    return array.filter((item) => (item !== one));
}

// Do not edit below this line
module.exports = removeFromArray;
