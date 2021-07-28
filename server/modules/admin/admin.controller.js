// const { /* add here find/create/delete functions from models*/ } = require('./stock.model');
// const Joi = require('joi');
const { getAllAvailableStock } = require('./admin.model');

// Retrieve all products in stock for ALL farmers
const getAllStocksFarmer = async (req, res) => {
  try {
    const rawData = await getAllAvailableStock();
    res.json(rawData[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getAllStocksFarmer };
