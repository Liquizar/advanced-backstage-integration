const express = require('express');
const app = express();
app.get('/payment', (req, res) => res.send('Payment Service Running'));
app.listen(4000, () => console.log('Payment Service on port 4000'));
