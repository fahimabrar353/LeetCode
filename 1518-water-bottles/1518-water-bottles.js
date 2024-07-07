var numWaterBottles = function (numBottles, numExchange) {
    var totalBottles = numBottles;
    var emptyBottles = numBottles;

    while (emptyBottles >= numExchange) {
        var exchangedBottles = Math.floor(emptyBottles / numExchange);
        totalBottles += exchangedBottles;
        emptyBottles = exchangedBottles + (emptyBottles % numExchange);
    }

    return totalBottles;
};