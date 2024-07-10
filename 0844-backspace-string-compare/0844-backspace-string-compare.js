var backspaceCompare = function(s, t) {
    let sResult = applyBackspace(s);
    let tResult = applyBackspace(t);
    
    return sResult === tResult;
};

function applyBackspace(str) {
    let result = [];
    
    for (let char of str) {
        if (char === '#') {
            result.pop();
        } else {
            result.push(char);
        }
    }
    
    return result.join('');
}
