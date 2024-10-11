/*
Create a function that takes two objects,
basket and prices as parameters
where basket is a mapping from products (string) to quantities (number)
and prices is a mapping from products(String) to prices (number)
and returns the total cost of the basket
*/

let basket = {
  "apple": 2,
  "banana": 3,
  "orange": 1
};

let prices = {
    "apple": 0.5,
    "banana": 0.7,
    "orange": 0.3
    };

function totlBasketCost(basket, prices) {
  let total = 0;
  for (let product in basket) {
    total += basket[product] * prices[product];
  }
  return total;
}