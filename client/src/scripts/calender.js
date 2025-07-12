// src/scripts/calendar.js
// Requires backend integration with Google Calendar API

function addToGoogleCalendar(bookingData) {
  const event = {
    summary: `StageLink Booking – ${bookingData.artist}`,
    description: bookingData.description,
    start: {
      dateTime: bookingData.datetime,
      timeZone: 'America/New_York'
    },
    end: {
      dateTime: bookingData.datetime, // logic to add 1hr can be applied
      timeZone: 'America/New_York'
    }
  };

  fetch('/api/google-calendar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event)
  })
  .then(res => res.json())
  .then(data => console.log('Calendar sync successful'))
  .catch(err => console.error('Calendar sync failed', err));
}
