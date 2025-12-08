

/* 

we need to make a formula to detect chepest buy and greatest sell

greatest sell cannot be the 1st index


for loop iterate through costs

first step detect chepest buy, if statement

inner loop find greatest sell, cannot be 1st index or day

out put the index number


return the index number


*/



var maxProfit = function(prices) {
 
let cheapestBuy = 99;
let greatestSell = -1;
let bestSellDay = 0;

for (let i = 0; i < prices.length; i++) {



    if ( prices[i] < cheapestBuy) {

        cheapestBuy = prices[i];

        // console.log(prices[prices.length -1]);
    if (cheapestBuy === prices[prices.length -1]){
        return 0;

    }

for (let j = 0; j < prices.length; j++){
       
        if (j !== 0 &&  prices[j] > greatestSell) {

            greatestSell = prices[j];
            
            bestSellDay = j + 1;
            
        }
        
    }
    
}
 
}
// console.log(cheapestBuy);
// console.log(greatestSell);
return bestSellDay;
};

// console.log(maxProfit([7,1,5,3,6,4]));

console.log(maxProfit([7,6,4,3,1]));