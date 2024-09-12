function Order(toppings:string[]){
    console.log(`Customer ordered a sandwich with following toppings ${toppings}`)
}
let topping:string[]= ["chicken","lettuce","tomato","onion"]
let topping2:string[]= ["chicken","lettuce"]
let topping3:string[]= ["chicken","lettuce","cucumber"]
Order(topping)
Order(topping2)
Order(topping3)