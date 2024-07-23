var frequencySort = function(nums) {
    const frequency = {};

    for (let num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    nums.sort((a, b) => {
        if (frequency[a] === frequency[b]) {
            return b - a;
        } else {
            return frequency[a] - frequency[b];
        }
    });

    return nums;
};