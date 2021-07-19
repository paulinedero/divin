const favoriteRouter = require('express').Router();

const {
  getAllFavorites,
  createFarmersFavorites,
  updateFarmersFavorites,
} = require('./favorite.controller');

favoriteRouter.get('/:farmerId/favorites/', getAllFavorites);
favoriteRouter.post('/:farmerId/favorites/', createFarmersFavorites);
favoriteRouter.put(
  '/:farmerId/favorites/:favoritesFarmersId',
  updateFarmersFavorites
);

module.exports = favoriteRouter;
