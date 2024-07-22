const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Use environment variable for MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

const UserSchema = new mongoose.Schema({
    username: String,
    mobile: String,
    score: Number,
});

const User = mongoose.model('User', UserSchema);

// Register or update user
app.post('/register', async (req, res) => {
    const { username, mobile } = req.body;

    let user = await User.findOne({ mobile });
    if (!user) {
        user = new User({ username, mobile, score: 0 });
    } else {
        user.username = username; // Update username if exists
    }

    await user.save();
    res.json({ message: 'User registered or updated successfully' });
});

// Login user
app.post('/login', async (req, res) => {
    const { mobile } = req.body;

    const user = await User.findOne({ mobile });
    if (user) {
        res.json({ message: 'Login successful', user });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Save score
app.post('/saveScore', async (req, res) => {
    const { mobile, score } = req.body;

    const user = await User.findOne({ mobile });
    if (user) {
        user.score = score;
        await user.save();
        res.send('Score saved successfully');
    } else {
        res.status(404).send('User not found');
    }
});

// Get users
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
