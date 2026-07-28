const repeatString = function(s, n) {
    let res = '';
    for (let i = 0; i < n; i++) {
        res += s;
    }
    return n == -1 ? "ERROR": res;
};

// Do not edit below this line
module.exports = repeatString;
