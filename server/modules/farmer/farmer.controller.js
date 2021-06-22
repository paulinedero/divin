const Joi = require('joi');
const db = require('../../dbConfig');

const {
  findMany,
  findOne,
  create,
  update,
  updateAddress,
  remove,
} = require('./farmer.model');

// Validation of fields to create a new farmer or to update farmer's datas
const validate = (data) =>
  Joi.object({
    email: Joi.string().email(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
    company_name: Joi.string(),
    lastname: Joi.string().alphanum(),
    firstname: Joi.string().alphanum(),
    birthdate: Joi.date(),
    address: {
      street: Joi.string().max(350),
      street_number: Joi.number(),
      zip_code: Joi.number(),
      city: Joi.string().alphanum(),
      country: Joi.number(),
    },
    phone_number: Joi.string().alphanum(),
    siret_number: Joi.number(),
    description: Joi.string(),
  }).validate(data, { abortEarly: false }).error;

// Validation of fields to update farmer's address
const validateAddress = (data) =>
  Joi.object({
    street: Joi.string().max(350),
    street_number: Joi.number(),
    zip_code: Joi.number(),
    city: Joi.string().alphanum(),
    country: Joi.number(),
  }).validate(data, { abortEarly: false }).error;

// Retrieve all farmers
const getAllFarmers = async (req, res) => {
  try {
    const rawData = await findMany();
    res.json(rawData[0]);
  } catch (err) {
    throw new Error(err);
  }
};

// Retrieve one farmer
const getOneFarmer = async (req, res) => {
  try {
    const existingFarmer = await db.query(
      'SELECT id FROM `farmer` WHERE id = ?',
      [req.params.farmerId]
    );
    if (existingFarmer[0].length === 0) {
      res
        .status(404)
        .send(`Il n'existe pas de producteur lié à cet identifiant.`);
    } else {
      const rawData = await findOne(req.params.farmerId);
      res.json(rawData);
    }
  } catch (err) {
    throw new Error(err);
  }
};

// Create a new farmer
const createFarmer = async (req, res) => {
  try {
    const checkExistingEmail = await db.query(
      'SELECT email FROM `farmer` WHERE email = ?',
      [req.body.email]
    );
    const existingEmail = Object.values(
      JSON.parse(JSON.stringify(checkExistingEmail[0][0]))
    );
    if (existingEmail[0] === req.body.email) {
      res
        .status(409)
        .send(
          `L'adresse email renseignée existe déjà dans notre base de données.`
        );
    } else {
      const error = validate(req.body);
      if (error) {
        res.status(422).json({ validationErrors: error.details });
      } else {
        const rawData = await create(req.body);
        res.status(201).json(rawData);
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update existing farmer's datas
const updateFarmer = async (req, res) => {
  try {
    const existingFarmer = await db.query(
      'SELECT id FROM `farmer` WHERE id = ?',
      [req.params.farmerId]
    );
    if (existingFarmer[0].length === 0) {
      res
        .status(404)
        .send(`Il n'existe pas de producteur lié à cet identifiant.`);
    } else {
      const error = validate(req.body);
      if (error) {
        res.status(422).json({ validationErrors: error.details });
      } else {
        const rawData = await update(req.params.farmerId, req.body);
        res.status(200).json(rawData);
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update existing farmer's address
const updateFarmerAddress = async (req, res) => {
  try {
    const existingFarmer = await db.query(
      'SELECT id FROM `farmer` WHERE id = ?',
      [req.params.farmerId]
    );
    if (existingFarmer[0].length === 0) {
      res
        .status(404)
        .send(`Il n'existe pas de producteur lié à cet identifiant.`);
    } else {
      const error = validateAddress(req.body);
      if (error) {
        res.status(422).json({ validationErrors: error.details });
      } else {
        const rawData = await updateAddress(req.params.farmerId, req.body);
        res.status(200).json(rawData);
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Delete existing farmer
const deleteFarmer = async (req, res) => {
  try {
    const existingFarmer = await db.query(
      'SELECT id FROM `farmer` WHERE id = ?',
      [req.params.farmerId]
    );
    if (existingFarmer[0].length === 0) {
      res
        .status(404)
        .send(`Il n'existe pas de producteur lié à cet identifiant.`);
    } else {
      const rawData = await remove(req.params.farmerId);
      res
        .status(200)
        .send('Vos données ont été supprimées de notre base de données.');
    }
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getAllFarmers,
  getOneFarmer,
  createFarmer,
  updateFarmer,
  updateFarmerAddress,
  deleteFarmer,
};
