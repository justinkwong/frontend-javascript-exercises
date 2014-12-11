module.exports.favoriteNumber = function(fav, guess) {
  if (guess > fav) {
    return "Too high";
  }
  else if (guess < fav ) {
    return "Too low";
  }
  else if (guess === fav) {
    return "You got it!";
  }
};

module.exports.checkLock = function(a, b, c, d) {
  if ((a === 3 || a === 5 || a === 7)) && (b === 2) && (5 <= c =< 100) && (9 < d < 20) {
    return "correct";
  }
  else {
    return "incorrect";
  }
};

module.exports.canIGet = function(item, money) {
  if ((item === "MacBook Air" && (money > 999)) || (item === "Macbook Pro" && (money > 1299)) || (item = "Mac Pro" && (money > 2499)) || (item = "Apple Sticker" && (money > 1))) {
    return "true";
  }
  else {
    return "false";
  }
};

