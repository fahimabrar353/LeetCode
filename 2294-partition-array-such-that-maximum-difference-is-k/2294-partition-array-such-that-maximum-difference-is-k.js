var partitionArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    
    let count = 0;
    const n = nums.length;
    
    for (let i = 0; i < n; i++) {
        count++;
        
        let j = i + 1;
        while (j < n && nums[j] - nums[i] <= k) {
            j++;
        }
        
        i = j - 1;
    }
    
    return count;
};