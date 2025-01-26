// import { get } from "../signup/signup";
// let signup =document.getElementById("signup")

// signup.addEventListener("click",(e)=>{
// e.preventDefault
// console.log(get)
// })


// let get=document.getElementById("exampleModal");
// --------------------------------------------------Load modal content dynamically
// document.addEventListener("DOMContentLoaded", function () {
//    ------------------------------------------------ Load the Signup Modal
    // fetch("../signup/signup.html")
    //     .then(response => response.text())
    //     .then(html => {
    //         document.getElementById("modalContainer").insertAdjacentHTML("beforeend", html);
    //     });

    // ------------------------------------------------Load the Login Modal
//     fetch("../login/login.html")
//         .then(response => response.text())
//         .then(html => {
//             document.getElementById("modalContainer").insertAdjacentHTML("beforeend", html);
//         });
// });




  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBxCk_OlGCq-5793b6SVHaxyjz4KWl0OVE",
    authDomain: "plan-it-all-234d3.firebaseapp.com",
    projectId: "plan-it-all-234d3",
    storageBucket: "plan-it-all-234d3.firebasestorage.app",
    messagingSenderId: "931670685842",
    appId: "1:931670685842:web:6fb7d52849a3bb64914e4b",
    measurementId: "G-22RKF9S78B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const author = getAuth(app)

let signupbtn=document.getElementById("signupbtn");
signupbtn.addEventListener("click",async()=>{
    let signup1=document.getElementById("signup-username").value.trim();
    let signup2=document.getElementById("signup-Email").value.trim();
    let signup3=document.getElementById("signup-password").value.trim();
    let signup4=document.getElementById("signup-cpassword").value.trim();

if(signup1==="" || signup2==="" || signup3==="" || signup4==="")
{
    Swal.fire("required inputs are empty");
   
}

try{
       await createUserWithEmailAndPassword(author,signup2,signup3).then(()=>{
        Swal.fire({
            title: "Registered successfully!",
            icon: "success",
            draggable: true
          }).then(()=>{
            // location.href="./navlogin.html"
          })
       })
}catch(err){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
}

})





let loginbtn=document.getElementById("loginbtn");
loginbtn.addEventListener("click",async()=>{

    let login1=document.getElementById("login-Email").value.trim();
    let login2=document.getElementById("login-password").value.trim();


if(login1==="" || login2==="")
{
    Swal.fire("required inputs are empty");
   
}

try{
       await signInWithEmailAndPassword(author,login1,login2).then(()=>{
        Swal.fire({
            title: "Login successfull!",
            icon: "success",
            draggable: true
          }).then(()=>{
            location.href="./dashboard/dashboard.html"
          })
       })
}catch(err){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
}

})





















//   let signup1=document.getElementById("signup-username").value.trim();
//   let signup2=document.getElementById("signup-Email").value.trim();
//   let signup3=document.getElementById("signup-password").value.trim();
//   let signup4=document.getElementById("signup-cpassword").value.trim();