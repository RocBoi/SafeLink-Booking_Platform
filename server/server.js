// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const bookingRoute = require('./routes/booking');
const webcamRoute = require('./routes/webcam');
const calendarRoute = require('./routes/calendar');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/booking', bookingRoute);
app.use('/api/webcam-request', webcamRoute);
app.use('/api/google-calendar', calendarRoute); // Optional

app.get('/', (req, res) => {
  res.send('StageLink API is running ✅');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
