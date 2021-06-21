const {
  findAllMyProducts,
  findOneOfMyProducts,
  create,
  update,
  remove,
} = require('./product.model');

const getAllProducts = async (req, res) => {
  const rawData = await findAllMyProducts(req.params.userId);
  res.json(rawData[0]);
};

const getOneProduct = async (req, res) => {
  const rawData = await findOneOfMyProducts(
    req.params.userId,
    req.params.productId
  );
  res.json(rawData);
};

const createProduct = async (req, res) => {
  try {
    const rawData = await create(req.params.userId, req.body);
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
  const rawData = await remove(req.params.productId);
  res.status(200).send('Le produit a été supprimé de notre base de données.');
};

/*
const getProductOverview = async (req, res) => {
    const rawData = await add here function from model product();
    res.json(rawData);
};
*/

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
