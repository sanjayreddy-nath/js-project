// import { get } from "../signup/signup";
// let signup =document.getElementById("signup")

// signup.addEventListener("click",(e)=>{
// e.preventDefault
// console.log(get)
// })


let get=document.getElementById("exampleModal");
// Load modal content dynamically
document.addEventListener("DOMContentLoaded", function () {
    // Load the Signup Modal
    fetch("../signup/index.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("modalContainer").insertAdjacentHTML("beforeend", html);
        });

    // Load the Login Modal
    fetch("../login/login.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("modalContainer").insertAdjacentHTML("beforeend", html);
        });
});
