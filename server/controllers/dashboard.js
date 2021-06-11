const { /* add here find/create/delete functions from models*/ } = require('../models/dashboard');

const getAllOrders = async (req, res) => {
  const rawData = await /*add here function from model dashboard*/();
  res.json(rawData);
};

const getOrderedItem = async (req, res) => {
  const rawData = await /*add here function from model dashboard*/();
  res.json(rawData);
};

const getStock = async (req, res) => {
    const rawData = await /*add here function from model dashboard*/();
    res.json(rawData);
  };

module.exports = {
    getAllOrders,
    getOrderedItem,
    getStock,
};
