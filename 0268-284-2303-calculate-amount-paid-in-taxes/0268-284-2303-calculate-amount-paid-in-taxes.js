var calculateTax = function(brackets, income) {
    let totalTax = 0;
    let previousUpper = 0;

    for (const [upper, percent] of brackets) {
        const taxableIncome = Math.min(income, upper) - previousUpper;
        if (taxableIncome > 0) {
            totalTax += (taxableIncome * percent) / 100;
        }
        previousUpper = upper;
        if (income <= upper) {
            break;
        }
    }

    return totalTax;
};
