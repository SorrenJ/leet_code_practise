# Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
The input is generated such that a majority element will exist in the array.
 

Follow-up: Could you solve the problem in linear time and in O(1) space?


# JS solution

First we need to specify the different nums contained in the array

how do we distinguish the different numbers?

we use filter() to create new array and remove any duplicates


``` js
const distinctNums = nums.filter((value, index, array) => {
    return array.indexOf (value) === index;
});
```

filter() creates a new array with elements that pass a test

It takes a callback function with 3 parameters:

value: the current element being processed

index: the current index of the element

array: the original array being processed




``` js
 return array.indexOf (value) === index;
```
We remove duplicates by using the return. `array.indexOf(value)` always returns the FIRST index where that value appears

``` js
    for (let j = 0; j < distinctNums.length; j++ ) {
        let count = 0;   
      
        for (let i = 0; i < nums.length; i++) {
            if (distinctNums[j] === nums[i]){
                count++;
        }
    }
}
```


after this we iterate through the new array against nums arrays to count


``` js
    if (count > nums.length /2 ) {
        return distinctNums[j];
    }
```

then use nums.length / 2 to determine if the count is more than half

A majority element is defined as an element that appears more than half the time in the array.

Mathematical Explanation:
nums.length = total number of elements in the array

nums.length / 2 = exactly half of the elements

count > nums.length / 2 = the element appears more than half of the time