const stockRouter = require('express').Router();

const { getOrderedItem, getStock } = require('./stock.controller');

const { checkauthentication } = require('../../middlewares/authentication');

stockRouter.use(checkauthentication);

stockRouter.get('/stock/', getOrderedItem);
stockRouter.get('/stock', getStock);

module.exports = stockRouter;
