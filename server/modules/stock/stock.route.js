const stockRouter = require('express').Router();

const {
  getAllFarmerProductsInStock,
  getOneFarmerProductsInStock,
  createProductInStock,
  updateProductInStock,
  deleteProductFromStock,
} = require('./stock.controller');

const { checkauthentication } = require('../../middlewares/authentication');

stockRouter.use(checkauthentication);

stockRouter.get('/:farmerId/stocks', getAllFarmerProductsInStock);
stockRouter.get(
  '/:farmerId/products/:productId/stocks/:stockId',
  getOneFarmerProductsInStock
);
// BAPTISTE INFO IMPORTANT!!! La route est bonne? Si oui, voir la note suivante! || sinon, tu es sure? Pourquoi pas ? si j'ai besoin du productId pour injecter sur stock?
stockRouter.post('/:farmerId/products/:productId/stocks', createProductInStock);
// BAPTISTE, VERIFIE STP le MODEL CORRESPONDENT

stockRouter.put('/:farmerId/stocks/:stockId', updateProductInStock);
stockRouter.delete('/:farmerId/stocks/:stockId', deleteProductFromStock);

module.exports = stockRouter;
