let box = document.querySelector("main .row");
let noProducts = document.querySelector(".no-products");
function addCartItems(products = []) {
    if( JSON.parse(localStorage.getItem('productsItems')).length == 0){
        noProducts.innerHTML = `<p class="mb-0">No Products Here</p>`
    }
    let items = JSON.parse(localStorage.getItem('productsItems')) || products
    let drawItem = ''
    items.map((item)=>{
    drawItem += `
        <div class="col-md-6 col-lg-3">
            <div class="box mb-4">
                <div class="card">
                    <img src="${item.imageUrl}" class="card-img-top" alt="${item.title}">
                    <div class="card-body pb-4">
                        <h5>${item.title}</h5>
                        <div class="info d-flex align-items-center justify-content-between">
                            <span>price: $${item.price}</span>
                            <span>amount: ${item.amount}</span>
                        </div>
                        <button class="adding" href="#" onclick="removeItem(${item.id})">Remove From Cart</button>
                    </div>
                </div>
            </div>
        </div>`;
    })
    box.innerHTML = drawItem;
}
addCartItems()

//remove item from cart
function removeItem(id) {
    let items = window.localStorage.getItem('productsItems')
    if(items) {
        let products = JSON.parse(items);
        let filteredItem = products.filter((item)=>item.id !== id )
        window.localStorage.setItem('productsItems', JSON.stringify(filteredItem))
        addCartItems(filteredItem);
    }
}
