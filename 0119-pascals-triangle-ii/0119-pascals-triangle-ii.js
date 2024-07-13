var getRow = function(rowIndex) {
    const row = [1];
    
    for (let i = 1; i <= rowIndex; i++) {
        for (let j = i - 1; j >= 1; j--) {
            row[j] += row[j - 1];
        }
        row.push(1);
    }
    
    return row;
};