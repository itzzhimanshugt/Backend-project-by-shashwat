const express = require('express');
const mongoose = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.use(express.json());

app.use('/api', userRoutes);



app.listen(3000, () => console.log('Server running on port 3000'));
