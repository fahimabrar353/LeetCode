var checkStraightLine = function(coordinates) {
    let x_diff = coordinates[1][0] - coordinates[0][0];
    let y_diff = coordinates[1][1] - coordinates[0][1];
    
    for (let i = 2; i < coordinates.length; i++) {
        let current_x_diff = coordinates[i][0] - coordinates[0][0];
        let current_y_diff = coordinates[i][1] - coordinates[0][1];
        
        if (y_diff * current_x_diff !== x_diff * current_y_diff) {
            return false;
        }
    }
    
    return true;
};
