/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
     function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    let count = 0;
    
    for (let i = left; i <= right; i++) {
        let bitCount = i.toString(2).split('1').length - 1;
        if (isPrime(bitCount)) {
            count++;
        }
    }
    
    return count;
};