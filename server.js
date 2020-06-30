const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;
const fruits = require('./fruits');
const carts = require('./carts');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/api/products', (req, res) => {
  res.json(fruits);
});

app.get('/api/carts', (req, res) => {
  res.json(carts);
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


