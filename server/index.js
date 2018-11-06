const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/rooms/:listingId/booking', (req, res) => {
  res.end();
});

app.get('/api/rooms/:listingId/photos', (req, res) => {
  res.end();
});

app.get('/api/rooms/:listingId/listings', (req, res) => {
  res.end();
});

app.get('/api/rooms/:listingId/reviews', (req, res) => {
  res.end();
});

app.listen(port, () => console.log(`Listening on port ${port}`));
