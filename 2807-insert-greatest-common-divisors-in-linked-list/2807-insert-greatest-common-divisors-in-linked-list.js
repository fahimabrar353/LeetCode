function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

var insertGreatestCommonDivisors = function(head) {
    let current = head;
    
    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    };
    
    while (current && current.next) {
        let gcdValue = gcd(current.val, current.next.val);
        let gcdNode = new ListNode(gcdValue);
        gcdNode.next = current.next;
        current.next = gcdNode;
        current = gcdNode.next;
    }
    
    return head;
};
