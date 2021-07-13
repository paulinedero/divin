// to access the database
const db = require('../../dbConfig');

// VARIABLES TO DO VALIDATION //
// function to check if product already exists
const checkExistingFarmer = async (farmerId) => {
  try {
    const result = await db.query('SELECT id FROM `farmer` WHERE id = ?', [
      farmerId,
    ]);
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to check if product already exists
const checkExistingProduct = async (productId) => {
  try {
    const result = await db.query(
      'SELECT id, name FROM `product` WHERE id = ?',
      [productId]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// VARIABLES TO MANAGE THE Stock IN DATANASE
// function to retrieve all my products wicth they are in stock
const findAllProductsFromFarmerInStock = async (farmer_id) => {
  try {
    return await db.query(
      'SELECT name, availability_date, quantity, production_unit, production_price, purchase_unit, product_id, nutritional_statement, season_id, origin, lastname, firstname, farmer_id, VAT_number, siret_number, phone_number, address FROM stock INNER JOIN product ON stock.product_id = product.id INNER JOIN farmer ON product.farmer_id = farmer.id WHERE farmer_id = ?',
      [farmer_id]
    );
  } catch (err) {
    throw new Error(err);
  }
};

// function to retrieve one of my products
const findOneProductFromFarmerInStock = async (
  farmerId,
  productId,
  stockId
) => {
  try {
    const result = await db.query(
      'SELECT stock.id, name, availability_date, quantity, production_unit, production_price, purchase_unit, product_id, nutritional_statement, season_id, origin, lastname, firstname, farmer_id, VAT_number, siret_number, phone_number, address FROM stock INNER JOIN product ON stock.product_id=product.id INNER JOIN farmer ON product.farmer_id=farmer.id WHERE farmer.id=? AND product.id=? AND stock.id=?',
      [farmerId, productId, stockId]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to create a new product available in Stock
const createStock = async (farmerId, productId, newStock) => {
  const { availability_date, product_id, quantity, creation_date } = newStock;
  try {
    const [insertedStock] = await db.query(
      'INSERT INTO stock (availability_date, product_id, quantity) VALUES (?, ?, ?)',
      [availability_date, product_id, quantity]
    );
    const createdStock = {
      id: insertedStock.insertId,
      availability_date,
      product_id,
      quantity,
      creation_date,
    };
    return createdStock;
  } catch (err) {
    throw new Error(err);
  }
};

// function to update one of my products in Stock
const updateStock = async (updatedDate, updatedQuantity, stockId) => {
  try {
    await db.query(
      'UPDATE stock SET availability_date= ?, quantity= ? WHERE id=?',
      [updatedDate, updatedQuantity, stockId]
    );
    return updatedDate;
  } catch (err) {
    throw new Error(err);
  }
};

// function to remove one of my products from Stock
const removeStock = async (stockId) => {
  try {
    await db.query('DELETE FROM stock WHERE id = ?', [stockId]);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  checkExistingFarmer,
  checkExistingProduct,
  findAllProductsFromFarmerInStock,
  findOneProductFromFarmerInStock,
  createStock,
  updateStock,
  removeStock,
};
