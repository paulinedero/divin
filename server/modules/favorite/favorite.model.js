const db = require('../../dbConfig');

const findMany = async (farmerId) => {
  try {
    const result = await db.query(
      'SELECT favorite.id, farmer.firstname, farmer.lastname, farmer.company_name, farmer.email FROM favorite INNER JOIN farmer ON favorite.parent_farmer_id = farmer.id WHERE isFavorite=true AND farmer.id=?',
      [farmerId]
    );
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  findMany,
};
