/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const charCount = {};
    for (let char of text) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    const balloonCount = {
        'b': 1,
        'a': 1,
        'l': 2,
        'o': 2,
        'n': 1
    };

    let maxBalloons = Infinity;
    for (let char in balloonCount) {
        if (charCount[char]) {
            maxBalloons = Math.min(maxBalloons, Math.floor(charCount[char] / balloonCount[char]));
        } else {
            return 0;
        }
    }

    return maxBalloons;
};