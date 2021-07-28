const favoriteRouter = require('express').Router();
const { getAllFavoritesFromOneFarmer } = require('./favorite.controller');

favoriteRouter.get('/:farmerId/favorites', getAllFavoritesFromOneFarmer);
// favoriteRouter.post('/:farmerId/favorites');
// favoriteRouter.put('/:farmerId/favorite/:favoriteId');

module.exports = favoriteRouter;
