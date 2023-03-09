let user = document.querySelector('#user');
let password = document.querySelector('#Password');
let btnIn = document.querySelector('#sign-in');
let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

btnIn.addEventListener('click', (e) => {
    e.preventDefault();
    if(user.value === getUser && password.value === getPassword){
        setTimeout(() => {
            window.location = "home.html"
        }, 1000)
    }
})
