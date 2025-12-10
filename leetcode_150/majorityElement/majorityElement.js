/*

we need to detect if the occurences of num[i] is > n /2 

we use a counter to count how many ocurrences for each type of num

we need to specify the different nums contained in the array

how do we distinguish the different numbers?

we push the numbers into a new array and we can use !includes to see if the number is already included

after this we iterate through the new array against nums arrays to count

then use nums.length / 2 to determine if the count is more than half


A majority element is defined as an element that appears more than half the time in the array.

Mathematical Explanation:
nums.length = total number of elements in the array

nums.length / 2 = exactly half of the elements

count > nums.length / 2 = the element appears more than half of the time




*/


var majorityElement = function(nums) {



const distinctNums = nums.filter((value, index, array) => {
    return array.indexOf (value) === index;

});

console.log(distinctNums);

    for (let j = 0; j < distinctNums.length; j++ ) {
        let count = 0;   
      
        for (let i = 0; i < nums.length; i++) {
            if (distinctNums[j] === nums[i]){
   // console.log(nums[i]);
                count++;
        }

    }

    if (count > nums.length /2 ) {
        return distinctNums[j];
    }
}

};

console.log(majorityElement([3,2,3]));

console.log(majorityElement([2,2,1,1,1,2,2]));