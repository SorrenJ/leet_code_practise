var removeElement = function(nums, val) {
    let k = 0;  // Pointer for where to place non-val elements
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];  // Move non-val to front
            k++;  // Increment count
        }
    }
    
    return k;  // Return COUNT, not array
};

console.log(removeElement([3,2,2,3], 3))