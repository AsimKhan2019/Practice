/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0; // the maximum value 
  let i = 0; // starting from the left 
  let j = height.length - 1; // starting from the right 
  let area; // length * width * depth 

  while(i < j) { // i = 0 j = 8 
      area = (j - i) * Math.min(height[i], height[j]); // (8-0) * 1 = 8
      
      max = Math.max(area, max); // area = 8, max = 0, max = 8
      
      height[i] < height[j] ? i++ : j--;
  }
  return max;
};