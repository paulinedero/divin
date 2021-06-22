const {
  findAllMyProducts,
  findOneOfMyProducts,
  create,
  update,
  remove,
} = require('./product.model');

const getAllProducts = async (req, res) => {
  try {
    const rawData = await findAllMyProducts(req.params.farmerId);
    res.json(rawData[0]);
  } catch (err) {
    throw new Error(err);
  }
};

const getOneProduct = async (req, res) => {
  try {
    const rawData = await findOneOfMyProducts(
      req.params.farmerId,
      req.params.productId
    );
    res.json(rawData);
  } catch (err) {
    throw new Error(err);
  }
};

const createProduct = async (req, res) => {
  try {
    const rawData = await create(req.params.farmerId, req.body);
    res.status(201).json(rawData);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateProduct = async (req, res) => {
  try {
    const rawData = await update(req.params.productId, req.body);
    res.status(200).json(rawData);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const rawData = await remove(req.params.productId);
    res.status(200).send('Le produit a été supprimé de notre base de données.');
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
