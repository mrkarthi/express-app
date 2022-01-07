const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h2>Hello from Express.js</h2>');
});

app.listen(3000, () => console.log('Server running on Port 3000...'));