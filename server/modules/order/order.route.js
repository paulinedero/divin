const orderRouter = require('express').Router();

const {
    getAllOrders,
    getOrdersPerProduct,
} = require('./order.controller');

orderRouter.get('/dashboard', getAllOrders);
orderRouter.get('/history', getOrdersPerProduct);

module.exports = orderRouter;