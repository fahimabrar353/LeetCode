var minKBitFlips = function (nums, k) {
    let n = nums.length;
    let flip = new Array(n + 1).fill(0); 
    let flips = 0, currentFlips = 0;

    for (let i = 0; i < n; i++) {
        currentFlips ^= flip[i];
        if (nums[i] === currentFlips) {
            if (i + k > n) return -1;
            flips++;
            currentFlips ^= 1;
            flip[i + k] ^= 1;
        }
    }
    return flips;
};