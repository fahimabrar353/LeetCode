var getConcatenation = function (nums) {
  var result = [];

  for (var i = 0; i < nums.length * 2; i++) {
    result.push(nums[i % nums.length]);
  }

  return result;
};
