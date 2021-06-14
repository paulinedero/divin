const stockRouter = require('express').Router();

const {
    getOrderedItem,
    getStock,
} = require('./stock.controller');

stockRouter.get('/dashboard', getOrderedItem);
stockRouter.get('/dashboard', getStock);

module.exports = stockRouter;