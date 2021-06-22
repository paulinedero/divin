const Joi = require('joi');
const db = require('../../dbConfig');

const {
  findAllMyProducts,
  findOneOfMyProducts,
  create,
  update,
  remove,
} = require('./product.model');

// Validation of fields to create a new product or to update product's datas
const validate = (data) =>
  Joi.object({
    EAN_code: Joi.number(),
    name: Joi.string().alphanum(),
    description: Joi.string(),
    origin: Joi.string().alphanum(),
    farming_type: Joi.number(),
    category: Joi.number(),
    under_category: Joi.number(),
    season_id: Joi.number(),
    transformation: Joi.boolean(),
    nutritional_statement: Joi.string(),
    production_unit: Joi.string().alphanum(),
    production_price: Joi.number(),
    stock_min: Joi.number(),
    stock_max: Joi.number(),
    max_storage_date: Joi.string(),
    purchase_unit: Joi.string(),
    purchase_price: Joi.number(),
    VAT: Joi.number(),
    tag: Joi.string(),
    photo: Joi.string(),
    farmer_id: Joi.number(),
  }).validate(data, { abortEarly: false }).error;

// Retrieve all products for a specific farmer
const getAllProducts = async (req, res) => {
  try {
    const rawData = await findAllMyProducts(req.params.farmerId);
    res.json(rawData[0]);
  } catch (err) {
    throw new Error(err);
  }
};

// Retrieve one product for a specific farmer
const getOneProduct = async (req, res) => {
  try {
    const existingProduct = await db.query(
      'SELECT id FROM `product` WHERE id = ?',
      [req.params.productId]
    );
    if (existingProduct[0].length === 0) {
      res.status(404).send(`Il n'existe pas de produit lié à cet identifiant.`);
    } else {
      const rawData = await findOneOfMyProducts(
        req.params.farmerId,
        req.params.productId
      );
      res.json(rawData);
    }
  } catch (err) {
    throw new Error(err);
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    const error = validate(req.body);
    if (error) {
      res.status(422).json({ validationErrors: error.details });
    } else {
      const rawData = await create(req.params.farmerId, req.body);
      res.status(201).json(rawData);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update an existing product
const updateProduct = async (req, res) => {
  try {
    const existingProduct = await db.query(
      'SELECT id FROM `product` WHERE id = ?',
      [req.params.productId]
    );
    if (existingProduct[0].length === 0) {
      res.status(404).send(`Il n'existe pas de produit lié à cet identifiant.`);
    } else {
      const error = validate(req.body);
      if (error) {
        res.status(422).json({ validationErrors: error.details });
      } else {
        const rawData = await update(req.params.productId, req.body);
        res.status(200).json(rawData);
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Delete an existing product
const deleteProduct = async (req, res) => {
  try {
    const existingProduct = await db.query(
      'SELECT id FROM `product` WHERE id = ?',
      [req.params.productId]
    );
    if (existingProduct[0].length === 0) {
      res.status(404).send(`Il n'existe pas de produit lié à cet identifiant.`);
    } else {
      const rawData = await remove(req.params.productId);
      res
        .status(200)
        .send('Le produit a été supprimé de notre base de données.');
    }
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
