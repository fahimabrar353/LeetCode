function maximumGain(s, x, y) {
    let res = 0;

    const removePairs = (pair, score) => {
        let stack = [];
        let newStr = '';
        for (let c of s) {
            if (c === pair[1] && stack.length && stack[stack.length - 1] === pair[0]) {
                stack.pop();
                res += score;
            } else {
                stack.push(c);
            }
        }
        s = stack.join('');
    };

    let pair = x > y ? "ab" : "ba";
    removePairs(pair, Math.max(x, y));
    removePairs(pair.split('').reverse().join(''), Math.min(x, y));
    return res;
}
