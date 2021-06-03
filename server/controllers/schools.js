// const {
//     findMany,
//     findOne,
//     findWizards
// } = require('../models/schools');

const getAllSchools = async (req, res) => {
  // const rawData = await findMany();
  const rawData = ['Poudlard', 'Geoffres'];
  res.json(rawData);
};

const getOneSchool = async (req, res) => {
  // const rawData = await findOne(req.params.id);
  const rawData = 'Poudlard';

  res.json(rawData);
};

const getWizardFromSchool = async (req, res) => {
  // const rawData = await findWizards(req.params.id);
  const rawData = ['Harry Potter', 'Drago Malfoi'];

  res.json(rawData);
};

module.exports = {
  getAllSchools,
  getOneSchool,
  getWizardFromSchool,
};
