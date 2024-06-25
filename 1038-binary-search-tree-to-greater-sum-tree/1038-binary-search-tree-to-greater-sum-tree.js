class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
var bstToGst = function(root) {
    let sum = 0;
    
    function reverseInOrder(node) {
        if (!node) return;
        
        reverseInOrder(node.right);
        
        sum += node.val;
        node.val = sum;
        
        reverseInOrder(node.left);
    }
    
    reverseInOrder(root);
    return root;
}

// Helper function to print the tree (level order traversal)
function printTree(root) {
    if (!root) return [];
    let result = [];
    let queue = [root];
    
    while (queue.length > 0) {
        let node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }
    return result;
}


