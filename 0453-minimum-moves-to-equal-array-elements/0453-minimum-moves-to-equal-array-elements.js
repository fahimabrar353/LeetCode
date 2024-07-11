var minMoves = function(nums) {
    var min = nums[0];
    var moves = 0;
    
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i]; 
        }
    }
    
    for (var i = 0; i < nums.length; i++) {
        moves += nums[i] - min; 
    }
    
    return moves;
};

