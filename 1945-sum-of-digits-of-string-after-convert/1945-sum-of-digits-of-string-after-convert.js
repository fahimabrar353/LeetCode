var getLucky = function(s, k) {
    let numStr = '';
    for (let char of s) {
        numStr += (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1).toString();
    }
    
    let result = numStr.split('').reduce((sum, digit) => sum + Number(digit), 0);
    
    for (let i = 1; i < k; i++) {
        result = result.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    }
    
    return result;
};
