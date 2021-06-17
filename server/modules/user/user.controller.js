const { findMany, findOne, create, update, remove } = require('./user.model');

const getAllUsers = async (req, res) => {
  const rawData = await findMany();
  res.json(rawData[0]);
};

const getOneUser = async (req, res) => {
  const rawData = await findOne(req.params.id);
  res.json(rawData);
};

const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const rawData = await create(req.body);
    res.status(201).json(rawData);
    console.log('successfully created');
  } catch (err) {
    res.status(500).send('Error saving your information');
  }
};

const updateUser = async (req, res) => {
  const userPropsToUpdate = req.body;
  const rawData = await update(req.params.id);
  res.json(rawData);
};

const deleteUser = async (req, res) => {
  const rawData = await remove(req.params.id);
  res.json(rawData);
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
