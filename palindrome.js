/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let count = 0;
  for(let i =0; i < s.length; i += 1) {
      palindrome(s, i, i); //finding all the single number lengths
      palindrome(s, i, i+1); // finding all the even number lengths
  }
  return count;
  
  function palindrome(s, low, high) {
      while ( low >= 0 && high <= s.length && s[low] === s[high]) {
          count += 1;
          low -= 1;
          high += 1;
      }
  }
};

/*
count variable here 
Loop thorugh the elements of the array 
look for their length 
look for their length if they are even 
string check for their lows and their highs 

a recursive function that will make the calls 

*/