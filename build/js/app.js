(function() {
    'use strict';

    window.calc = window.calc || {};

    window.calc.sum = sum;
    window.calc.factorial = factorial;

    /**
     * Adds whatever numbers are provided and returns the total
     * @param  {Array} numbers  The numbers to add together
     * @return {Number}         The total of all numbers
     */
    function sum(numbers) {
        var total = 0;

        if (!numbers) {
            return total;
        }
        else if (typeof(numbers) === "string"){
          return numbers;
        }

        numbers.forEach(function addThem(num) {
            total += num;
        });
        return total;
    }

    /**
     * Returns the factorial for the given number which is defined as:
     *    1 * 2 * 3 * ... * topNumber
     *    For example, if the number is 5, the factorial would be:
     *    1 * 2 * 3 * 4 * 5 = 120
     * @param  {Number} topNumber  The number to get the factorial value for
     * @return {Number}            The final factorial value
     */
    function factorial(topNumber) {
        var i;
        var total = 1;

        if (typeof(topNumber) !== 'number') {
            return 0;
        }

        for (i=1; i<=topNumber; i++) {
            total *= i;
        }
        return total;
    }

})();
