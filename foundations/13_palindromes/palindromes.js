const palindromes = function (s) {
    const newString = s
        .replace(/[.,!;: ]/g, "")
        .toLowerCase();
    let l = 0;
    let r = newString.length - 1;
    while (l < r) {
        if (newString[l] != newString[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
