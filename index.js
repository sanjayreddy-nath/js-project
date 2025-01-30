         import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
          import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
          import { getDatabase, ref, set , get} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
          
          const firebaseConfig = {
            apiKey: "AIzaSyDqg4gbnq_D_pQXV3YYBAhKySLkhIz-toM",
            authDomain: "plan-it-all-94332.firebaseapp.com",
            projectId: "plan-it-all-94332",
            storageBucket: "plan-it-all-94332.appspot.com", 
            messagingSenderId: "18641141179",
            appId: "1:18641141179:web:eab71ab5462652e5c5d89e",
            measurementId: "G-T601PT2EW4",
          };
          
          const app = initializeApp(firebaseConfig);
          const auth = getAuth(app);
          const db = getDatabase(app);
          
          document.getElementById("signupbtn").addEventListener("click", async (event) => {
            event.preventDefault();
          
            let username = document.getElementById("signup-username").value.trim();
            let email = document.getElementById("signup-Email").value.trim();
            let password = document.getElementById("signup-password").value.trim();
            let confirmPassword = document.getElementById("signup-cpassword").value.trim();
            let userRole = document.getElementById("userRole").value;
          
            if (username === "" || email === "" || password === "" || confirmPassword === "" || userRole ==="") {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Required inputs are empty",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
              // Swal.fire("Required inputs are empty"); 
              return;
            }
          
            if (password !== confirmPassword) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Passwords do not match!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
              // Swal.fire("Passwords do not match!");
              return;
            }
          
            try {
              const userCredential = await createUserWithEmailAndPassword(auth, email, password);
              const user = userCredential.user;
          
              await set(ref(db, `users/${username}`), {
                uid: user.uid,
                email: email,
                role: userRole
              });
              Swal.fire({
                title: "Drag me!",
                icon: (`Signup successful! Welcome, ${username}`),
                draggable: true
              });
          
              // alert(`Signup successful! Welcome, ${username}`);
            } catch (err) {
              // alert("Error: " + err.message);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "signup failed!",
              });
            }
          });
          









// ------------------------------------login-------------


// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";


// const firebaseConfig1 = {
//   apiKey: "AIzaSyDqg4gbnq_D_pQXV3YYBAhKySLkhIz-toM",
//   authDomain: "plan-it-all-94332.firebaseapp.com",
//   projectId: "plan-it-all-94332",
//   storageBucket: "plan-it-all-94332.appspot.com", 
//   messagingSenderId: "18641141179",
//   appId: "1:18641141179:web:eab71ab5462652e5c5d89e",
//   measurementId: "G-T601PT2EW4",
// };

// const app1 = initializeApp(firebaseConfig1);
// const auth1 = getAuth(app1);
// const db1 = getDatabase(app1);
// let loginbtn=document.getElementById("loginbtn") 
// loginbtn.addEventListener("click",async()=>{
  
// })
document.getElementById("loginbtn").addEventListener("click", async (event) => {
  event.preventDefault(); // Prevent page reload

  let login1 = document.getElementById("login-Email").value.trim();
  let login2 = document.getElementById("login-password").value.trim();

  if ( login1 === "" || login2 === "") {
    // alert("All fields are required.");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "All fields are required!",

    });
    return;
}


try {
  // Sign in user with Firebase Authentication
  const userCredential = await signInWithEmailAndPassword(auth,login1,login2);
  // const user = userCredential.user;


  const usersRef = ref(db, `users`);
  const snapshot = await get(usersRef);

  if (snapshot.exists()) {
    let foundUser = null;
    snapshot.forEach((childSnapshot) => {
        let userData = childSnapshot.val();
        if (userData.email ===login1 ) {
            foundUser = userData;
        }
    });

    if (foundUser) {
        if (foundUser.role === "admin") {
            location.href = "./dashboard/admin page/admin.html";
            Swal.fire({
              title: (`login successful, ${username}`),
              icon: "success",
              draggable: true
            });
        } else if (foundUser.role === "user") {
            location.href = "./dashboard/dashboard.html";
           Swal.fire({
              title: (`login successful, ${username}`),
              icon: "success",
              draggable: true
            });
        } else {
            alert("No valid role found. Please contact support.");
        }
    } else {
        alert("User not found in database.");
    }
} else {
    alert("No users found in database.");
}
} 
catch (err) {

Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Login failed!",
});
}
});


















// let loginbtn = document.getElementById("loginbtn");

// loginbtn.addEventListener("click", async () => {
//   let login1 = document.getElementById("login-Email").value.trim();
//   let login2 = document.getElementById("login-password").value.trim();

  
//   if (login1 === "" || login2 === "") {
//     Swal.fire("Required inputs are empty");
//     return; 
//   }

//   try {
   
//    await signInWithEmailAndPassword(auth, login1, login2).then(()=>{
//     Swal.fire({
//       title: "Login successful!",
//       icon: "success",
//       draggable: true,
//     }) .then(() => {
//       location.href = "./dashboard/dashboard.html" 
//     })
//    })

//   } catch (err) {
   
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: err.message, 
   
//     });
//   }
// });






















