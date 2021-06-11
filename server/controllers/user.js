const {/* add here find/create/delete functions from models*/ } = require('../models/user');

const getAllUsers = async (req, res) => {
    const rawData = await /*add here function from model user*/();
    res.json(rawData);
};

const getOneUser = async (req, res) => {
    const rawData = await /*add here function from model user*/(req.params.id);
    res.json(rawData);
};

const createUser = async (req, res) => {
    const {/*add arguments here*/} = req.body;
    const rawData = await /*add here function from model user*/(req.body);
    res.json(rawData);
};

const updateUser = async (req, res) => {
    const userPropsToUpdate = req.body;
    const rawData = await /*add here function from model user*/(req.params.id);
    res.json(rawData);
};

const deleteUser = async (req, res) => {
    const rawData = await /*add here function from model user*/(req.params.id);
    res.json(rawData);
};

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
};