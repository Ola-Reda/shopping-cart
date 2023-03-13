let box = document.querySelector(".row");
let noProducts = document.querySelector(".no-products");
function drawCartItems(products = []) {
    if( JSON.parse(localStorage.getItem('products')).length == 0){
        noProducts.innerHTML = `<p class="mb-0">No Products Here</p>`
    }
    let items = JSON.parse(localStorage.getItem('products')) || products
    let drawItem = items.map((item)=>{
        return`
        <div class="col-md-6 col-lg-3">
            <div class="box mb-4">
                <div class="card">
                    <img src="${item.imageUrl}" class="card-img-top" alt="${item.title}">
                    <div class="card-body pb-4">
                        <h5>${item.title}</h5>
                        <p>Price: $${item.price}</p>
                        <a class="adding" href="#" onclick="removeItem(${item.id})">Remove From Cart</a>
                    </div>
                </div>
            </div>
        </div>`;
    }).join('')
    box.innerHTML = drawItem;
}
drawCartItems()

function removeItem(id) {
    let items = window.localStorage.getItem('products')
    if(items) {
        let products = JSON.parse(items);
        let filteredItem = products.filter((item)=>item.id !== id )
        window.localStorage.setItem('products', JSON.stringify(filteredItem))
        drawCartItems(filteredItem);
    }
}
