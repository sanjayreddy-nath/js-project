// Swiper initialization
var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
// -----------------

// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyDqg4gbnq_D_pQXV3YYBAhKySLkhIz-toM",
//   authDomain: "plan-it-all-94332.firebaseapp.com",
//   projectId: "plan-it-all-94332",
//   storageBucket: "plan-it-all-94332.appspot.com", 
//   messagingSenderId: "18641141179",
//   appId: "1:18641141179:web:eab71ab5462652e5c5d89e",
//   measurementId: "G-T601PT2EW4",
// };

//           const app = initializeApp(firebaseConfig);
//           const auth = getAuth(app);
//           const db = getDatabase(app);
//           document.getElementById("submit1").addEventListener("click", async (event) => {
//             event.preventDefault();

//             let name = document.getElementById("name").value.trim();
//             let Email= document.getElementById("Email").value.trim();
//             let eventtype = document.getElementById("event-type").value;
//             let location = document.getElementById("location").value;
//             let guests = document.getElementById("guests").value;
//             let budget = document.getElementById("budget").value;
//             let date= document.getElementById("date").value;
 




//             if (name === "" || Email === "" || eventtype === "" ||location  === "" || guests ===""|| budget ==="" || date ==="") {
//               Swal.fire("Required inputs are empty"); 
//               return;
//             }
//                        try {
//                           const userCredential = await onAuthStateChanged(auth,name,Email,eventtype,location,guests,budget,date);
//                           const user = userCredential.user;
                      
//                           const userRef = ref(db, `users/${user.uid}/events`);
//                           await push(userRef, {
//                             Email: Email, 
//                             eventtype:event-type,
//                             location:location,
//                             guests:guests,
//                             budget:budget,
//                             date:date
//                           });
                      
//                           alert(`event booking successfull, ${name}`);
//                         } catch (err) {
//                           alert("Error: " + err.message);
//                         }
//                       });


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

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

document.getElementById("submit1").addEventListener("click", async (event) => {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let Email = document.getElementById("Email").value.trim();
  let eventtype = document.getElementById("event-type").value;
  let location = document.getElementById("location").value;
  let guests = document.getElementById("guests").value;
  let budget = document.getElementById("budget").value;
  let date = document.getElementById("date").value;

  if (name === "" || Email === "" || eventtype === "" || location === "" || guests === "" || budget === "" || date === "") {
    Swal.fire("Required inputs are empty");
    return;
  }


  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const userRef = ref(db, `users/${user.uid}/events`);
        await push(userRef, {
          name: name,
          email: Email,
          eventtype: eventtype,
          location: location,
          guests: guests,
          budget: budget,
          date: date,
        });


        Swal.fire({
          title: (`Event booking successful, ${name}`),
          icon: "success",
          draggable: true
        });


   
      } catch (err) {
        Swal.fire("Error: " + err.message);
      }
    } else {
      
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "something wrong , try aagin",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  });
});
