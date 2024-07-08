var findTheWinner = function (n, k) {
    let friends = [];
    for (let i = 1; i <= n; i++) {
        friends.push(i);
    }
    
    let currentIndex = 0;

    while (friends.length > 1) {
        currentIndex = (currentIndex + k - 1) % friends.length;
        friends.splice(currentIndex, 1);
    }

    return friends[0];
};