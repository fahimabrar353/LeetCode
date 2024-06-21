var maxSatisfied = function (customers, grumpy, minutes) {
    let n = customers.length;
    let satisfiedCustomers = 0;

    for (let i = 0; i < n; i++) {
        if (grumpy[i] === 0) {
            satisfiedCustomers += customers[i];
        }
    }

    let additionalCustomers = 0;
    let maxAdditionalCustomers = 0;

    for (let i = 0; i < minutes; i++) {
        if (grumpy[i] === 1) {
            additionalCustomers += customers[i];
        }
    }
    maxAdditionalCustomers = additionalCustomers;

    for (let i = minutes; i < n; i++) {
        if (grumpy[i] === 1) {
            additionalCustomers += customers[i];
        }
        if (grumpy[i - minutes] === 1) {
            additionalCustomers -= customers[i - minutes];
        }
        maxAdditionalCustomers = Math.max(maxAdditionalCustomers, additionalCustomers);
    }

    return satisfiedCustomers + maxAdditionalCustomers;
};