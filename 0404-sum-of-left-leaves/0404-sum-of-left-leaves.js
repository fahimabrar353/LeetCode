var sumOfLeftLeaves = function(root) {
    let sum = 0;

    function dfs(node, isLeft) {
        if (node === null) return;

        if (isLeft && node.left === null && node.right === null) {
            sum += node.val;
        }

        dfs(node.left, true);
        dfs(node.right, false);
    }

    dfs(root, false);

    return sum;
};
