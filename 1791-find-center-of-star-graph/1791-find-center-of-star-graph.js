var findCenter = function(edges) {
    let [a, b] = edges[0];

    if (edges[1][0] === a || edges[1][1] === a) {
        return a;
    } else {
        return b;
    }
};