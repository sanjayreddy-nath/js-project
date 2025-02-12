document.addEventListener('DOMContentLoaded', function () {
    const eventCards = document.querySelectorAll('.card');
  
    eventCards.forEach(card => {
      card.addEventListener('click', function () {
        const eventType = this.getAttribute('data-event');
        window.location.href = `vendor-details.html?event=${eventType}`;
      });
    });
  
    const urlParams = new URLSearchParams(window.location.search);
    const eventParam = urlParams.get('event');
  
    if (eventParam) {
      displayVendors(eventParam);
    }
  });
  
  function displayVendors(eventType) {
    const vendors = {
        birthday: [
            { name: 'Party Starz', location: 'Kolkata', price: '$500 - $1500' },
            { name: 'Happy Times', location: 'Ahmedabad', price: '$700 - $1800' },
            { name: 'Bash Makers', location: 'Lucknow', price: '$800 - $2000' },
            
      ]
    };
  
    const vendorContainer = document.querySelector('.vendor-container');
  
    if (vendors[eventType]) {
      vendors[eventType].forEach(vendor => {
        const vendorCard = document.createElement('div');
        vendorCard.classList.add('vendor-card');
        vendorCard.innerHTML = `
          <h3>${vendor.name}</h3>
          <p>Location: ${vendor.location}</p>
          <p>Price Range: ${vendor.price}</p>
        `;
        vendorContainer.appendChild(vendorCard);
      });
    }
  }
  