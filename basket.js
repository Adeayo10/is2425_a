/*
Create a function that takes two objects,
basket and prices as parameters
where basket is a mapping from products (string) to quantities (number)
and prices is a mapping from products(String) to prices (number)
and returns the total cost of the basket
*/

function calculateTotalCost(basket, prices) {
    let totalCost = 0;
    for (const product in basket) {
        if (basket.hasOwnProperty(product) && prices.hasOwnProperty(product)) {
            totalCost += basket[product] * prices[product];
        }
    }
    return totalCost;
}
