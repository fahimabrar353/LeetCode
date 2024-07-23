var resultArray = function(nums) {
    var arr1 = [nums[0]];
    var arr2 = []; 

    for (var i = 1; i < nums.length; i++) {
        if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
            arr1.push(nums[i]);
        } else {
            arr2.push(nums[i]);
        }
    }

    return arr1.concat(arr2); a
};