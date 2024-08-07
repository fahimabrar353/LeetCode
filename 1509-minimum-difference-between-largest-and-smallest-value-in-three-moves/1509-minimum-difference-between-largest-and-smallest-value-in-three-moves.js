/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if (nums.length <= 4) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    const n = nums.length;
    const scenarios = [
        nums[n - 1] - nums[3],
        nums[n - 2] - nums[2],
        nums[n - 3] - nums[1],
        nums[n - 4] - nums[0]
    ];

    return Math.min(...scenarios);
};