var arrayRankTransform = function (arr) {
    if (arr.length === 0) return arr;

    const sortedUnique = [...new Set(arr)].sort((a, b) => a - b);

    const rankMap = {};
    for (let i = 0; i < sortedUnique.length; i++) {
        rankMap[sortedUnique[i]] = i + 1;
    }

    return arr.map(value => rankMap[value]);
};