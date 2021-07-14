// const { /* add here find/create/delete functions from models*/ } = require('./stock.model');
const Joi = require('joi');

const {
  checkExistingFarmer,
  checkExistingProduct,
  checkExistingStock,
  findAllProductsFromFarmerInStock,
  findOneProductFromFarmerInStock,
  createStock,
  updateStock,
  removeStock,
} = require('./stock.model');

// Validation of fields to create a new product or to update product's datas
const validate = (data) =>
  Joi.object({
    availability_date: Joi.date().raw().required(),
    product_id: Joi.number(),
    quantity: Joi.number(),
  }).validate(data, { abortEarly: false }).error;

// Retrieve all products in stock for a specific farmer
const getAllFarmerProductsInStock = async (req, res) => {
  try {
    const existingFarmer = await checkExistingFarmer(req.params.farmerId);
    if (existingFarmer.length === 0) {
      res.status(404).send(`Producteur inconnue.`);
    } else {
      const rawData = await findAllProductsFromFarmerInStock(
        req.params.farmerId
      );
      res.json(rawData[0]);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Retrieve one product in stock for a specific farmer
const getOneFarmerProductsInStock = async (req, res) => {
  try {
    const existingFarmer = await checkExistingFarmer(req.params.farmerId);
    if (existingFarmer.length === 0) {
      res.status(404).send(`Producteur inconnue lié à cet stock.`);
    } else {
      const existingProduct = await checkExistingProduct(req.params.productId);
      if (existingProduct.length === 0) {
        res.status(404).send(`Produit inexistant dans ce stock.`);
      } else {
        const rawData = await findOneProductFromFarmerInStock(
          req.params.farmerId,
          req.params.productId,
          req.params.stockId
        );
        res.json(rawData);
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Create a new product available in Stock(make it available) if product already exists in this farmerId
const createProductInStock = async (req, res) => {
  try {
    const error = validate(req.body);
    if (error) {
      res.status(422).json({ validationErrors: error.details });
    } else {
      const rawData = await createStock(
        req.params.farmerId,
        req.params.productId,
        req.body
      );
      res.status(201).json(rawData);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update an existing product
const updateProductInStock = async (req, res) => {
  try {
    const existingProduct = await checkExistingProduct(req.params.productId);
    if (existingProduct.length === 0) {
      res.status(404).send(`Produit inexistant.`);
    } else {
      const existingStock = await checkExistingStock(req.params.stockId);
      if (existingStock.length === 0) {
        res.status(404).send(`Produit inconnue dans le stock.`);
      } else {
        const error = validate(req.body);
        if (error) {
          res.status(422).json({ validationErrors: error.details });
        } else {
          const rawData = await updateStock(
            req.params.stockId,
            req.params.updatedDate,
            req.params.updatedQuantity
          );
          res.status(200).json(rawData);
        }
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Delete an existing product available in stock. It is different to update a value in a existing product in the stock
const deleteProductFromStock = async (req, res) => {
  try {
    const existingFarmer = await checkExistingFarmer(req.params.farmerId);
    if (existingFarmer.length === 0) {
      res.status(404).send(`Producteur inconnue ou produit inexistant.`);
    } else {
      const existingProduct = await checkExistingProduct(req.params.productId);
      if (existingProduct.length === 0) {
        res.status(404).send(`Produit inexistant.`);
      } else {
        const existingStock = await checkExistingStock(req.params.stockId);
        if (existingStock.length === 0) {
          res.status(404).send(`Produit inconnue dans le stock.`);
        } else {
          const rawData = await removeStock(req.params.stockId);
          res.status(200).send('Le produit a été supprimé du Stock.');
        }
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllFarmerProductsInStock,
  getOneFarmerProductsInStock,
  createProductInStock,
  updateProductInStock,
  deleteProductFromStock,
};
