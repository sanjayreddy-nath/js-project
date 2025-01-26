

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

  let get=document.getElementById("event-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from actually submitting
  
    // Get form values
    const name = document.getElementById("name").value;
    const Email=document.getElementById("Email").value;
    const eventType = document.getElementById("event-type").value;
    const location = document.getElementById("location").value;
    // const location2 = document.getElementById("")
    
    
    const guests = document.getElementById("guests").value;
    const budget = document.getElementById("budget").value;
    const date = document.getElementById("date").value;
  
    // Create an object to store the form data
    const formData = {
        name: name,
        Email:Email,
        eventType: eventType,
        location: location,
        guests: guests,
        budget: budget,
        date: date,
        
    };
  
    // Store the form data in local storage
    localStorage.setItem("eventDetails", JSON.stringify(formData));

    let btnSubmit=document.getElementById("submit1")
btnSubmit.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    Swal.fire({
        title: "10K EVENTS",
        text: "Event Booked Successfully.",
        imageUrl: "https://static.vecteezy.com/system/resources/previews/054/044/184/non_2x/a-festive-partying-emoji-face-with-a-party-hat-and-blowing-confetti-expressing-joy-and-celebration-with-bright-yellow-colors-png.png",
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Custom image"
      });

      
      localStorage.setItem("eventDetails", JSON.stringify(formData));
let datas=JSON.parse(localStorage.getItem("eventDetails"))
  console.log(datas);
});
});


  
