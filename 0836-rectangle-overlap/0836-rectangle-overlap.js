var isRectangleOverlap = function(rec1, rec2) {
    const [x1, y1, x2, y2] = rec1;
    const [a1, b1, a2, b2] = rec2;

    if (x2 <= a1 || a2 <= x1) {
        return false;
    }

    if (y2 <= b1 || b2 <= y1) {
        return false;
    }

    return true;
};