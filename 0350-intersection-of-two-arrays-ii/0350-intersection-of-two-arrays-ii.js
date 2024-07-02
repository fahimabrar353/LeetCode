/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const frequencyMap = new Map();
    const result = [];

    // Count the frequency of each element in nums1
    for (const num of nums1) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Check the frequency of each element in nums2 and add to the result array
    for (const num of nums2) {
        if (frequencyMap.has(num) && frequencyMap.get(num) > 0) {
            result.push(num);
            frequencyMap.set(num, frequencyMap.get(num) - 1);
        }
    }

    return result;
};