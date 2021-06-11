const historyRouter = require('express').Router();

const { /*add here controllers functions*/ } = require('../controllers/history');
historyRouter.get('/history', /*add here a controller function*/);

module.exports = historyRouter;