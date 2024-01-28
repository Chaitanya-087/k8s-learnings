const express = require('express');
require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
    res.json({
        timestamp: new Date(),
        message: 'Hello World!',
        node_env: process.env.NODE_ENV,
    });
});

app.get('/error', (req, res) => {
    process.exit(1);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});