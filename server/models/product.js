const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = Schema({
  name: String,
  url: String
}, { strict: 'throw' });


module.exports = mongoose.model('products', productSchema);