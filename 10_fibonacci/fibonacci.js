const fibonacci = function(n) {
    if (n < 0) return 'OOPS';
    else if (n == 1 || n == 2) return 1;
    else return fibonacci(n-1) + fibonacci(n-2);
};

// Without using recursive function
const fibonacci2 = function(n) {
    if (n < 0) return 'OOPS';
    let array = [1,1];
    while (array.length < n) {
        array.push(array[array.length-1] + array[array.length-2]);
    }
    return array[n-1];
}

// Do not edit below this line
module.exports = fibonacci2;
