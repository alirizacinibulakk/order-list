const productList = ["Elma","Armut","Kavun", "Karpuz", "Porti", "Üzüm"]
const orderList = [];
const products = document.querySelector(".products");
const orders = document.querySelector(".orders");
const productBtn = document.querySelectorAll(".productBtn");

function init(){
    for (const product of productList) {
        products.innerHTML += 
        `
        <button class= "productBtn">${product}</button>
        `
    }
    const productBtns = document.querySelectorAll(".productBtn");
    for (const btn of productBtns) {
        btn.addEventListener("click", addToOrder)
    }
}
init();

function renderAtOrders(){
    orders.innerHTML = "";
    for (const order of orderList) {
        orders.innerHTML += 
        `
        <li>${order.fruitName} x ${order.count}</li>
        `
    }
}

function addToOrder(){
    const fruitIndex = orderList.findIndex(order => order.fruitName == this.innerText);
    if(fruitIndex > -1){
        
        orderList[fruitIndex].count = orderList[fruitIndex].count + 1; 
    } else{
        orderList.push({
            fruitName: this.innerText,
            count: 1
        });
    }
    renderAtOrders();
}

