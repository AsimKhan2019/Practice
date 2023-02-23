// /**
//  * @param {string} word
//  * @return {boolean}
//  */
// var detectCapitalUse = function(word) {
//     let capCount = 0; 
//     let smallCount = 0;

//     for(let i = 0; i < word.length; i++) {
//         let char = word.charAt(i);
//         if(word.charAt(i) === word.charAt(i).toUpperCase()) {
//             capCount++;
//         }
//         else if(word.charAt(i) === word.charAt(i).toLowerCase()) {
//             smallCount++;
//         }
//     }
//     if(smallCount === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// };

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let count = 0;
  for (var i = 0; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) {
          count++;
      }
  }
  if (count === word.length || count === 0) {
      return true;
  } else if (count === 1 && word[0] === word[0].toUpperCase()) {
      return true;
  }
  return false;
};
