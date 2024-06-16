var divide = function (dividend, divisor) {
    const MAX_INT = 2 ** 31 - 1;
    const MIN_INT = -(2 ** 31);

    if (divisor === 0) throw new Error("Divisor cannot be 0");
    if (dividend === 0) return 0;
    if (dividend === MIN_INT && divisor === -1) return MAX_INT;
    if (dividend === MIN_INT && divisor === 1) return MIN_INT;

    const negative = (dividend < 0) !== (divisor < 0);

    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);

    let quotient = 0;

    for (let i = 31; i >= 0; i--) {
        if ((absDividend >>> i) >= absDivisor) {
            quotient += 1 << i;
            absDividend -= absDivisor << i;
        }
    }

    if (negative) quotient = -quotient;

    return Math.min(Math.max(quotient, MIN_INT), MAX_INT);
};
