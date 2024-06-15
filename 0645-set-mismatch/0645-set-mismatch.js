var findErrorNums = function(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const expectedSumSquares = (n * (n + 1) * (2 * n + 1)) / 6;
    
    let actualSum = 0;
    let actualSumSquares = 0;
    
    for (let num of nums) {
        actualSum += num;
        actualSumSquares += num * num;
    }
    
    const sumDifference = actualSum - expectedSum;
    const squareSumDifference = actualSumSquares - expectedSumSquares;
    
    const sumXY = squareSumDifference / sumDifference;
    
    const x = (sumDifference + sumXY) / 2;
    const y = sumXY - x;
    
    return [x, y];
};