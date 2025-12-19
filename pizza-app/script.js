const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9}
]

const cashInRegister = 100;
const orderQueue = [];

function addNewPizza (pizzaObj){
    menu.push(pizzaObj);
    console.log(`new menu item: ${pizzaObj}`);
}

function placeOrder (name){
    const orderedPizza = menu.find(pizzaObj => pizzaObj.name === name);
    pizzaPrice = orderedPizza.price;
     cashInRegister += pizzaPrice;
    const newOrder = {pizza: orderedPizza, status: "ordered"};
    orderQueue.push(newOrder);
    console.log(`New placeOrder: ${name}`);
    return newOrder;
}
