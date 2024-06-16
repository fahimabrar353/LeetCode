var findTheDifference = function(s, t) {
   let xor_sum = 0;
    
    for (let char of s) {
        xor_sum ^= char.charCodeAt(0);
    }
    
    for (let char of t) {
        xor_sum ^= char.charCodeAt(0);
    }
    
    return String.fromCharCode(xor_sum); 
};