// models/venue.js

const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Venue name is required'],
    },
    location: {
      type: String,
      required: [true, 'Venue location is required'],
    },
    capacity: {
      type: Number,
      required: [true, 'Venue capacity is required'],
    },
    contactEmail: {
      type: String,
      required: [true, 'Contact email is required'],
    },
    contactPhone: {
      type: String,
    },
    description: {
      type: String,
    },
    images: [String], // Array of image URLs
    availableDates: [Date], // Optional array of available booking dates
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;
