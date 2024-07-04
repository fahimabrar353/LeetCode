class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function numComponents(head, nums) {
    const numSet = new Set(nums);
    let count = 0;
    let connected = false;

    while (head) {
        if (numSet.has(head.val)) {
            connected = true;
        } else {
            if (connected) {
                count++;
                connected = false;
            }
        }
        head = head.next;
    }

    if (connected) {
        count++;
    }

    return count;
}