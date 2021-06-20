const productRouter = require('express').Router();

const {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  // getProductOverview,
} = require('./product.controller');

productRouter.get('/:userId/product/', getAllProducts);
productRouter.get('/:userId/product/:productId', getOneProduct);
productRouter.post('/:userId/product/', createProduct);
productRouter.put('/:userId/product/:productId', updateProduct);
productRouter.delete('/:userId/product/:productId', deleteProduct);
// productRouter.get('/overview', getProductOverview);

module.exports = productRouter;
