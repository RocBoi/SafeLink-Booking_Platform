// controllers/VenueController.js

const Venue = require('../models/Venue');

// Get all venues
exports.getAllVenues = async (req, res) => {
  try {
    const venues = await Venue.find();
    res.status(200).json(venues);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single venue by ID
exports.getVenueById = async (req, res) => {
  try {
    const venue = await Venue.findById(req.params.id);
    if (!venue) return res.status(404).json({ message: 'Venue not found' });
    res.status(200).json(venue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new venue
exports.createVenue = async (req, res) => {
  const { name, location, capacity, contactInfo } = req.body;

  const newVenue = new Venue({
    name,
    location,
    capacity,
    contactInfo,
  });

  try {
    const savedVenue = await newVenue.save();
    res.status(201).json(savedVenue);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a venue
exports.updateVenue = async (req, res) => {
  try {
    const updatedVenue = await Venue.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedVenue)
      return res.status(404).json({ message: 'Venue not found' });
    res.status(200).json(updatedVenue);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a venue
exports.deleteVenue = async (req, res) => {
  try {
    const deletedVenue = await Venue.findByIdAndDelete(req.params.id);
    if (!deletedVenue)
      return res.status(404).json({ message: 'Venue not found' });
    res.status(200).json({ message: 'Venue deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
