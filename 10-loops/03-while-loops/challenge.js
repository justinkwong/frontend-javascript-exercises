
module.exports.stream = function(conditionalFn, actionFn) {
  while (conditionalFn()) {
    actionFn();
  }
};
 

module.exports.sumNumbers = function(array) {
  var addNumbers = 0;
  while (array.length > 0) {
        addNumbers+=array.pop();
  }
  return addNumbers;
};