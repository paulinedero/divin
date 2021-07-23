const { findCountries } = require('./country.model');

const getAllCountries = async (req, res) => {
  try {
    const rawData = await findCountries();
    res.json(rawData[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllCountries,
};
