const dashboardRouter = require('express').Router();

const {
    getAllOrders,
    getOrderedItem,
    getStock
} = require('../controllers/dashboard');

dashboardRouter.get('/dashboard', getAllOrders);
dashboardRouter.get('/dashboard', getOrderedItem);
dashboardRouter.get('/dashboard', getStock);

module.exports = dashboardRouter;