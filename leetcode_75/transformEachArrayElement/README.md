# Apply Transform Over Each Element in Array

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.


Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
 

Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109
fn returns an integer.


# My Solution

We are bascially creating our own `Array.map` built method, where each item in the array is affected by a function. It would have looked something like this with `.map`:

```js

returnedArray = arr.map(fn,i);

```


Let's look at the returned array we would be making.

```js
returnedArray[i] = fn(arr[i], i)
```

`returnedArray[i]` - This takes each element value from the new array

`fn(...)` - This would be the function running for each element value

`arr[i], i` - These are the given parameters for the function: fn, where `arr[i]` is each value of the original array, and `i` is the indices which could act as a counter


Since we are creating our own version of `.map` we need a way to iterate. We could use a `for loop`, but first let's create a new array:

```js
const result = [...arr];

```

Using the spread operator: `[...arr]` we create a shallow copy of the original, which is unmutable.

Now let's create the `for loop` as previuosly discussed.


```js

for (let i=0; i < arr.length; i++){
    result[i] = fn(arr[i], i)
}

```

We iterate through the original array, and for each `i` iteration the function `fn` is applied. As a result we output the new array with `fn` applied to each array element.




