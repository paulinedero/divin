const stockRouter = require('express').Router();

const {
    // getOrderedItem,
    // getStock,
    getAllStock,
} = require('./stock.controller');

// stockRouter.get('/stock/', getOrderedItem);
// stockRouter.get('/stock', getStock);
stockRouter.get('/stockavailable', getAllStock);

module.exports = stockRouter;
