const farmerRouter = require('express').Router();

const {
  getAllFarmers,
  getOneFarmer,
  createFarmer,
  updateFarmer,
  updateFarmerAddress,
  deleteFarmer,
} = require('./farmer.controller');

farmerRouter.get('/', getAllFarmers);
farmerRouter.get('/:farmerId', getOneFarmer);
farmerRouter.post('/', createFarmer);
farmerRouter.put('/:farmerId', updateFarmer);
farmerRouter.put('/:farmerId/address', updateFarmerAddress);
farmerRouter.delete('/:farmerId', deleteFarmer);

module.exports = farmerRouter;
