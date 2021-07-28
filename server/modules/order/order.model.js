const db = require('../../dbConfig');

// function to check if order already exists
const checkExistingOrder = async (orderId) => {
  try {
    const result = await db.query('SELECT id FROM `order` WHERE id = ?', [
      orderId,
    ]);
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to check if order belongs to farmer
const checkOrderBelongsToFarmer = async (orderId, farmerId) => {
  try {
    const result = await db.query(
      'SELECT order.id, product.farmer_id FROM `order` JOIN ordered_item ON order.id = ordered_item.order_id JOIN product ON ordered_item.product_id WHERE product.farmer_id = ? AND order.id = ?',
      [farmerId, orderId]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to retrieve all farmer's orders
const findMany = async (farmerId) => {
  try {
    const result = await db.query(
      'SELECT order.id, relay_id, status_id, purchase_date, pickup_date, total, ordered_item.product_id, product.name, ordered_item.quantity, product.farmer_id from `order` JOIN ordered_item ON order.id = ordered_item.order_id JOIN product ON ordered_item.product_id = product.id WHERE farmer_id = ?',
      [farmerId]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to retrieve all farmer's orders between dates
const findManyBtwDates = async (farmerId, startdate, enddate) => {
  try {
    const result = await db.query(
      'SELECT order.id, relay_id, status_id, purchase_date, pickup_date, total, ordered_item.product_id, product.name, ordered_item.quantity, product.farmer_id from `order` JOIN ordered_item ON order.id = ordered_item.order_id JOIN product ON ordered_item.product_id = product.id WHERE farmer_id = ? AND order.creation_date BETWEEN ? AND ?',
      [farmerId, startdate, enddate]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to retrieve a specific farmer's order
const findOne = async (farmerId, orderId) => {
  try {
    const result = await db.query(
      'SELECT order.id, relay_id, status_id, purchase_date, pickup_date, total, ordered_item.product_id, product.name, ordered_item.quantity, product.farmer_id from `order` JOIN ordered_item ON order.id = ordered_item.order_id JOIN product ON ordered_item.product_id = product.id WHERE farmer_id = ? AND order.id = ?',
      [farmerId, orderId]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to create a new order
const create = async (newOrder) => {
  const { relay_id, status_id, purchase_date, pickup_date, orderedItems } =
    newOrder;
  try {
    const [insertedOrder] = await db.query(
      'INSERT INTO `order` (relay_id, status_id, purchase_date, pickup_date) VALUES (?, ?, ?, ?)',
      [relay_id, status_id, purchase_date, pickup_date]
    );
    const [insertedOrderedItem] = await db.query(
      'INSERT INTO `orderd_item` (product_id, order_id, quantity) VALUES (?, ?, ?)',
      [orderedItems.product_id, insertedOrder.insertId, orderedItems.quantity]
    );
    const createdOrder = {
      id: insertedOrder.insertId,
      relay_id,
      status_id,
      purchase_date,
      pickup_date,
      insertedOrderedItem,
    };
    return createdOrder;
  } catch (err) {
    throw new Error(err);
  }
};

// function to update an existing order
const update = async (orderId, updatedInfo) => {
  try {
    await db.query('UPDATE `order` SET ? WHERE id = ?', [updatedInfo, orderId]);
    return updatedInfo;
  } catch (err) {
    throw new Error(err);
  }
};

// function to delete an existing order
const remove = async (orderId) => {
  try {
    await db.query('DELETE FROM `order` WHERE id = ?', [orderId]);
  } catch (err) {
    throw new Error(err);
  }
};

// function to get all ordered products from a farmer
const findAllOrderedProducts = async (farmerId) => {
  try {
    const result = await db.query(
      'SELECT order_id, product_id, product.name, quantity, product.farmer_id, order.creation_date FROM ordered_item JOIN product ON product.id = ordered_item.product_id JOIN `order` ON order.id = ordered_item.order_id WHERE product.farmer_id = ? ORDER BY order_id',
      [farmerId]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to get all ordered products in a specific period from a farmer
const findOrderedProductsBtwDates = async (farmerId, startdate, enddate) => {
  try {
    const result = await db.query(
      'SELECT order_id, product_id, product.name, quantity, product.farmer_id, order.creation_date FROM ordered_item JOIN product ON product.id = ordered_item.product_id JOIN `order` ON order.id = ordered_item.order_id WHERE product.farmer_id = ? AND order.creation_date BETWEEN ? AND ? ORDER BY order_id',
      [farmerId, startdate, enddate]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to get the top 5 products per week (update everyday)
const findTopProducts = async (farmerId) => {
  try {
    const result = await db.query(
      'SELECT ANY_VALUE(ordered_item.id) id, SUM(ordered_item.quantity) quantity, product.name, ANY_VALUE(product.farmer_id) farmer, ANY_VALUE(ordered_item.creation_date) date, ANY_VALUE(product.purchase_unit) unite FROM ordered_item, product WHERE ordered_item.product_id = product.id AND farmer_id = ? AND ordered_item.creation_date BETWEEN date(now() - INTERVAL 1 week) AND now() GROUP BY product.name ORDER BY SUM(ordered_item.quantity) DESC LIMIT 5',
      [farmerId]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to get the flop 5 products per week (update everyday)
const findFlopProducts = async (farmerId) => {
  try {
    const result = await db.query(
      'SELECT ANY_VALUE(ordered_item.id) id, SUM(ordered_item.quantity) quantity, product.name, ANY_VALUE(product.farmer_id) farmer, ANY_VALUE(ordered_item.creation_date) date, ANY_VALUE(product.purchase_unit) unite FROM ordered_item, product WHERE ordered_item.product_id = product.id AND farmer_id = ? AND ordered_item.creation_date BETWEEN date(now() - INTERVAL 1 week) AND now() GROUP BY product.name ORDER BY SUM(ordered_item.quantity) ASC LIMIT 5',
      [farmerId]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  checkExistingOrder,
  checkOrderBelongsToFarmer,
  findMany,
  findManyBtwDates,
  findOne,
  create,
  update,
  remove,
  findAllOrderedProducts,
  findOrderedProductsBtwDates,
  findTopProducts,
  findFlopProducts,
};
