# Product Except Self

So this problem I was a bit confused at first but we are basically taking the number from nums and making products out of them.  However there is a caveat, we must make sure the product doesn't equal the `nums[i]` .  

This is actually simple, all this means is that nums is independent from the result, as it's own array. We do this by having two loops, the prefix and suffix . 

But first lets dicuss a few variables first.


## Container Variables

```
let multiples = nums.length;

```
We will use `multiples` as a limiter for our iterations. We will use this for all our loops.
```
let productSeries =  new Array(multiples).fill(1); // [1,1,1,1,1 ...]

```
This will be our array full of 1s , to use for multiplying with our prefix and suffix. We couldn't leave this as `[]` or 0s  since it just becomes 0.

## Prefix Loop

For the prefix, the product is calculated before i. This means that `nums[i]` is not included in `productSeries[]`  because we update `prefix` after assigning it.

We update `prefix` only after storing it, so `nums[i] `  isn't included

```
let prefix = 1;
for (let i = 0; i < multiples; i++) {
    productSeries[i] = prefix;  // Store the product before nums[i]
    prefix *= nums[i];          // Update prefix for next index
}
```
Here is what we get:

```
nums:       [1,  2,  3,  4]
prefix:      1   1   2   6
productSeries (so far):  [1, 1, 2, 6]

```
`productSeries[i] ` only contains the product of elements before` nums[i]`


## Suffix Loop

For Suffix, `productSeries[i]` multiplies everything after `i`.  In otherwords, the result of this loop is the product of all elements after index `i`.

```
let suffix = 1;
for (let i = multiples - 1; i >= 0; i--) {
    productSeries[i] *= suffix;  // Multiply with suffix (product after `i`)
    suffix *= nums[i];           // Update suffix for next index
}
```

Here is what we get:

```
nums:       [1,  2,  3,  4]
suffix:      24  12  4   1
productSeries (final): [24, 12, 8, 6]

```

`productSeries[i]` contains prefix product × suffix product, excluding `nums[i]`
