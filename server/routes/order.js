const orderRouter = require('express').Router();

const {
    getAllOrders,
    getOrdersPerProduct,
} = require('../controllers/order');

orderRouter.get('/dashboard', getAllOrders);
orderRouter.get('/history', getOrdersPerProduct);

module.exports = orderRouter;