const Product = require('../models/product.js');

exports.create = (request, response) => {
  const product = Object.assign({}, request.body);
  Product.create(product)
  .then(result => response.status(201).json(result))
  .catch((err) => console.log("product.create error", err));
};

exports.get = (request, response) => {
  Product.find()
  .then(function(result) {
    console.log("request.query", request.query)
    if(request.query.range){
      return result.splice(0,request.query.range);
    } else  {
      return result;
    }
  })
  .then(result => response.status(200).json(result))
  .catch((err) => console.log("product.get error", err));
};

exports.update = (request, response) => {
  Product.findById(request.params.product).exec()
  .then((data) => {
    const doc = data;
    doc.heartBeat = request.body.heartBeat;
    return doc.save();
  })
  .then((result) => {
    response.status(200).json(result);
  })
  .catch((err) => console.log("product.update error", err));
};

exports.delete = (request, response) => {
  Product.findById(request.params.product).exec()
  .then(doc => doc.remove())
  .then(doc => response.status(200).json(doc))
  .catch((err) => console.log("product.delete error", err));
};