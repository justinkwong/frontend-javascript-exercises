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


module.exports.checkLock = function(e1, e2, e3, e4) {
  if (
      (e1 === 3 || e1 === 5 || e1 === 7 ) &&
      (e2 === 2) &&
      (e3 <= 100 && e3 >= 5) &&
      (e4 < 9 || e4 > 20)
     ){
      return 'correct';
      }
  else {
    return 'incorrect';
       }
};

module.exports.canIGet = function(item, money) {
  if ((item === 'MacBook Air' && money >= 999) ||
     (item === 'MacBook Pro' && money >= 1299) ||
     (item === 'Mac Pro' && money >= 2499) ||
     (item === 'Apple Sticker' && money >= 1)) {
        return true
    }
  else {
    return false
  }
};


