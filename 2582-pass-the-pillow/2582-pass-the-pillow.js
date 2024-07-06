var passThePillow = function(n, time) {
    if (n === 1) return 1; 
    time = time % (2 * n - 2); 
    if (time < n) return time + 1; 
    return 2 * n - time - 1;
};
