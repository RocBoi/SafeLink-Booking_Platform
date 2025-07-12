// src/scripts/webcamHandler.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#webcamForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log('Webcam request:', data);

    try {
      const res = await fetch('/api/webcam-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert('Webcam request submitted. Await artist confirmation.');
        form.reset();
      } else {
        alert('Submission error. Try again later.');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to submit request.');
    }
  });
});
