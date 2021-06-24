const orderRouter = require('express').Router();

const { getAllOrders, getOrdersPerProduct } = require('./order.controller');

orderRouter.get('/orders', getAllOrders);
orderRouter.get('/orders?', getOrdersPerProduct);

module.exports = orderRouter;