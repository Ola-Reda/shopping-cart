let itemDetails = document.querySelector('.item');
let productId = localStorage.getItem("productId");

//get and draw item in page
let product = data.find(item => item.id == productId);
itemDetails.innerHTML = `
    <div class="card mb-3">
        <img src="${product.imageUrl}" class="card-img-top" alt="image">
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">price: ${product.price}</p>
        </div>
    </div>
`