const { findMany } = require('./favorite.model');

// Retrieve all favorite
const getAllFavoritesFromOneFarmer = async (req, res) => {
  try {
    const rawData = await findMany(req.params.farmerId);
    res.json(rawData[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllFavoritesFromOneFarmer,
};
