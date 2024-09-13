var xorQueries = function(arr, queries) {
    const n = arr.length;
    const prefixXOR = new Array(n + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
        prefixXOR[i + 1] = prefixXOR[i] ^ arr[i];
    }
    
    const result = [];
    for (let [left, right] of queries) {
        result.push(prefixXOR[right + 1] ^ prefixXOR[left]);
    }
    
    return result;
};
