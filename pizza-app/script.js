const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9}
]

let cashInRegister = 100;
let orderQueue = [];

function addNewPizza (pizzaObj){
    menu.push(pizzaObj);
    console.log(`new menu item: ${pizzaObj}`);
}

let orderId = 1;

function placeOrder (name){
    const orderedPizza = menu.find(pizzaObj => pizzaObj.name === name);
    pizzaPrice = orderedPizza.price;
     cashInRegister += pizzaPrice;
    const newOrder = {id: orderId++, pizza: orderedPizza, status: "ordered"};
    orderQueue.push(newOrder);
    console.log(`New placeOrder: ${name}`);
    return newOrder;
}


function completeOrder(orderId){
    order = orderQueue.find(n => n.pizza === orderId);
    order.status = "completed";
    console.log(`${orderId} completed`);
    return order; 
}

addNewPizza({name: "Chicken Bacon Ranch", cost: 12});
addNewPizza({name: "BBQ", cost: 12});
addNewPizza({name: "Spicy Sausage", cost: 12});
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
