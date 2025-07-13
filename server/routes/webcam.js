// routes/webcam.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, artist, datetime, message } = req.body;
  console.log('Webcam Request:', req.body);

  // TODO: Payment logic or request notification
  res.status(200).json({ message: 'Webcam request received!' });
});

module.exports = router;
