// create a function that takes two objects, basket and prices as parameteres where basket is a mapping from products
// to quantities and prices is a mapping from products to prices. The function should return the total cost of the basket
// as a number.


function calculateTotalCost(basket, prices) {
    let totalCost = 0;
    for (const product in basket) {
        if (basket.hasOwnProperty(product) && prices.hasOwnProperty(product)) {
            totalCost += basket[product] * prices[product];
        }
    }
    return totalCost;
}