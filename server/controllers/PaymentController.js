// controllers/PaymentController.js

const Stripe = require('stripe');
const dotenv = require('dotenv');
dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Create a payment intent
exports.createPaymentIntent = async (req, res) => {
  const { amount, currency, metadata } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata,
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      message: 'Payment intent created successfully',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handle payment confirmation (optional, based on front-end setup)
exports.confirmPayment = async (req, res) => {
  const { paymentIntentId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
    res.status(200).json({
      status: paymentIntent.status,
      message: 'Payment confirmed',
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
