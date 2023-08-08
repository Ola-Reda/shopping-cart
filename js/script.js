let cartProducts = document.querySelector(".cart-products");
let cartBox = document.querySelector(".cart-products .products");
let cartLink = document.querySelector(".cart-link");
let badge = document.querySelector(".badge");


//get items to page
let box = document.querySelector("main .row");
let addProducts = function (data) {
    let draw = ''
    data.map(item => {
    draw += `
        <div class="col-md-6 col-lg-3">
            <div class="box mb-4">
                <div class="card border-0">
                    <a onclick="showItemDetails(${item.id})">
                        <img src="${item.imageUrl}" class="card-img-top" alt="${item.title}">
                    </a>
                    <div class="card-body pb-4">
                        <h5>${item.title}</h5>
                        <p>Price: $${item.price}</p>
                        <button class="adding" href="#" onclick="addItem(${item.id})">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>`;
    });
    box.innerHTML = draw;
}
addProducts(data);


//add productsItems to cart
let addedItems = window.localStorage.getItem('productsItems')? JSON.parse(window.localStorage.getItem('productsItems')) : [];
if(addedItems) {
    addedItems.map((item)=>{
        cartBox.innerHTML += `<p>${item.title} ${item.amount}</p>`
    })
    badge.innerHTML += addedItems.length
}
let updatedItems = [];
function addItem(id) {
    let choosenItem = data.find(ele=> id === ele.id);
    let item = updatedItems.find(item=> item.id === choosenItem.id)
    if(item){
        choosenItem.amount += 1
    }else {
        updatedItems.push(choosenItem)
    }
    cartBox.innerHTML = ""
    updatedItems.forEach((item)=> {
        cartBox.innerHTML += `<p>${item.title} ${item.amount}</p>`
    })
    addedItems = [...addedItems, choosenItem];
    let UniqueItems = getUniqueItem(addedItems, id)
    window.localStorage.setItem('productsItems', JSON.stringify(UniqueItems))
    let cartProductsItems = document.querySelectorAll('.cart-products .products p')
    badge.innerHTML = cartProductsItems.length; 
    
}

//not to repeat item
function getUniqueItem(array, id) {
    let uniqueItem = array.map(item=> item.id).map((ele, index, arr)=> {return arr.indexOf(ele) == index && index})
    .filter(item=> Number.isInteger(item)).map(item=> array[item])
    return uniqueItem
}

//show cartMenu
cartLink.addEventListener('click', openCartMenu);
function openCartMenu() {
    if(cartBox.innerHTML !== ''){
        cartProducts.classList.toggle('active')
    }
}

//show ItemDetails page
function showItemDetails (id) {
    console.log(id);
    localStorage.setItem("productId", id)
    window.location = 'productDetails.html'
}


//search by productName
let searchInput = document.getElementById('search');
searchInput.addEventListener('input', function(e) {
    searchItemName(e.target.value,data)
    if(e.target.value.trim() == ''){
        addProducts(data)
    }

});
function searchItemName (value, data) {
    let searchItem = data.filter(item=> item.title.includes(value))
    console.log(searchItem)
    addProducts(searchItem);
}

