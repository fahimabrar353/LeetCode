var commonChars = function(words) {
    if (words.length === 0) {
        return [];
    }

    let result = [];

    for (let char of words[0]) {
        if (words.every(word => word.includes(char))) {
            result.push(char);
            words = words.map(word => word.replace(char, ''));
        }
    }

    return result;
};
