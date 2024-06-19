var targetIndices = function(nums, target) {
    var sortedNums = nums.slice().sort((a, b) => a - b);
    var result = [];
    
    for (var i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] === target) {
            result.push(i);
        }
    }
    
    return result;
};