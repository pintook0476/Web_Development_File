
var count = 10;

/**
 * Function to calculate sum of two values.
 * @param {number/string} firstValue 
 * @param {number/string} secondValue 
 * @returns  result Sum of numbers
 */
var getAddition = (firstValue, secondValue) => {
    count++;
    var result;
    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);
    result = firstValue + secondValue;
    return result;
}


/**
 * Function to calculate substraction of two values.
 * @param {number/string} firstValue 
 * @param {number/string} secondValue 
 * @returns  result substraction of numbers
 */
 var getSubstraction = (firstValue, secondValue) => {
    count++;
    var result;
    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);
    result = firstValue - secondValue;
    return result;
}


/**
 * Function to calculate Multiplication of two values.
 * @param {number/string} firstValue 
 * @param {number/string} secondValue 
 * @returns  result Multiplication of numbers
 */
 var getMultiplication = (firstValue, secondValue) => {
    count++;
    var result;
    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);
    result = firstValue * secondValue;
    return result;
}

/**
 * Function to calculate Divison of two values.
 * @param {number/string} firstValue 
 * @param {number/string} secondValue 
 * @returns  result Divison of numbers
 */
 var getDivision = (firstValue, secondValue) => {
    count++;
    var result;
    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);
    result = firstValue / secondValue;
    return result;
}

var getCount = () => {
    return count;
}