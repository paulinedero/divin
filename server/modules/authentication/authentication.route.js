const authRouter = require('express').Router();

const { getLoggedInAsFarmer } = require('./authentication.controller');
const { createFarmer } = require('../farmer/farmer.controller');

authRouter.post('/login', getLoggedInAsFarmer); // link to autehntication.controller
authRouter.post('/register', createFarmer); // link to farmer.controller

module.exports = authRouter;
