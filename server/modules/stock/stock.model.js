const db = require('../../dbConfig');

// function to retrieve all my products
const findAllStock = async () => {
  try {
    return await db.query('SELECT * FROM stock', []);
  } catch (err) {
    throw new Error(err);
  }
};

/*
// function to disponible a new Stock
const createStock = async (stockId, newStock) => {
  const {
    id,
    availability_date,
    product_id,
    quantity,
  } = newStock;

  try {
    const [insertedStock] = await db.query(
      'INSERT INTO stock (id, availability_date, product_id, quantity) VALUES (?, ?, ? )',
      [
        id,
        availability_date,
        product_id,
        quantity,
      ]
    );
    const createdProduct = {
      id: insertedStock.stockId,
      availability_date,
      product_id,
      quantity,
    };
    return createdProduct;
  } catch (err) {
    throw new Error(err);
  }
};
*/

// function to update one of my products
const updateStock = async (stockId, updatedInfo) => {
  try {
    await db.query('UPDATE product SET ? WHERE id = ?', [updatedInfo, stockId]);
    return updatedInfo;
  } catch (err) {
    throw new Error(err);
  }
};

// function to delete a product
const removeStock = async (stockId) => {
  try {
    await db.query('DELETE FROM stock WHERE id = ?', [stockId]);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  findAllStock,
  //createStock,
  updateStock,
  removeStock,
};