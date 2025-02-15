var punishmentNumber = function(n) {
    function canPartition(num, target, index) {
        if (index === num.length) return target === 0;
        
        let sum = 0;
        for (let i = index; i < num.length; i++) {
            sum = sum * 10 + (num[i] - '0');
            if (sum > target) break;
            if (canPartition(num, target - sum, i + 1)) return true;
        }
        
        return false;
    }
    
    let totalSum = 0;
    for (let i = 1; i <= n; i++) {
        let squareStr = (i * i).toString();
        if (canPartition(squareStr, i, 0)) {
            totalSum += i * i;
        }
    }
    
    return totalSum;
};
