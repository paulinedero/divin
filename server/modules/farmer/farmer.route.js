const farmerRouter = require('express').Router();

const {
  getAllFarmers,
  getOneFarmer,
  updateFarmer,
  updateFarmerAddress,
  deleteFarmer,
} = require('./farmer.controller');

const { checkauthentication } = require('../../middlewares/authentication');

farmerRouter.use(checkauthentication);

farmerRouter.get('/', getAllFarmers);
farmerRouter.get('/:farmerId', getOneFarmer);
// see authentication.route for route createFarmer
farmerRouter.put('/:farmerId', updateFarmer);
farmerRouter.put('/:farmerId/address', updateFarmerAddress);
farmerRouter.delete('/:farmerId', deleteFarmer);

module.exports = farmerRouter;
