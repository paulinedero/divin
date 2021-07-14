const stockRouter = require('express').Router();

const {
  getAllFarmerProductsInStock,
  getOneFarmerProductsInStock,
  createProductInStock,
  updateProductInStock,
  deleteProductFromStock,
} = require('./stock.controller');

stockRouter.get('/:farmerId/stocks', getAllFarmerProductsInStock);
stockRouter.get(
  '/:farmerId/products/:productId/stocks/:stockId',
  getOneFarmerProductsInStock
);

stockRouter.post('/:farmerId/products/:productId/stocks', createProductInStock);
stockRouter.put(
  '/:farmerId/products/:productId/stocks/:stockId',
  updateProductInStock
);
stockRouter.delete(
  '/:farmerId/products/:productId/stocks/:stockId',
  deleteProductFromStock
);

module.exports = stockRouter;
