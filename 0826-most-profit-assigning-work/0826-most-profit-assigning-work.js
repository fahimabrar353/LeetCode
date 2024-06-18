/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
    let jobs = difficulty.map((diff, i) => [diff, profit[i]]);
    jobs.sort((a, b) => a[0] - b[0]);

    worker.sort((a, b) => a - b);

    let maxProfit = 0;
    let totalProfit = 0;
    let i = 0;

    for (let ability of worker) {
        while (i < jobs.length && jobs[i][0] <= ability) {
            maxProfit = Math.max(maxProfit, jobs[i][1]);
            i++;
        }
        totalProfit += maxProfit;
    }

    return totalProfit;
};