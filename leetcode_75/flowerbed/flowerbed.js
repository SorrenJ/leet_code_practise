/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {

    // flowerbed = [ 0, 1, 0 , 1] 1 means flower planeted; 0 means empty
    // n= number of flowers to be planted
    // true -> new flowers can be planted 
    // flowers cannot be planted in adjacent plots
    // lets make a logic to detect if flowers are adjacnet



    // if flowerbed == [0,0,0,0]

    // we ned for loop to iterate through flowerbed

    // inside we need an if statment to detect adacent 1, so we need to track a prev index and the next index
    // so some conditionals of false would be [1,_,1], [1,_,0], [0,_,1], [1,_], [_, 1] -> these seem to be every possible falses?  
    // perhaps we only need to focus on [1,_] , [_,1] these types of conditions, we only need to track the prev or the next

    // now we some way to validate if n fits in with flower bed
    // to do this n can compare each index, if it is 1, skip it, if it is 0 then pass
    // n will act as a counter and would need to push or better, replace a 0 for a 1
    // should n push anywhere in the flowerbed? ideally not, so maybe we can make it try to push at an ideal location if possible
    // it's not really a push tho, its more like replaceing a zero with a one
    // aha! let's try findIndex
    // so after implenting the findIndex how do we decide to make it pass or not?
    // perhaps we can just reuse the logic, if it is not sucessful in finding a vacant spot then it is false
    // hmm so the ultimate decider must be placed at the end so...  how to decide if it all passes?
    // should there be multiple return falses?
    // it passes if the flowerbed finishes iterating and can pass through the flowerbed if condition
    // to achieve this another if conditon to double check for adadacent

    // for (let j = 0; j < n; j++) {

    //     for (let i = 0; i < flowerbed.length; i++) {
    //         // finding a vacant spot not adjacent with 1
    //         if (0 == flowerbed[i - 1] || 0 == flowerbed[i + 1]) {
    //             // find that 0 value
    //             const index = flowerbed.findIndex(flowerbed[i] === 0);
    //             // replace 0 with 1
    //             if (index !== -1) {
    //                 flowerbed[index] = 1;
    //             }

    //         }

    //     }
    // }
    // // double check validation for adjacent
    // for (let i = 0; i < flowerbed.length; i++) {
    //     if (1 === flowerbed[i - 1] || 1 === flowerbed[i + 1]) {
    //         return false;
    //     }
    // }
    // return true;




    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        // Check if the current plot is empty
        if (
            flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) && // Left boundary or no adjacent flower to the left
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) // Right boundary or no adjacent flower to the right
        ) {
            flowerbed[i] = 1; // Plant a flower
            count++; // Increment the count of planted flowers

            if (count >= n) {
                return true; // Return early if we've planted enough flowers
            }

            i++; // Skip the next spot as flowers can't be adjacent
        }
    }

    return count >= n;






};