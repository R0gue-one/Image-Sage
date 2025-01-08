const cors = require('cors');
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = 3000;
app.use(cors());

app.get('/api/random-image', async (req, res) => {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_API_KEY}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch image' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
