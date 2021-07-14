const farmerRouter = require('express').Router();

const {
  getAllFarmers,
  getOneFarmer,
  createFarmer,
  getLoggedInAsFarmer,
  updateFarmer,
  updateFarmerAddress,
  deleteFarmer,
} = require('./farmer.controller');

farmerRouter.get('/', getAllFarmers);
farmerRouter.get('/:farmerId', getOneFarmer);
farmerRouter.post('/', createFarmer);
farmerRouter.post('/login', getLoggedInAsFarmer);
farmerRouter.put('/:farmerId', updateFarmer);
farmerRouter.put('/:farmerId/address', updateFarmerAddress);
farmerRouter.delete('/:farmerId', deleteFarmer);

module.exports = farmerRouter;
