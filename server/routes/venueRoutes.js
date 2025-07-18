// routes/venueRoutes.js

const express = require('express');
const router = express.Router();
const VenueController = require('../controllers/VenueController');

// @route   GET /api/venues
// @desc    Get all venues
router.get('/', VenueController.getAllVenues);

// @route   GET /api/venues/:id
// @desc    Get a single venue by ID
router.get('/:id', VenueController.getVenueById);

// @route   POST /api/venues
// @desc    Create a new venue
router.post('/', VenueController.createVenue);

// @route   PUT /api/venues/:id
// @desc    Update a venue
router.put('/:id', VenueController.updateVenue);

// @route   DELETE /api/venues/:id
// @desc    Delete a venue
router.delete('/:id', VenueController.deleteVenue);

module.exports = router;
