
var removeElement = function(nums, val) {
    



// k = how many deletions
const originalLength = nums.length;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        }
    }
const k = originalLength - nums.length;

    return [k, nums];


};


console.log(removeElement([3,2,2,3], 3));