var calPoints = function(operations) {
    let stack = []; 

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "C") {
            stack.pop();
        } else if (operations[i] === "D") {
            stack.push(stack[stack.length - 1] * 2);
        } else if (operations[i] === "+") {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else {
            stack.push(parseInt(operations[i]));
        }
    }
    
    let total = 0;
    for (let i = 0; i < stack.length; i++) {
        total += stack[i];
    }
    
    return total;
};