var mathUtil = (() => {
    var count = 10;

    /**
     * Function to calculate sum of two values.
     * @param {number/string}firstValue
     * @param {number/string}secondValue
     * @returns result sum of numbers
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
     * Function to calculate subtraction of two values.
     * @param {number/string}firstValue
     * @param {number/string}secondValue
     * @returns result Subtraction of numbers
     */
    var  getSubtraction =(firstValue, secondValue) => {
        count++;
        var result;
        firstValue = parseInt(firstValue);
        secondValue = parseInt(secondValue);
        result = firstValue - secondValue;
        return result;
    }


    /**
     * Function to calculate Multiflication of two values.
     * @param {number/string}firstValue
     * @param {number/string}secondValue
     * @returns result Multiflication of numbers
     */

    var getMultiflication = (firstValue, secondValue) => {
        count++;
        var result;
        firstValue = parseInt(firstValue);
        secondValue = parseInt(secondValue);
        result = firstValue * secondValue;
        return result;
    }

    /**
     * Function to calculate Division of two values.
     * @param {number/string}firstValue
     * @param {number/string}secondValue
     * @returns result Division of numbers
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

    return {
        getAdditionOfValues(a, b) {
            return getAddition(a, b);
        },

        getSubtractionOfValues(a, b) {
            return getSubtraction(a, b);
        },

        getMultiflicationOfValues(a, b) {
            return getMultiflication(a, b);
        },
    
        getDivisionOfValues(a, b) {
            return getDivision(a, b);
        }
        
    }

})();