// controllers/UserController.js const User = require('../models/User');

exports.register = async (req, res) => { try { const user = await User.create(req.body); res.status(201).json(user); } catch (err) { res.status(400).json({ error: err.message }); } };

exports.login = async (req, res) => { try { const { email, password } = req.body; const user = await User.findOne({ email });

if (!user || !(await user.comparePassword(password))) {
  return res.status(401).json({ error: 'Invalid credentials' });
}

// Placeholder for token logic
res.status(200).json({ message: 'Login successful', user });

} catch (err) { res.status(500).json({ error: err.message }); } };

exports.getProfile = async (req, res) => { try { const user = await User.findById(req.params.id); if (!user) return res.status(404).json({ error: 'User not found' }); res.status(200).json(user); } catch (err) { res.status(500).json({ error: err.message }); } };

