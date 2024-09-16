var findMinDifference = function(timePoints) {
    const toMinutes = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };
    
    let minutesList = timePoints.map(toMinutes);
    minutesList.sort((a, b) => a - b);
    
    let minDifference = Infinity;
    
    for (let i = 1; i < minutesList.length; i++) {
        minDifference = Math.min(minDifference, minutesList[i] - minutesList[i - 1]);
    }
    
    const dayMinutes = 24 * 60;
    const wrapAroundDifference = dayMinutes - minutesList[minutesList.length - 1] + minutesList[0];
    minDifference = Math.min(minDifference, wrapAroundDifference);
    
    return minDifference;
};
