// to access the database
const db = require('../../dbConfig');

// function to retrieve all products in Stock from every farmers
const getAllAvailableStock = async () => {
  try {
    return await db.query(
      'SELECT availability_date, product_id, quantity, name, origin, season_id, production_unit, production_price, stock_min, purchase_unit, nutritional_statement, lastname, firstname, farmer_id, VAT_number, siret_number, phone_number, address FROM stock INNER JOIN product ON stock.product_id = product.id INNER JOIN farmer ON product.farmer_id = farmer.id'
    );
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { getAllAvailableStock };
