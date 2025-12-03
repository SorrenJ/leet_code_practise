var merge = function(nums1, m, nums2, n) {
    let newNums1 = [];
    let newNums2 = [];

    for(let i = 0; i < nums1.length; i++) {
        if (i < m) {
            newNums1.push(nums1[i])
       }   
    }
console.log(newNums1);
        for(let i = 0; i < nums2.length; i++) {
        if (i < n) {
            newNums2.push(nums2[i])
       }   
    }

    console.log(newNums2);
let combined = [...newNums1, ...newNums2];


 combined.sort((newNums1,newNums2) => newNums1 - newNums2);
console.log(combined);

 // Copy back to nums1
    for(let i = 0; i < combined.length; i++) {
        nums1[i] = combined[i];
    }

};


console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));