var minDays = function(bloomDay, m, k) {
    const n = bloomDay.length;
    
    if (m * k > n) return -1;

    let low = Math.min(...bloomDay);
    let high = Math.max(...bloomDay);

    const canMakeBouquets = (days) => {
        let bouquets = 0;
        let flowers = 0;

        for (let i = 0; i < n; i++) {
            if (bloomDay[i] <= days) {
                flowers++;
                if (flowers == k) {
                    bouquets++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }

        return bouquets >= m;
    };

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (canMakeBouquets(mid)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
};