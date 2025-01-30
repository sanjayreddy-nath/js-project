
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getDatabase, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

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

document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userRef = ref(db, `users/${user.uid}/events`);
      onValue(userRef, (snapshot) => {
        const eventsContainer = document.getElementById("events-list");
        eventsContainer.innerHTML = `
          <div class="admin-container">
            <header class="admin-header">
              <h1>Event Management</h1>
            </header>
            <main class="admin-main">
              <section class="admin-section">
                <h2>Event List</h2>
                <table class="events-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Event Type</th>
                      <th>Location</th>
                      <th>Guests</th>
                      <th>Budget</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody id="events-table-body">
                  </tbody>
                </table>
              </section>
            </main>
          </div>
        `;

        const tableBody = document.getElementById("events-table-body");
        tableBody.innerHTML = ""; 

        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            const eventData = childSnapshot.val();
            const eventKey = childSnapshot.key;
            const row = document.createElement("tr");
            row.innerHTML = `
              <td>${eventData.name}</td>
              <td>${eventData.email}</td>
              <td>${eventData.eventtype}</td>
              <td>${eventData.location}</td>
              <td>${eventData.guests}</td>
              <td>${eventData.budget}</td>
              <td>${eventData.date}</td>
              <td>
                <button class="accept-btn" onclick="acceptEvent('${user.uid}', '${eventKey}')">Accept</button>
                <button class="reject-btn" onclick="rejectEvent('${user.uid}', '${eventKey}')">Reject</button>
              </td>
            `;
            tableBody.appendChild(row);
          });
        } else {
          tableBody.innerHTML = `
            <tr>
              <td colspan="8">No events found.</td>
            </tr>
          `;
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User not logged in",
      });
    }
  });
});

window.acceptEvent=function acceptEvent(userId, eventKey) {
  Swal.fire({
    icon: "success",
    title: "Event Accepted",
    text: "You have successfully accepted the event!",
  });
}

window.rejectEvent=function rejectEvent(userId, eventKey) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, reject it!"
  }).then((result) => {
    if (result.isConfirmed) {
      const eventRef = ref(db, `users/${userId}/events/${eventKey}`);
      remove(eventRef)
        .then(() => {
          Swal.fire("Rejected!", "The event has been rejected.", "success");
        })
        .catch((error) => {
          Swal.fire("Error!", error.message, "error");
        });
    }
  });
}







// -------------------------------------------------------
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyDqg4gbnq_D_pQXV3YYBAhKySLkhIz-toM",
//   authDomain: "plan-it-all-94332.firebaseapp.com",
//   projectId: "plan-it-all-94332",
//   storageBucket: "plan-it-all-94332.appspot.com",
//   messagingSenderId: "18641141179",
//   appId: "1:18641141179:web:eab71ab5462652e5c5d89e",
//   measurementId: "G-T601PT2EW4",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getDatabase(app);

// document.addEventListener("DOMContentLoaded", () => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const userRef = ref(db, `users/${user.uid}/events`);
//       onValue(userRef, (snapshot) => {
//         const eventsContainer = document.getElementById("events-list");
//         eventsContainer.innerHTML = ""; 
//         if (snapshot.exists()) {
//           snapshot.forEach((childSnapshot) => {
//             const eventData = childSnapshot.val();
//             const eventElement = document.createElement("div");
//             eventElement.innerHTML = `
//               <div class="event">
//                 <h3>${eventData.name}</h3>
//                 <p>Email: ${eventData.email}</p>
//                 <p>Event Type: ${eventData.eventtype}</p>
//                 <p>Location: ${eventData.location}</p>
//                 <p>Guests: ${eventData.guests}</p>
//                 <p>Budget: ${eventData.budget}</p>
//                 <p>Date: ${eventData.date}</p>
//               </div>
//               <hr>
//             `;
//             eventsContainer.appendChild(eventElement);
//           });
//         } else {
//           eventsContainer.innerHTML = "<p>No events found.</p>";
//         }
//       });
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "User not logged in",
//       });
//     }
//   });
// });

// 


// --------------------------