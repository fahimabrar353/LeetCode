var secondHighest = function(s) {
    let digits = new Set();
    
    for (let char of s) {
        if (char >= '0' && char <= '9') {
            digits.add(char);
        }
    }
    
    let sortedDigits = Array.from(digits).map(Number).sort((a, b) => b - a);
    
    if (sortedDigits.length < 2) {
        return -1;
    }
    
    return sortedDigits[1];
};