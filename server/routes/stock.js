const stockRouter = require('express').Router();

const {
    getOrderedItem,
    getStock,
} = require('../controllers/stock');

stockRouter.get('/dashboard', getOrderedItem);
stockRouter.get('/dashboard', getStock);

module.exports = stockRouter;