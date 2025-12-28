type Pizza = {
    name: string
    price: number
}

const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9}
]

let cashInRegister: number = 100;
let orderQueue = [];

function addNewPizza (pizzaObj: Pizza){
    menu.push(pizzaObj);
    console.log(`new menu item: ${pizzaObj}`);
}

let orderId: number = 1;

function placeOrder (name: string){
    const orderedPizza = menu.find(pizzaObj => pizzaObj.name === name);
    if(!orderedPizza){
        console.error(`${name} does not exist in the menu`)
        return
    }
   let pizzaPrice: number = orderedPizza.price;
     cashInRegister += pizzaPrice;
    const newOrder = {id: orderId++, pizza: orderedPizza, status: "ordered"};
    orderQueue.push(newOrder);
    console.log(`New placeOrder: ${name}`);
    return newOrder;
}


function completeOrder(orderId: number){
   const order = orderQueue.find(n => n.pizza === orderId);
    order.status = "completed";
    console.log(`${orderId} completed`);
    return order; 
}

addNewPizza({name: "Chicken Bacon Ranch", price: 12});
addNewPizza({name: "BBQ", price: 12});
addNewPizza({name: "Spicy Sausage", price: 12});
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
