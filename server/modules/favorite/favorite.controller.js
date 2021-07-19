const {
  checkExistingFavorites,
  findManyFavorites,
  createFavorites,
  updateFavoritesFalse,
  updateFavoritesTrue,
} = require('./favorite.model');

// Retrieve all favorites
const getAllFavorites = async (req, res) => {
  try {
    const rawData = await findManyFavorites();
    res.json(rawData[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Create a new favorites to each farmer
const createFarmersFavorites = async (req, res) => {
  try {
    const existingFavoriteId = await checkExistingFavorites(
      req.body.parentFarmerId
    );
    if (existingFavoriteId.length > 0) {
      res.status(409).send(`Cette personne est déjà un de vous favorits.`);
    } else {
      const rawData = await createFavorites(req.body);
      res.status(201).json(rawData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// Update existing farmer's datas
const updateFarmersFavorites = async (req, res) => {
  try {
    const existingFarmer = await checkExistingFavorites(
      req.body.parentFarmerId
    );
    if (existingFarmer.length === 0) {
      res
        .status(404)
        .send(`Il n'existe pas de producteur lié à cet identifiant.`);
    } else {
      const updateTrue = await findManyFavorites(req.body.parentFarmerId);
      if (updateTrue === true) {
        const rawData = await updateFavoritesFalse(req.body);
        res.status(201).json(rawData);
      } else {
        const rawData = await updateFavoritesTrue(req.body);
        res.status(201).json(rawData);
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllFavorites,
  createFarmersFavorites,
  updateFarmersFavorites,
};
