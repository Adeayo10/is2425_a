/*
Create a function that takes two objects,
basket and prices as parameters
where basket is a mapping from products (string) to quantities (number)
and prices is a mapping from products(String) to prices (number)
and returns the total cost of the basket
*/

basket = { apple: 2, banana: 3, cherry: 5 };
prices = { apple: 0.5, banana: 0.8, cherry: 0.2 };

function totalBasketCost(basket, prices) {
  let total = 0;
  for (let product in basket) {
    total += basket[product] * prices[product];
  }
  return total;
}
