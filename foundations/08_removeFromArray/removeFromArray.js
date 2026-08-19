const removeFromArray = function(array, ...restOfTheArgs) {
    return array.filter((item) => !restOfTheArgs.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
