// src/scripts/formHandler.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log('Booking submission:', data);

    try {
      // Optional: replace with your endpoint URL
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        alert('Booking request sent!');
        form.reset();
      } else {
        alert('There was an issue submitting your booking.');
      }
    } catch (err) {
      console.error(err);
      alert('Submission failed. Please try again.');
    }
  });
});
