const stockRouter = require('express').Router();

const { getAllStocksFarmer } = require('./admin.controller');

stockRouter.get('/', getAllStocksFarmer); // to be available for administration app and control stock
module.exports = stockRouter;
