var preorder = function(root) {
    let result = [];
    
    const traverse = (node) => {
        if (!node) return;
        
        result.push(node.val);
        
        for (let child of node.children) {
            traverse(child);
        }
    };
    
    traverse(root);
    return result;
};
