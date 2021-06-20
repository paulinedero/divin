const db = require('../../dbConfig');

// function to retrieve all my products
const findAllMyProducts = async (userId) => {
  return await db.query('SELECT * FROM product WHERE farmer_id = ?', [userId]);
};

// function to retrieve one of my products
const findOneOfMyProducts = async (userId, productId) => {
  const result = await db.query(
    'SELECT * FROM product WHERE farmer_id = ? AND id = ?',
    [userId, productId]
  );
  return result[0];
};

// function to create a new product
const create = async (userId, newProduct) => {
  const {
    EAN_code,
    name,
    description,
    origin,
    farming_type,
    category,
    under_category,
    season_id,
    transformation,
    nutritional_statement,
    production_unit,
    production_price,
    stock_min,
    stock_max,
    max_storage_date,
    purchase_unit,
    purchase_price,
    VAT,
    tag,
    photo,
  } = newProduct;

  try {
    const [insertedProduct] = await db.query(
      'INSERT INTO product (EAN_code, name, description, origin, farming_type, category, under_category, season_id, transformation, nutritional_statement, production_unit, production_price, stock_min, stock_max, max_storage_date, purchase_unit, purchase_price, VAT, tag, photo, farmer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )',
      [
        EAN_code,
        name,
        description,
        origin,
        farming_type,
        category,
        under_category,
        season_id,
        transformation,
        nutritional_statement,
        production_unit,
        production_price,
        stock_min,
        stock_max,
        max_storage_date,
        purchase_unit,
        purchase_price,
        VAT,
        tag,
        photo,
        userId,
      ]
    );
    const createdProduct = {
      id: insertedProduct.insertId,
      EAN_code,
      name,
      description,
      origin,
      farming_type,
      category,
      under_category,
      season_id,
      transformation,
      nutritional_statement,
      production_unit,
      production_price,
      stock_min,
      stock_max,
      max_storage_date,
      purchase_unit,
      purchase_price,
      VAT,
      tag,
      photo,
    };
    return createdProduct;
  } catch (err) {
    throw new Error(err);
  }
};

// function to update one of my products
const update = async (productId, updatedInfo) => {
  try {
    await db.query('UPDATE product SET ? WHERE id = ?', [
      updatedInfo,
      productId,
    ]);
    return updatedInfo;
  } catch (err) {
    throw new Error(err);
  }
};

// function to delete a product
const remove = async (productId) => {
  await db.query('DELETE FROM product WHERE id = ?', [productId]);
};

module.exports = {
  findAllMyProducts,
  findOneOfMyProducts,
  create,
  update,
  remove,
};
