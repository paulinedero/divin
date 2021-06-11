const historyRouter = require('express').Router();

const {
    getAllOrders,
    getOrdersPerProduct,
} = require('../controllers/history');

historyRouter.get('/history', getAllOrders);
historyRouter.get('/history', getOrdersPerProduct);

module.exports = historyRouter;