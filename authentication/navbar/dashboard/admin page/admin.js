
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// import { getDatabase, ref, onValue, remove, update } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyDqg4gbnq_D_pQXV3YYBAhKySLkhIz-toM",
//   authDomain: "plan-it-all-94332.firebaseapp.com",
//   databaseURL: "https://plan-it-all-94332-default-rtdb.firebaseio.com", // Added this line
//   projectId: "plan-it-all-94332",
//   storageBucket: "plan-it-all-94332.appspot.com",
//   messagingSenderId: "18641141179",
//   appId: "1:18641141179:web:eab71ab5462652e5c5d89e",
//   measurementId: "G-T601PT2EW4",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getDatabase(app);

// console.log("Firebase Initialized:", app);

// document.addEventListener("DOMContentLoaded", () => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       console.log("Admin logged in:", user.uid);
//       const usersRef = ref(db, `users`);

//       onValue(usersRef, (snapshot) => {
//         const eventsContainer = document.getElementById("events-list");
//         eventsContainer.innerHTML = `
//           <div class="admin-container">
//             <header class="admin-header">
//               <h1>Event Management</h1>
//             </header>
//             <main class="admin-main">
//               <section class="admin-section">
//                 <h2>Event List</h2>
//                 <table class="events-table">
//                   <thead>
//                     <tr>
//                       <th>Name</th>
//                       <th>Email</th>
//                       <th>Event Type</th>
//                       <th>Location</th>
//                       <th>Guests</th>
//                       <th>Budget</th>
//                       <th>Date</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody id="events-table-body"></tbody>
//                 </table>
//               </section>
//             </main>
//           </div>
//         `;

//         const tableBody = document.getElementById("events-table-body");
//         tableBody.innerHTML = "";

//         if (snapshot.exists()) {
//           snapshot.forEach((userSnapshot) => {
//             const userId = userSnapshot.key;
//             const eventsRef = ref(db, `users/${userId}/events`);

//             onValue(eventsRef, (eventsSnapshot) => {
//               eventsSnapshot.forEach((eventSnapshot) => {
//                 const eventData = eventSnapshot.val();
//                 const eventKey = eventSnapshot.key;

//                 console.log("Event Data:", eventData); // Debugging log

//                 const row = document.createElement("tr");
//                 row.innerHTML = `
//                   <td>${eventData.name || "N/A"}</td>
//                   <td>${eventData.email || "N/A"}</td>
//                   <td>${eventData.eventtype || "N/A"}</td>
//                   <td>${eventData.location || "N/A"}</td>
//                   <td>${eventData.guests || "N/A"}</td>
//                   <td>${eventData.budget || "N/A"}</td>
//                   <td>${eventData.date || "N/A"}</td>
//                   <td>
//                     <button class="accept-btn" data-user-id="${userId}" data-event-key="${eventKey}">Accept</button>
//                     <button class="reject-btn" data-user-id="${userId}" data-event-key="${eventKey}">Reject</button>
//                   </td>
//                 `;
//                 tableBody.appendChild(row);
//               });
//             });
//           });
//         } else {
//           console.warn("No events found in database.");
//           tableBody.innerHTML = `
//             <tr>
//               <td colspan="8">No events found.</td>
//             </tr>
//           `;
//         }
//       }, (error) => {
//         console.error("Error fetching data:", error);
//       });
//     } else {
//       console.error("User not logged in");
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "User not logged in",
//       });
//     }
//   });
// });

// document.addEventListener("click", async function (event) {
//   const user = auth.currentUser;
//   if (!user) {
//     console.error("No authenticated user found.");
//     return;
//   }

//   if (event.target.classList.contains("accept-btn")) {
//     const userId = event.target.dataset.userId;
//     const eventKey = event.target.dataset.eventKey;
//     console.log("Accept Clicked:", eventKey);
//     await acceptEvent(userId, eventKey);
//   }

//   if (event.target.classList.contains("reject-btn")) {
//     const userId = event.target.dataset.userId;
//     const eventKey = event.target.dataset.eventKey;
//     console.log("Reject Clicked:", eventKey);
//     await rejectEvent(userId, eventKey);
//   }
// });

// async function acceptEvent(userId, eventKey) {
//   try {
//     const eventRef = ref(db, `users/${userId}/events/${eventKey}`);
//     await update(eventRef, { status: "Accepted" });

//     Swal.fire({
//       icon: "success",
//       title: "Event Accepted",
//       text: "You have successfully accepted the event!",
//     });

//     console.log(`Event ${eventKey} accepted.`);
//   } catch (error) {
//     console.error("Error accepting event:", error);
//     Swal.fire("Error!", error.message, "error");
//   }
// }

// async function rejectEvent(userId, eventKey) {
//   try {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, reject it!",
//     });

//     if (result.isConfirmed) {
//       const eventRef = ref(db, `users/${userId}/events/${eventKey}`);
//       await remove(eventRef);

//       Swal.fire("Rejected!", "The event has been rejected.", "success");

//       console.log(`Event ${eventKey} rejected.`);
//     }
//   } catch (error) {
//     console.error("Error rejecting event:", error);
//     Swal.fire("Error!", error.message, "error");
//   }
// }


