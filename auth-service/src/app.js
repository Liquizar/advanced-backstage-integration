const express = require('express');
const app = express();
app.get('/auth', (req, res) => res.send('Authentication Service Running'));
app.listen(3000, () => console.log('Auth Service on port 3000'));
