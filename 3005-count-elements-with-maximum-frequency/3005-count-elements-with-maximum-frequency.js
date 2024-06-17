var maxFrequencyElements = function(nums) {
    const frequencyMap = new Map();

  nums.forEach(num => {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  });

  let maxFrequency = 0;
  frequencyMap.forEach((value) => {
    if (value > maxFrequency) {
      maxFrequency = value;
    }
  });

  let totalMaxFrequency = 0;
  frequencyMap.forEach((value) => {
    if (value === maxFrequency) {
      totalMaxFrequency += value;
    }
  });

  return totalMaxFrequency;
};