// ----------------------------------------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getDatabase, ref, onValue, remove, update } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDqg4gbnq_D_pQXV3YYBAhKySLkhIz-toM",
  authDomain: "plan-it-all-94332.firebaseapp.com",
  databaseURL: "https://plan-it-all-94332-default-rtdb.firebaseio.com",
  projectId: "plan-it-all-94332",
  storageBucket: "plan-it-all-94332.appspot.com",
  messagingSenderId: "18641141179",
  appId: "1:18641141179:web:eab71ab5462652e5c5d89e",
  measurementId: "G-T601PT2EW4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

emailjs.init("BmR14oFWRihCHTCi3"); // Replace with your actual EmailJS User ID

console.log("Firebase Initialized:", app);

document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Admin logged in:", user.uid);
      const eventsRef = ref(db, "/users");

      onValue(eventsRef, (snapshot) => {
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
                  <tbody id="events-table-body"></tbody>
                </table>
              </section>
            </main>
          </div>
        `;

        const tableBody = document.getElementById("events-table-body");
        tableBody.innerHTML = "";

        if (snapshot.exists()) {
          snapshot.forEach((userSnapshot) => {
            const userId = userSnapshot.key;
            const userData = userSnapshot.val();

            if (userData && userData.events) {
              Object.entries(userData.events).forEach(([eventKey, eventData]) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                  <td>${eventData.name || "N/A"}</td>
                  <td>${eventData.email || "N/A"}</td>
                  <td>${eventData.eventtype || "N/A"}</td>
                  <td>${eventData.location || "N/A"}</td>
                  <td>${eventData.guests || "N/A"}</td>
                  <td>${eventData.budget || "N/A"}</td>
                  <td>${eventData.date || "N/A"}</td>
                  <td>
                    <button class="accept-btn" data-user-id="${userId}" data-event-key="${eventKey}" data-email="${eventData.email}">Accept</button>
                    <button class="reject-btn" data-user-id="${userId}" data-event-key="${eventKey}" data-email="${eventData.email}">Reject</button>
                  </td>
                `;
                tableBody.appendChild(row);
              });
            }
          });
        } else {
          tableBody.innerHTML = `<tr><td colspan="8">No events found.</td></tr>`;
        }
      });
    } else {
      Swal.fire({ icon: "error", title: "Oops...", text: "User not logged in" });
    }
  });
});

document.addEventListener("click", async function (event) {
  const user = auth.currentUser;
  if (!user) return;

  if (event.target.classList.contains("accept-btn")) {
    const userId = event.target.dataset.userId;
    const eventKey = event.target.dataset.eventKey;
    const email = event.target.dataset.email;
    await acceptEvent(userId, eventKey, email);
  }

  if (event.target.classList.contains("reject-btn")) {
    const userId = event.target.dataset.userId;
    const eventKey = event.target.dataset.eventKey;
    const email = event.target.dataset.email;
    await rejectEvent(userId, eventKey, email);
  }
});

// Single Correct Declaration of acceptEvent
async function acceptEvent(userId, eventKey, email) {
  try {
    const eventRef = ref(db, `users/${userId}/events/${eventKey}`);
    await update(eventRef, { status: "Accepted" });
    await sendConfirmationEmail(email, "accepted"); // Dynamic email
    Swal.fire({ icon: "success", title: "Event Accepted", text: "Confirmation email sent!" });
  } catch (error) {
    Swal.fire("Error!", error.message, "error");
  }
}

// Single Correct Declaration of rejectEvent
async function rejectEvent(userId, eventKey, email) {
  try {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, reject it!",
    });

    if (result.isConfirmed) {
      const eventRef = ref(db, `users/${userId}/events/${eventKey}`);
      await remove(eventRef);

      // Send confirmation email dynamically using eventData.email
      await sendConfirmationEmail(email, "rejected");
      Swal.fire("Rejected!", "The event has been rejected.", "success");
    }
  } catch (error) {
    Swal.fire("Error!", error.message, "error");
  }
}

async function sendConfirmationEmail(email, status) {
  email = email.trim(); // Remove extra spaces

  // Check if email is valid
  if (!isValidEmail(email)) {
    Swal.fire("Invalid Email", `The email address "${email}" is invalid.`, "error");
    return;
  }

  const message = status === "accepted"
    ? "Your event has been accepted! Thank you for choosing us."
    : "We regret to inform you that your event has been rejected.";

  const templateParams = {
    to_email: email, // Dynamic email from event data
    subject: `Event ${status.charAt(0).toUpperCase() + status.slice(1)}`,
    message: message
  };

  try {
    console.log("Sending email to:", email);
    const response = await emailjs.send("service_4kv7agk", "template_f0pq5ze", templateParams);
    console.log(`Confirmation email sent to ${email}:`, response);
    Swal.fire("Success", `Email sent to ${email}`, "success");
  } catch (error) {
    console.error("Error sending email:", error);
    Swal.fire("Email Error", `Failed to send confirmation email to ${email}: ${error.text}`, "error");
  }
}

// Email validation function
function isValidEmail(email) {
  // Regular expression to check for a valid email format
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}




 

// -----------------------------






