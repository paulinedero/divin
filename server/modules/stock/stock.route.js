const stockRouter = require('express').Router();

const {
    getOrderedItem,
    getStock,
} = require('./stock.controller');

stockRouter.get('/stock/', getOrderedItem);
stockRouter.get('/stock', getStock);

module.exports = stockRouter;