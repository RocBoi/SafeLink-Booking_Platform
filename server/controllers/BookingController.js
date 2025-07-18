// controllers/BookingController.js const Booking = require("../models/Booking");

const createBooking = async (req, res) => { try { const booking = new Booking(req.body); await booking.save(); res.status(201).json(booking); } catch (err) { res.status(400).json({ error: err.message }); } };

const getBookings = async (req, res) => { try { const bookings = await Booking.find().populate("artist"); res.status(200).json(bookings); } catch (err) { res.status(500).json({ error: err.message }); } };

const getBookingById = async (req, res) => { try { const booking = await Booking.findById(req.params.id).populate("artist"); if (!booking) return res.status(404).json({ error: "Booking not found" }); res.status(200).json(booking); } catch (err) { res.status(500).json({ error: err.message }); } };

module.exports = { createBooking, getBookings, getBookingById, };

