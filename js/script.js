let userName = document.querySelector("#user");
let btnOut = document.querySelector("#log-out");
let check = localStorage.getItem("username");
if (check) {
    userName.textContent = check.charAt(0).toUpperCase() + check.slice(1);
};
btnOut.addEventListener('click', () => {
    window.location = 'login.html'
})

//add item to page
let data = [
    {id:1, title:"head", price: 200, imageUrl: "images/icon.png"},
    {id:2, title:"head", price: 300, imageUrl: "images/icon.png"},
    {id:3, title:"head", price: 500, imageUrl: "images/icon.png"},
    {id:4, title:"head", price: 600, imageUrl: "images/icon.png"},
    {id:5, title:"head", price: 600, imageUrl: "images/icon.png"},
    {id:6, title:"head", price: 200, imageUrl: "images/icon.png"},
    {id:7, title:"head", price: 200, imageUrl: "images/icon.png"},
    {id:8, title:"head", price: 200, imageUrl: "images/icon.png"},
    {id:9, title:"head", price: 200, imageUrl: "images/icon.png"},
    {id:10, title:"head", price: 200, imageUrl: "images/icon.png"},
    {id:11, title:"headhead", price: 200, imageUrl: "images/icon.png"},
    {id:12, title:"head", price: 200, imageUrl: "images/icon.png"},
    {id:13, title:"head", price: 200, imageUrl: "images/icon.png"},
    {id:14, title:"head", price: 200, imageUrl: "images/icon.png"},
    {id:15, title:"head", price: 200, imageUrl: "images/icon.png"},
    {id:16, title:"head", price: 200, imageUrl: "images/icon.png"}
];
let box = document.querySelector(".row");


function addProducts() {
    let draw = data.map(item => {
    return `
        <div class="col-md-6 col-lg-3">
            <div class="box">
                <div class="card">
                    <img src="${item.imageUrl}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.price}</p>
                        <a href="#" class="btn btn-primary onclick="getItem(${item.id})">Add To Cart</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    box.innerHTML = draw;

}
addProducts();

function getItem (id) {
    console.log(id)
}


