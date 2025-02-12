

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
        destination: [
            { name: 'Exotic Vows', location: 'Goa', price: '$4000 - $9000' },
            { name: 'Paradise Planners', location: 'Kerala', price: '$3500 - $8000' },
            { name: 'Tropical Dreams', location: 'Andaman', price: '$4500 - $10000' }
            // { name: 'Island Events', location: 'Maldives', price: '$5000 - $12000' }
          ],
        // { name: 'Wedding Bliss', location: 'Jaipur', price: '$1800 - $4500' }
      
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