var canArrange = function(arr, k) {
    const remainderCounts = new Array(k).fill(0);

    for (const num of arr) {
        const remainder = ((num % k) + k) % k;
        remainderCounts[remainder]++;
    }

    for (let i = 0; i < k; i++) {
        if (i === 0) {
            // Special case: remainder 0, count must be even
            if (remainderCounts[i] % 2 !== 0) return false;
        } else if (i === k - i) {
            // Special case: remainder == k - remainder, count must be even
            if (remainderCounts[i] % 2 !== 0) return false;
        } else {
            // General case: count of remainder must match count of k - remainder
            if (remainderCounts[i] !== remainderCounts[k - i]) return false;
        }
    }

    return true;
};