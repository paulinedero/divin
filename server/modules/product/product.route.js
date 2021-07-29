const productRouter = require('express').Router();

const {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./product.controller');

productRouter.get('/:farmerId/products/', getAllProducts);
productRouter.get('/:farmerId/products/:productId', getOneProduct);
productRouter.post('/:farmerId/products/', createProduct);
productRouter.put('/:farmerId/products/:productId', updateProduct);
productRouter.delete('/:farmerId/products/:productId', deleteProduct);

module.exports = productRouter;
