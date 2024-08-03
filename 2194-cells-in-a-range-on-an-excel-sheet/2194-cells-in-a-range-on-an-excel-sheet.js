var cellsInRange = function (s) {
    var col1 = s[0].charCodeAt(0) - "A".charCodeAt(0) + 1;
    var row1 = parseInt(s[1]);
    var col2 = s[3].charCodeAt(0) - "A".charCodeAt(0) + 1;
    var row2 = parseInt(s[4]);

    var result = [];

    for (var row = row1; row <= row2; row++) {
        for (var col = col1; col <= col2; col++) {
            var colChar = String.fromCharCode(col + "A".charCodeAt(0) - 1);
            var cell = colChar + row;
            result.push(cell);
        }
    }

    result.sort();

    return result;
};
