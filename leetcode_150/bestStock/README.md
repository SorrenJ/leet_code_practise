# Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104


## javaScript Solution

``` js
} else if (prices[i] - minPrice > maxProfit) {
    maxProfit = prices[i] - minPrice;
}

```

Profit = Selling Price - Buying Price

prices[i] = current price (potential selling price)

minPrice = lowest price seen so far (potential buying price)

prices[i] - minPrice = profit if you bought at the lowest historical price and sold today

Example:

If you bought a stock at $2 (minPrice)

And sell it today at $4 (prices[i])

Your profit is: $4 - $2 = $2

The algorithm is essentially asking at each day:

"If I had bought at the cheapest price I've seen so far and sold today, how much profit would I make?"

It then keeps track of the maximum of these daily calculations.


What it does:

prices[i] - minPrice → Calculates the profit if we:

Bought at the lowest price seen so far (minPrice)

Sold at the current day's price (prices[i])

> maxProfit → Checks if this calculated profit is greater than our previously recorded maximum profit

maxProfit = prices[i] - minPrice; → If yes, updates our maximum profit to this new higher value

Example with [2,4,1]:

Day 1: minPrice = 2, maxProfit = 0

Day 2: Price = 4

prices[i] - minPrice = 4 - 2 = 2

2 > 0? YES

So maxProfit = 2

Day 3: Price = 1

1 < minPrice (1 < 2)? YES → updates minPrice = 1

Note: We don't calculate profit here because it's an if-else chain!

Why else if is important:

The condition checks: if (price < minPrice) FIRST

Only if price is NOT lower than minPrice, it calculates profit

This prevents calculating profit on the same day we bought (can't buy and sell same day)


Visual

```
For each price:
    │
    ▼
Is price < minPrice? ──YES──→ Update minPrice
    │ NO
    ▼
Calculate potential profit
    │
    ▼
Is profit > maxProfit? ──YES──→ Update maxProfit
    │ NO
    ▼
Continue to next price

```