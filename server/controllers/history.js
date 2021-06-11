const { /* add here find/create/delete functions from models*/ } = require('../models/history');

const getAllOrders = async (req, res) => {
  const rawData = await /*add here function from model history*/();
  res.json(rawData);
};

const getOrdersPerProduct = async (req, res) => {
  const rawData = await /*add here function from model history*/();
  res.json(rawData);
};

module.exports = {
    getAllOrders,
    getOrdersPerProduct,
};