var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }

    function constructBST(left, right) {
        if (left > right) {
            return null;
        }

        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);

        root.left = constructBST(left, mid - 1);
        root.right = constructBST(mid + 1, right);

        return root;
    }

    return constructBST(0, nums.length - 1);
};