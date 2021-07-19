const db = require('../../dbConfig');

// function to check if favorite already exists
const checkExistingFavorites = async (parentFarmerId) => {
  try {
    const result = await db.query(
      'SELECT * FROM favorite WHERE parent_farmer_id = ?',
      [parentFarmerId]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to retrieve all favorites
const findManyFavorites = async () => {
  try {
    return await db.query(
      'SELECT favorite.id, farmer.firstname, farmer.lastname, farmer.company_name, farmer.email, favorite.parent_farmer_id, favorite.child_farmer_id FROM favorite INNER JOIN farmer ON favorite.parent_farmer_id = farmer.id WHERE isFavorite=true'
    );
  } catch (err) {
    throw new Error(err);
  }
};

// function to create a new favorite
const createFavorites = async (farmerId, child_farmer_id) => {
  try {
    return await db.query(
      'INSERT INTO favorite (parent_farmer_id, child_farmer_id, isFavorite) values (?,?,true)',
      [farmerId, child_farmer_id]
    );
  } catch (err) {
    throw new Error(err);
  }
};

// function to update a farmer
const updateFavorites = async (
  updateInfo,
  parent_farmer_id,
  child_farmer_id
) => {
  try {
    await db.query(
      'UPDATE favorite SET ? WHERE parent_farmer_id = ? AND  child_farmer_id = ?',
      [updateInfo, parent_farmer_id, child_farmer_id]
    );
    return updateInfo;
  } catch (err) {
    throw new Error(err);
  }
};

// function to check if favorite already exists
const updateFavoritesTrue = async (parentFarmerId, child_farmer_id) => {
  try {
    const result = await db.query(
      'UPDATE favorite SET isFavorite=true WHERE parent_farmer_id = ? AND child_farmer_id =? AND isFavorite = false',
      [parentFarmerId, child_farmer_id]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to check if favorite already exists
const updateFavoritesFalse = async (parentFarmerId, child_farmer_id) => {
  try {
    const result = await db.query(
      'UPDATE favorite SET isFavorite=true WHERE parent_farmer_id = ? AND child_farmer_id =? AND isFavorite =true',
      [parentFarmerId, child_farmer_id]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  checkExistingFavorites,
  findManyFavorites,
  createFavorites,
  updateFavorites,
  updateFavoritesTrue,
  updateFavoritesFalse,
};
