var removeDuplicates = function(nums) {
    let j = 1;
   for (let i = 1; i < nums.length; i++) {
            if (nums[i] != nums[i - 1]) {
                nums[j] = nums[i];
                console.log(`Moved ${nums[i]} to position ${j}`);
                j++; 
            }
   }

    console.log("Final array (first", j, "elements):", nums.slice(0, j));
    console.log("Full array after processing:", nums);
   return j;

};

//console.log(removeDuplicates([1,1,2]));
// console.log(removeDuplicates([1,1,2,2,3,4,4]));


removeDuplicates([1,1,2,2,3,4,4]);