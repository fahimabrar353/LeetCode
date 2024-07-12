var nextGreaterElements = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        let j = (i + 1) % nums.length;
        let nextMax = -1;
    
        while (j !== i && nums[j] <= nums[i]) {
            j = (j + 1) % nums.length;
        }
        if (j !== i) {
            nextMax = nums[j];
        }
        arr[i] = nextMax;
    }
    return arr;
};