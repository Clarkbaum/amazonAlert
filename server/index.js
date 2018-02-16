const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config.js');
const Product = require('./controllers/product.js');

require('./config/database.js')(config);


const app = express();
module.exports = app;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('access-control-allow-origin', '*');
  res.setHeader('access-control-allow-methods', 'POST, PUT, GET, DELETE');
  res.setHeader('access-control-allow-headers', 'x-parse-application-id, x-parse-rest-api-key, Content-Type, Accept');
  next();
});

app.post('/products', function(req, res){
  Product.create(req, res)
})

app.put('/products/:product', function(req, res){
  //the put will include the products id in the request.params
  Product.update(req, res)
})

app.get('/products', function(req, res){
  Product.get(req, res)
})

app.delete('/products/:product', function(req, res){
  //the delete will include the products id in the request.params
  Product.delete(req, res)
})

app.get('*', function(req, res){
  console.log("NOT FOUND");
  res.status(404)
})

app.listen('8000', function(){
  console.log('listening on port 8000');
})