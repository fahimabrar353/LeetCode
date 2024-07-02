var findDifference = function (nums1, nums2) {
    function getDistinctElements(arr1, arr2) {
        let result = [];
        for (let i = 0; i < arr1.length; i++) {
            let isDistinct = true;
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                    isDistinct = false;
                    break;
                }
            }
            if (isDistinct && !result.includes(arr1[i])) {
                result.push(arr1[i]);
            }
        }
        return result;
    }

    let distinctInNums1 = getDistinctElements(nums1, nums2);

    let distinctInNums2 = getDistinctElements(nums2, nums1);

    return [distinctInNums1, distinctInNums2];
}; 