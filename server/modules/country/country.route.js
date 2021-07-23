const countryRouter = require('express').Router();

const { getAllCountries } = require('./country.controller');

countryRouter.get('/', getAllCountries);

module.exports = countryRouter;
