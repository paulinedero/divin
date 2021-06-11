const dashboardRouter = require('express').Router();

const {
    getAllOrders,
    getOrdersPerProduct,
} = require('../controllers/dashboard');

dashboardRouter.get('/dashboard', getAllOrders);
dashboardRouter.get('/dashboard', getOrdersPerProduct);

module.exports = dashboardRouter;