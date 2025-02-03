const User = require('../models/userModel');

const signup = async (req, res) => {
    const { username, email, password, dateOfBirth } = req.body;
    if (!username) return res.status(400).json({ error: 'Username cannot be empty' });
    if (!email) return res.status(400).json({ error: 'Email cannot be empty' });
    if (password.length < 8 || password.length > 16)
        return res.status(400).json({ error: 'Password length should be greater than 8 or less than or equal to 16' });
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: 'Email already in use' });
    const user = new User({ username, email, password, dateOfBirth });
    await user.save();
    res.status(201).json({ message: 'User registered successfully!' });
};

module.exports = { signup };
