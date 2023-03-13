let cartProducts = document.querySelector(".cart-products");
let cartBox = document.querySelector(".cart-products .products");
let cartLink = document.querySelector(".cart-link");
let badge = document.querySelector(".badge");

//add item to page
let box = document.querySelector(".row");
function addProducts() {
    let draw = data.map(item => {
    return`
        <div class="col-md-6 col-lg-3">
            <div class="box mb-4">
                <div class="card border-0">
                    <a href="productDetails.html">
                        <img src="${item.imageUrl}" class="card-img-top" alt="${item.title}">
                    </a>
                    <div class="card-body pb-4">
                        <h5>${item.title}</h5>
                        <div class="mb-2 d-flex align-items-center justify-content-between">
                            <p>Price: $${item.price}</p>
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <a class="adding" href="#" onclick="getItem(${item.id})">Add To Cart</a>
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');
    box.innerHTML = draw;
}
addProducts();

//add products to cart
let addedItems = window.localStorage.getItem('products')? JSON.parse(window.localStorage.getItem('products')) : [];
if(addedItems) {
    addedItems.map((item)=>{
        cartBox.innerHTML += `<p>${item.title}</p>`
    })
    badge.innerHTML += addedItems.length
}
function getItem(id) {
    let choosenItem = data.find(ele=> id=== ele.id)
    cartBox.innerHTML += `<p>${choosenItem.title}</p>`
    addedItems = [...addedItems, choosenItem];
    window.localStorage.setItem('products', JSON.stringify(addedItems))
    let cartProducts = document.querySelectorAll('.cart-products .products p')
    badge.innerHTML = cartProducts.length 
}

//show cartMenu
cartLink.addEventListener('click', openCartMenu);
function openCartMenu() {
    if(cartBox.innerHTML !== ''){
        cartProducts.classList.toggle('active')
    }
}

