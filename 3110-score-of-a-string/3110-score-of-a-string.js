var scoreOfString = function(s) {
    var score = 0;
    for (var i = 1; i < s.length; i++) {
        score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
    }
    return score;
};