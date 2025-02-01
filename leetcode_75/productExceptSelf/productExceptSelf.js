/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
/*

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]


this problem seem kinda confusing

from my understanding:

so i need to make the input equal the product of all elements  of nums except nums[i]

what is nums[i]?

its the pointer but idk


example 1

so I'm guessing nums[i] is 3 since [1,2,3,4] 4 = nums[3]

 24 = 1 * 2 * 3 * 4 

 12 = 1 * 3 * 4

 8 = 1 * 2 * 4

 6 = 1 * 2 * 3
 
 4 would be an exception so 4 = 1 * 4 would not be valid


 example 2

    Input: [-1,1,0,-3, 3]

    Output: [0,0,9,0,0]

    the excpetion would be: 3 = nums [4]

    0 = -1 * 1 * 0 * -3 * 3

    0 =  1 * 0 * -3 * 3

    9 = -1 * -3 * 3

    0 =  0 * -3 * 3

    0 = 0 * -3

    so 3 = 1 * 3 or  3 = -1 * 1 * 3 wouldnt be valid

idk know what they mean by  The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer




*/






let multiples = nums.length;

let productSeries =  new Array(multiples).fill(1); // [1,1,1,1,1 ...]

let prefix = 1;

for (let i = 0; i < multiples; i++){

    productSeries[i] = prefix;
    console.log(prefix);
        prefix *= nums[i]; // multiplies prefx by num[i] each iteration, increase

        console.log("Prefix at index", i, ":", prefix);
}
console.log(productSeries); // prints out old array from prefix loop

let suffix = 1;

for (let j = multiples -1; j >= 0; j--){ // start at the last element
    productSeries[j] *= suffix; // multiplies current porductSeries with suffix each iteration
    suffix *= nums[j]; // fter multiplying with productSeries multiplies current porductSeries with suffix each iteration

    console.log("Suffix at index", j, ":", suffix);
}


 return productSeries;
};


// return productSeries;




console.log(productExceptSelf([1,2,3,4]));