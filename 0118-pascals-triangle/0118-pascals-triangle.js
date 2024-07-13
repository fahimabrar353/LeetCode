var generate = function (numRows) {
    let triangle = [];

    for (let row = 0; row < numRows; row++) {
        let currentRow = [];

        for (let col = 0; col <= row; col++) {
            if (col === 0 || col === row) {
                currentRow.push(1);
            } else {
                currentRow.push(triangle[row - 1][col - 1] + triangle[row - 1][col]);
            }
        }

        triangle.push(currentRow);
    }

    return triangle;
};
