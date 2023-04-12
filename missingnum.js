/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) { // [3,0,1]
  let res = nums.length; // the length of the array 
  for(let i in nums) { // 
      res += i - nums[i]; // 3 += 0 - 3 => 0, 
      // 3 += 1 - 0 => 4, 
      // 3 += 2 - 1 => 3
  }
  return res;
};