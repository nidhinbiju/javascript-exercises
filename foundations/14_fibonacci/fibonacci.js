const fibonacci = function(input) {
    const n = +input;
    if (n === 0) {
        return 0;
    }
    if (n < 0) {
        return "OOPS";
    }
    let first = 0;
    let second = 1;
    for (let i = 0; i < n - 1; i++) {
        let temp = second;
        second += first;
        first = temp;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
