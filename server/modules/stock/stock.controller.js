const { /* add here find/create/delete functions from models*/ } = require('./stock.model');

const getOrderedItem = async (req, res) => {
  const rawData = await /*add here function from model dashboard*/();
  res.json(rawData);
};

const getStock = async (req, res) => {
  const rawData = await /*add here function from model dashboard*/();
  res.json(rawData);
};

const getAllStock = async (req, res) => {
  try {
    const rawData = await findAllStock(req.params.stockId);
    res.json(rawData[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Create a new Stock
const createStock = async (req, res) => {
  try {
    const error = validate(req.body);
    if (error) {
      res.status(422).json({ validationErrors: error.details });
    } else {
      const rawData = await create(req.params.stockId, req.body);
      res.status(201).json(rawData);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getOrderedItem,
  getStock,
  getAllStock,
};