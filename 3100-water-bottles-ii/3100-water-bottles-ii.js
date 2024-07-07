var maxBottlesDrunk = function (numBottles, numExchange) {
    let maxBottle = numBottles;
    while (numBottles >= numExchange) {
        numBottles -= numExchange;
        ++numExchange;
        ++maxBottle;
        ++numBottles;
    }
    return maxBottle;
}