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
  
//minor function
  function print(str){
    let out="";
    for( let i=0 ; i< str.length; i++){
        out+= str[i];
        combinations.push(out);
        
    }
  }
  let combinations = [];
  let work=str;
    for(let i=0 ; i< str.length; i++){
        work=str.slice(i);
        print(work);
    }

  return combinations;
}

//Question 3
function allCaps(str) {
  let arr = str.split(" ");
  arrUp = [];
  for( let i=0 ; i< arr.length ; i++){
    arrUp.push(firstUp(arr[i]));
  }
  
  return arrUp.join(" ") ;
  //minor function capitalize the firs letter  of a sring
  function firstUp (str){
    let up = str.slice(0, 1);
    up = up.toUpperCase();
    for( let i=1; i< str.length; i++){
      up+=str[i];
    }
    return up;
  }

}

//Question 4
function myPower(x, n) {
  for(let i=0 ; i<n-1 ; i++ ){
    x*=x

  }
  return x;
}

//Question 5
function getFirstNotRepeating(str) {
  let arr = str.split("");
  let check;
  for( let i=0; i<arr.length ; i++){
      check=arr.shift();
      if(!arr.includes(check)){
          arr.unshift(check);
          return check;
      
      }else{
          arr.push(check);
      }
  
  }
  // return "all letters repet";
}
  

//Question 6 (Bonus)
function isPrefectNumber(num) {
  let divisors=[];
  for(let i =0 ; i<num ; i++){
    if(num%i===0){
      divisors.push(i);
    }
  }
  let sum=0;
  for (let j = 0; j < divisors.length; j++){
    sum+=divisors[j];
  }
  return(sum===num);
 
  
}

// *** Playground ***
// Feel free to run and test your code here on your own
console.log( isPrefectNumber(6));
// console.log( 678);

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
