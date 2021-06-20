const {
  findMany,
  findOne,
  create,
  update,
  updateAddress,
  remove,
} = require('./user.model');

const getAllUsers = async (req, res) => {
  const rawData = await findMany();
  res.json(rawData[0]);
};

const getOneUser = async (req, res) => {
  const rawData = await findOne(req.params.id);
  res.json(rawData);
};

const createUser = async (req, res) => {
  try {
    const rawData = await create(req.body);
    res.status(201).json(rawData);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const rawData = await update(req.params.id, req.body);
    res.status(200).json(rawData);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateUserAddress = async (req, res) => {
  try {
    const rawData = await updateAddress(req.params.id, req.body);
    res.status(200).json(rawData);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteUser = async (req, res) => {
  const rawData = await remove(req.params.id);
  res
    .status(200)
    .send('Vos données ont été supprimées de notre base de données');
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  updateUserAddress,
  deleteUser,
};
