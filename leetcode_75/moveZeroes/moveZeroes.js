

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
    

// for loop to iterate and look for 0 or use .include(0)
// easy way to push the non- zeroes into a new empty array and have the zeroes at the end
//Note that you must do this in-place without making a copy of the array.

// how to plaze zereos in end without making copy



// track the last array element

// last = nums[nums.length]

// for (let i = 0; i < nums.length; i++)

//modify nums, change the index for each element

// if nums[i] === 0

// i = nums.length


/*

but what happens to the other zeroes or the other original numbers at that position?



*/


// splice(start, deleteCount, item1)

// find those zeroes


for (let i = 0; i < nums.length; i++) {

    if (nums[i] === 0) {
    //    console.log(`A Zero has been spotted at indices: ${[i]} `)      
        let zeroPos = i;
        nums.splice(zeroPos,1);
        nums.splice(nums.length,0,0)
}
}

return nums;

};

console.log("Original: [0,1,0,3,12] After:", moveZeroes([0,1,0,3,12]));

console.log("Original: [0] After:", moveZeroes([0]));

/*

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

*/