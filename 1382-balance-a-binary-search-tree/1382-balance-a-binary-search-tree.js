function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var balanceBST = function (root) {
    const sortedArray = [];

    function inOrderTraversal(node) {
        if (!node) return;
        inOrderTraversal(node.left);
        sortedArray.push(node.val);
        inOrderTraversal(node.right);
    }

    inOrderTraversal(root);

    function sortedArrayToBST(start, end) {
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2);
        const node = new TreeNode(sortedArray[mid]);

        node.left = sortedArrayToBST(start, mid - 1);
        node.right = sortedArrayToBST(mid + 1, end);

        return node;
    }

    return sortedArrayToBST(0, sortedArray.length - 1);
};