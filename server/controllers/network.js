const { /* add here find/create/delete functions from models*/ } = require('../models/network');

const getAllFarmers = async (req, res) => {
  const rawData = await /*add here function from model network*/();
  res.json(rawData);
};

module.exports = {
    getAllFarmers,
};