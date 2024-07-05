var nodesBetweenCriticalPoints = function(head) {
    let minDistance = Infinity;
    let maxDistance = -1;
    let firstCriticalIndex = -1;
    let prevCriticalIndex = -1;
    let index = 1;
    let prev = head;
    let curr = head.next;

    while (curr && curr.next) {
        let next = curr.next;

        // Check if the current node is a critical point
        if ((prev.val < curr.val && curr.val > next.val) || (prev.val > curr.val && curr.val < next.val)) {
            if (firstCriticalIndex === -1) {
                firstCriticalIndex = index;
            } else {
                minDistance = Math.min(minDistance, index - prevCriticalIndex);
            }
            maxDistance = index - firstCriticalIndex;
            prevCriticalIndex = index;
        }

        prev = curr;
        curr = next;
        index++;
    }

    // If no critical points or only one critical point was found, return [-1, -1]
    if (minDistance === Infinity) {
        return [-1, -1];
    }

    return [minDistance, maxDistance];
};
