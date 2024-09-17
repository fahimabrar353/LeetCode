var uncommonFromSentences = function(s1, s2) {
    let words = s1.split(' ').concat(s2.split(' '));
    let wordCount = {};

    for (let word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    let uncommonWords = [];
    for (let word in wordCount) {
        if (wordCount[word] === 1) {
            uncommonWords.push(word);
        }
    }

    return uncommonWords;
};