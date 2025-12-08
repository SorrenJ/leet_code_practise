var maxProfit = function(prices) {
    let cheapestBuy = Infinity;
    let maxProfit = 0;
    let cheapestBuyIndex = -1;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < cheapestBuy) {
            cheapestBuy = prices[i];
            cheapestBuyIndex = i;
        }
    }
    
    // If cheapest buy is on the last day, can't sell after buying
    if (cheapestBuyIndex === prices.length - 1) {
        return 0;
    }
    
    // Find highest price after the cheapest buy day
    for (let j = cheapestBuyIndex + 1; j < prices.length; j++) {
        if (prices[j] - cheapestBuy > maxProfit) {
            maxProfit = prices[j] - cheapestBuy;
        }
    }
    
    return maxProfit;
};

// Test cases:
console.log(maxProfit([1,2]));     // Output: 1
console.log(maxProfit([7,1,5,3,6,4])); // Output: 5
console.log(maxProfit([7,6,4,3,1]));   // Output: 0
console.log(maxProfit([3,2,1,2,3]));   // Output: 2