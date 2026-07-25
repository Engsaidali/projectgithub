// basic shopping cart functionality
// Cart array
let cart = [];

// Add product to cart
function addCart(productName, price) {

    let product = {git lo
        name: productName,
        price: price
    };
S
    cart.push(product);

    showCart();
}


// Show cart items
function showCart() {

    let cartList = document.getElementById("cartList");
    let total = document.getElementById("total");

    cartList.innerHTML = "";

    let totalPrice = 0;


    cart.forEach(function(item){

        let li = document.createElement("li");

        li.innerHTML = item.name + " - $" + item.price;

        cartList.appendChild(li);


        totalPrice += item.price;

    });


    total.innerHTML = totalPrice;

}


// Remove all products
function clearCart(){

    cart = [];

    showCart();

}