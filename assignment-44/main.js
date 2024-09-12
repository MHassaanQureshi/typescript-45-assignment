function Order(toppings) {
    console.log("Customer ordered a sandwich with following toppings ".concat(toppings));
}
var topping = ["chicken", "lettuce", "tomato", "onion"];
var topping2 = ["chicken", "lettuce"];
var topping3 = ["chicken", "lettuce", "cucumber"];
Order(topping);
Order(topping2);
Order(topping3);
