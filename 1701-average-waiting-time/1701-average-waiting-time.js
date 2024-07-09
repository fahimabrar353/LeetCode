/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
    let currentTime = 0;
    let totalWaitingTime = 0;

    for (let i = 0; i < customers.length; i++) {
        const [arrival, time] = customers[i];
        if (currentTime < arrival) {
            currentTime = arrival;
        }
        currentTime += time;
        totalWaitingTime += currentTime - arrival;
    }

    return totalWaitingTime / customers.length;
};