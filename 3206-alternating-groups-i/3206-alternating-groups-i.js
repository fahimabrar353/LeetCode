var numberOfAlternatingGroups = function (colors) {
    let n = colors.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let prev = colors[(i - 1 + n) % n];
        let curr = colors[i];
        let next = colors[(i + 1) % n];

        if (curr !== prev && curr !== next) {
            count++;
        }
    }

    return count;
};
