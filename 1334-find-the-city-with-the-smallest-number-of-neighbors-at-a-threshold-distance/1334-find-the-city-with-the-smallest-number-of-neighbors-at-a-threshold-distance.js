var findTheCity = function(n, edges, distanceThreshold) {
    const matrix = Array(n).fill().map(() => Array(n).fill(Infinity));

    for (const [from, to, weight] of edges) {
        matrix[from][to] = weight;
        matrix[to][from] = weight;
    }
    
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
            }
        }
    }
    
    let minCities = Infinity;
    let result = -1;
    
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (i !== j && matrix[i][j] <= distanceThreshold) {
                count++;
            }
        }
        if (count <= minCities) {
            minCities = count;
            result = i;
        }
    }
    
    return result;
};