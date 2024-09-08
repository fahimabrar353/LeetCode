var splitListToParts = function(head, k) {
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }

    let splitSize = Math.floor(length / k);
    let extra = length % k;
    
    let result = new Array(k).fill(null);
    current = head;

    for (let i = 0; i < k && current; i++) {
        result[i] = current;
        let partSize = splitSize + (i < extra ? 1 : 0);
        
        for (let j = 1; j < partSize; j++) {
            current = current.next;
        }
        
        let nextPart = current.next;
        current.next = null;
        current = nextPart;
    }

    return result;
};
