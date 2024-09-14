var longestSubarray = function(nums) {
    const maxVal = Math.max(...nums);
    
    let maxLength = 0;
    let currentLength = 0;

    for (let num of nums) {
        if (num === maxVal) {
            currentLength++;
        } else {
            maxLength = Math.max(maxLength, currentLength);
            currentLength = 0;
        }
    }
    
    maxLength = Math.max(maxLength, currentLength);
    
    return maxLength;
};
