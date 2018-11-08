const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require("path");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.get('/rooms/:listingId/', (req, res) => {
  const options = {
    root: path.join(__dirname, '..', 'public/'),
  };
  res.sendFile('index.html', options);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
