let user = document.querySelector("#user");
let email = document.querySelector("#email");
let password = document.querySelector("#Password");
let btnUp = document.querySelector("#sign-up");

btnUp.addEventListener('click', (e) =>{
    e.preventDefault();
    if(user.value === "" && email.value === "" && password.value === "") {
        alert("please enter the required info");
    } else {
        window.localStorage.setItem('username', user.value);
        window.localStorage.setItem('email', email.value);
        window.localStorage.setItem('password', password.value);
        setTimeout(() => {
            window.location = "home.html";
        },1000)
    }
})