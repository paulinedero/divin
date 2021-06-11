const networkRouter = require('express').Router();

const { getAllFarmers } = require('../controllers/network');

networkRouter.get('/network', getAllFarmers);

module.exports = networkRouter;