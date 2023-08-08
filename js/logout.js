let userName = document.querySelector("#user");
let btnOut = document.querySelector("#log-out");
let check = localStorage.getItem("username");
//username 
if (check) {
    userName.textContent = check.trim().charAt(0).toUpperCase() + check.slice(1);
};
//logout
btnOut.addEventListener('click', () => {
    window.location = 'login.html'
})