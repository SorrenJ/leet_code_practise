/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    
const result = [...arr];

for (let i=0; i < arr.length; i++){
    result[i] = fn(arr[i], i)
}


return result

};


// const fn = function plusone(n) { return n + 1; }

const fn = function plusI(n, i) { return n + i; }

// const fn = function constant() { return 42; }

  console.log(map([1,2,3], fn));
  console.log(map([10,20,30], fn));
   