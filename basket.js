// create a function that takes two objects, basket and prices as parameteres where basket is a mapping from products
// to quantities and prices is a mapping from products to prices. The function should return the total cost of the basket
// as a number.


let basketCost = (basket, prices) => {
    return Object.keys(basket).reduce((total, product) => {
        return total + (basket[product] * (prices[product] || 0));
    }, 0);
    }