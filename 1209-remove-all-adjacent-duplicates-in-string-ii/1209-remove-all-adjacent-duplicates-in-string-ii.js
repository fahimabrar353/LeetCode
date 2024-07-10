var removeDuplicates = function(s, k) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0 || stack[stack.length - 1][0] !== s[i]) {
            stack.push([s[i], 1]);
        } else {
            stack[stack.length - 1][1]++;

            if (stack[stack.length - 1][1] === k) {
                stack.pop();
            }
        }
    }

    let result = '';
    for (let [character, count] of stack) {
        result += character.repeat(count);
    }

    return result;
};
