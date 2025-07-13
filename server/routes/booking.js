// routes/booking.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, artist, datetime, details } = req.body;
  console.log('New Booking:', req.body);

  // TODO: Store in DB or send email
  res.status(200).json({ message: 'Booking received!' });
});

module.exports = router;
