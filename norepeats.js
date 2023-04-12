function permAlone(str) {
  var arr = str.split("");
  var reg = /(.)\1+/; //regexp for repeating characters
  var perms = 0;
  //recursive function swaps elements of an array from indexFrom position to indexTo position
  //and then proceeds to do so starting from indexTo+1 position and so on till the end of an array is reached
  function swap(indexFrom, indexTo, arr) {
    //check if the position is last, meaning we have reached the end of the array(permutation instance)
    if (indexTo==arr.length-1) {
      var enterStr = arr.join("");
      if (!reg.test(enterStr))
      perms++;} // increment counter if no repeats
    else {
    var newArr = [];//newArr(copy of arr) is needed so that not to modify the original one, as next calls of swap() need it
    for (var i=0; i<arr.length; i++) {
      newArr.push(arr[i]);
    }
    var temp = newArr[indexFrom];
    newArr[indexFrom] = newArr[indexTo];
    newArr[indexTo] = temp;
    
    for (i =indexTo+1; i< arr.length; i++)
     {
      swap(i,indexTo+1, newArr);
     }
   }
  }
//start recursion
    for (var i =0; i< arr.length; i++)
     {
        swap(i,0, arr);
       }
       
  return perms;
}