const {/* add here find/create/delete functions from models*/ } = require('./product.model');

const getAllProducts = async (req, res) => {
    const rawData = await /*add here function from model product*/();
    res.json(rawData);
};

const getOneProduct = async (req, res) => {
    const rawData = await /*add here function from model product*/(req.params.id);
    res.json(rawData);
};

const getOneProductDetail = async (req, res) => {
    const rawData = await /*add here function from model product*/(req.params.id);
    res.json(rawData);
};

const createProduct = async (req, res) => {
    const {/*add arguments here*/} = req.body;
    const rawData = await /*add here function from model product*/(req.body);
    res.json(rawData);
};

const updateProduct = async (req, res) => {
    const productPropsToUpdate = req.body;
    const rawData = await /*add here function from model product*/(req.params.id);
    res.json(rawData);
};

const deleteProduct = async (req, res) => {
    const rawData = await /*add here function from model product*/(req.params.id);
    res.json(rawData);
};

const getProductOverview = async (req, res) => {
    const rawData = await /*add here function from model product*/();
    res.json(rawData);
};

module.exports = {
    getAllProducts,
    getOneProduct,
    getOneProductDetail,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductOverview,
};