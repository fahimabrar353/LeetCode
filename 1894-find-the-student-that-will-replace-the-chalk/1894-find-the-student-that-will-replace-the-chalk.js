var chalkReplacer = function (chalk, k) {
    const n = chalk.length;
    let totalChalk = 0;

    for (let i = 0; i < n; i++) {
        totalChalk += chalk[i];
    }

    k = k % totalChalk;
    for (let i = 0; i < n; i++) {
        if (k < chalk[i]) {
            return i;
        }
        k -= chalk[i];
    }

    return -1;
};
