var longestSubarray = function (nums, limit) {
    const minDeque = [];
    const maxDeque = [];
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        while (minDeque.length > 0 && nums[right] < minDeque[minDeque.length - 1]) {
            minDeque.pop();
        }
        while (maxDeque.length > 0 && nums[right] > maxDeque[maxDeque.length - 1]) {
            maxDeque.pop();
        }

        minDeque.push(nums[right]);
        maxDeque.push(nums[right]);

        while (maxDeque[0] - minDeque[0] > limit) {
            if (minDeque[0] === nums[left]) {
                minDeque.shift();
            }
            if (maxDeque[0] === nums[left]) {
                maxDeque.shift();
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};