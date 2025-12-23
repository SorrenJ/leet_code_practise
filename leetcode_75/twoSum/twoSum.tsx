function twoSumTypescript(nums: number[], target: number): number[] {
    if (!nums || nums.length < 2) {
        return [];
    }
    
    for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            const num2 = nums[j];
            if (num1 + num2 === target) {
                return [i, j];
            }
        }
    }
    
    return [];
}

console.log(twoSumTypescript([2, 7, 11, 15], 9));