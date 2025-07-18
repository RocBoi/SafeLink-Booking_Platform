const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  artistName: { type: String, required: true },
  fanName: { type: String },
  contactEmail: { type: String, required: true },
  eventDate: { type: Date, required: true },
  location: { type: String },
  serviceType: { type: String, enum: ['Performance', 'Webcam', 'Meet & Greet'], required: true },
  message: { type: String },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);
