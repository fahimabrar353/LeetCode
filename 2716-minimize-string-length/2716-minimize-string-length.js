var minimizedStringLength = function (s) {
  var uniqueChars = [];

  for (var i = 0; i < s.length; i++) {
    if (uniqueChars.indexOf(s[i]) === -1) {
      uniqueChars.push(s[i]);
    }
  }

  return uniqueChars.length;
};
