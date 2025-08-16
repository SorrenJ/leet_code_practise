

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let lastNonZero = 0;

  // Move all non-zeroes forward
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[lastNonZero], nums[i]] = [nums[i], nums[lastNonZero]];
      lastNonZero++;
    }
  }
  return nums;
};

console.log("Original: [0,1,0,3,12] After:", moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log("Original: [0,0,1] After:", moveZeroes([0,0,1])); // [1,0,0]
console.log("Original: [0] After:", moveZeroes([0])); // [0]

/*

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]


var moveZeroes = function(nums) {

for (let i = 0; i < nums.length; i++) {

    if (nums[i] === 0) {
    //    console.log(`A Zero has been spotted at indices: ${[i]} `)      
        let zeroPos = i;
        nums.splice(zeroPos,1);
        nums.splice(nums.length,0,0)
}
}

return nums;


Your case [0,0,1] isn’t working because when you splice while looping forward, the array elements shift left and 
you skip checking some indexes.

Here’s what happens step-by-step for [0,0,1] in your code:

i = 0 → detects 0 → removes it → array becomes [0,1] → pushes 0 to end → [0,1,0].

Loop increments i to 1 → skips checking the new 0 that just shifted into index 0.

Ends with [0,1,0] instead of [1,0,0].



Initial array
[0, 0, 1]
 i


i = 0, nums[i] === 0 → remove it and push 0.

splice(0,1) → [0,1]

push(0) → [0,1,0]

[0, 1, 0]
    i

After first iteration

Now i increments to 1.

[0, 1, 0]
    i


At index 1 → value = 1 (not zero).
👉 Notice the new zero at index 0 was skipped because loop moved forward.

Next iteration
[0, 1, 0]
       i


At index 2 → value = 0.

Remove it → [0,1]

Push 0 → [0,1,0]

[0, 1, 0]
          i (loop ends)

Final Result
[0, 1, 0]


❌ Wrong → expected [1, 0, 0].

✅ Why this happens:
Each splice(i, 1) shifts the array left, so the loop skips checking the element that slides into position i.

*/