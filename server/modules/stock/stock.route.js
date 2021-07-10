const stockRouter = require('express').Router();

// Pauline?
// getOrderedItem ?!?

// stockRouter.get('/stock/', getOrderedItem);
// stockRouter.get('/:farmerId/products/stock/', getAllStock);

const {
  getAllFarmersStock,
  getAllFarmerProductsInStock,
  getOneFarmerProductInStock,
  createProductInStock,
  updateProductInStock,
  deleteProductFromStock,
} = require('./stock.controller');

stockRouter.get('/products/stock', getAllFarmersStock); // to be available for administration app and control now
stockRouter.get('/:farmerId/products/stock/', getAllFarmerProductsInStock); // or /:farmerId/stock/products
stockRouter.get('/:farmerId/products/stock/:stockId', getOneFarmerProductInStock); // or /:farmerId/stock/products
stockRouter.post('/:farmerId/products/stock/', createProductInStock);
stockRouter.put('/:farmerId/products/stock/:stockId', updateProductInStock);
stockRouter.delete('/:farmerId/products/stock/:stockId', deleteProductFromStock);

module.exports = stockRouter;
