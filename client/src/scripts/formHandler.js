// src/scripts/formHandler.js

document.addEventListener('DOMContentLoaded', function () {
  const bookingForm = document.querySelector('form');

  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const data = {
        name: bookingForm.querySelector('input[type="text"]').value,
        email: bookingForm.querySelector('input[type="email"]').value,
        genre: bookingForm.querySelector('select').value,
        description: bookingForm.querySelector('textarea').value
      };

      console.log('Booking submitted:', data);
      alert('Booking request sent!');
      bookingForm.reset();
    });
  }
});
