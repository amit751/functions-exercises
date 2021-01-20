//Question 1
function myReverse(str) {
  let reverse = "";
  for(let i=str.length-1 ; i>-1 ;i--){
    reverse+=str[i];
  }
  return reverse;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  // your code here

  //
  return combinations;
}

//Question 3
function allCaps(str) {
  // your code here
  return "";
}

//Question 4
function myPower(x, n) {
  // your code here
  return "";
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own
console.log( myReverse("aefrt"));
// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
