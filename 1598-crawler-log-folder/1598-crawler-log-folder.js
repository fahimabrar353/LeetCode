var minOperations = function (logs) {
  let min = 0;

  for (let i = 0; i < logs.length; i++) {
    if (logs[i] === "../") {
      if (min > 0) {
        min--;
      }
    } else if (logs[i] !== "./") {
      min++;
    }
  }

  return min;
};