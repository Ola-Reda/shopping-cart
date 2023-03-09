let userName = document.querySelector("#user");
let btnOut = document.querySelector("#log-out");
let check = localStorage.getItem("username");
let cartProducts = document.querySelector(".cart-products");
let cartBox = document.querySelector(".cart-products .products");
let cartLink = document.querySelector(".cart-link");
let badge = document.querySelector(".badge");
//username 
if (check) {
    userName.textContent = check.charAt(0).toUpperCase() + check.slice(1);
};
//logout
btnOut.addEventListener('click', () => {
    window.location = 'login.html'
})


let data = [
    {id:1, title:"perfume", price: 50, imageUrl: "images/12.webp",},
    {id:12, title:"cream", price: 40, imageUrl: "images/product12.jpg"},
    {id:13, title:"watch", price: 200, imageUrl: "images/watch.jpg"},
    {id:2, title:"headphone", price: 80, imageUrl: "images/m.avif",},
    {id:5, title:"skin care", price: 120, imageUrl: "images/1.jpg"},
    {id:6, title:"phone", price: 500, imageUrl: "images/phone.jpg"},
    {id:7, title:"laptop", price: 800, imageUrl: "images/laptop.jpg"},
    {id:8, title:"skin care", price: 100, imageUrl: "images/jjjj.jpg"},
    {id:9, title:"skin care", price: 100, imageUrl: "images/pruple.jpg"},
    {id:10, title:"skin care", price: 90, imageUrl: "images/product14.jpg"},
    {id:11, title:"glasses", price: 100, imageUrl: "images/aa.jpg"},
    {id:3, title:"clothes", price: 200, imageUrl: "images/dd.jpg",},
    {id:4, title:"headphone", price: 70, imageUrl: "images/headphone.jpg"},
    {id:14, title:"clothes", price: 150, imageUrl: "images/jacket.jpg"},
    {id:15, title:"hat", price: 30, imageUrl: "images/hat.jpg"},
    {id:16, title:"camera", price: 200, imageUrl: "images/camera.jpg"},
];

//add item to page
let box = document.querySelector(".row");
function addProducts() {
    let draw = data.map(item => {
    return`
        <div class="col-md-6 col-lg-3">
            <div class="box mb-4">
                <div class="card">
                    <img src="${item.imageUrl}" class="card-img-top" alt="${item.title}">
                    <div class="card-body pb-4">
                        <h5>${item.title}</h5>
                        <p>Price: $${item.price}</p>
                        <a href="#" onclick="getItem(${item.id})">Add To Cart</a>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');
    box.innerHTML = draw;
}
addProducts();

//add products to cart
function getItem(id) {
    let choosenItem = data.find(ele=> id=== ele.id)
    cartBox.innerHTML += `<p>${choosenItem.title}</p>`
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

