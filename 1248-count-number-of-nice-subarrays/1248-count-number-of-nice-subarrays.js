var numberOfSubarrays = function(nums, k) {
    let res = 0;
    let odd = 0;
    let left = 0;
    let count = 0;
    
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] % 2 === 1) {
            odd += 1;
            count = 0;
        }
        
        while (odd === k) {
            if (nums[left] % 2 === 1) {
                odd -= 1;
            }
            left += 1;
            count += 1;
        }
        
        res += count;
    }
    
    return res;
};
