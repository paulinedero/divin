const { /* add here find/create/delete functions from models*/ } = require('../models/stock');

const getOrderedItem = async (req, res) => {
  const rawData = await /*add here function from model dashboard*/();
  res.json(rawData);
};

const getStock = async (req, res) => {
    const rawData = await /*add here function from model dashboard*/();
    res.json(rawData);
  };

module.exports = {
    getOrderedItem,
    getStock,
};