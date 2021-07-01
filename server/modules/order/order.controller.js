const Joi = require('joi');

const {
  checkExistingOrder,
  checkOrderBelongsToFarmer,
  findMany,
  findOne,
  create,
  update,
  remove,
  findAllOrderedProducts,
  findOrderedProductsBtwDates,
  findTopProducts,
  findFlopProducts,
} = require('./order.model');

// Validation of fields to create a new order or to update order's datas
const validate = (data) =>
  Joi.object({
    relay_id: Joi.number(),
    status_id: Joi.number(),
    purchase_date: Joi.date(),
    pickup_date: Joi.date(),
    ordered_item: {
      product_id: Joi.number(),
      order_id: Joi.number(),
      quantity: Joi.number(),
    },
  }).validate(data, { abortEarly: false }).error;

// Retrieve all orders of a farmer
const getAllOrders = async (req, res) => {
  const rawData = await findMany();
  res.json(rawData);
};

// Retrieve a specific order for a farmer
const getOneOrder = async (req, res) => {
  try {
    const existingOrder = await checkExistingOrder(req.params.orderId);
    if (existingOrder.length === 0) {
      res
        .status(404)
        .send(`Il n'existe pas de commande lié à cet identifiant.`);
    } else {
      const existingOrderForFarmer = await checkOrderBelongsToFarmer(
        req.params.farmerId,
        req.params.orderId
      );
      if (existingOrderForFarmer.length === 0) {
        res
          .status(403)
          .send(
            `Vous n'êtes pas authorisé à consulter les données de cette commande.`
          );
      } else {
        const rawData = await findOne(req.params.farmerId, req.params.orderId);
        res.json(rawData);
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const createOrder = async (req, res) => {
  try {
    const error = validate(req.body);
    if (error) {
      res.status(422).json({ validationErrors: error.details });
    } else {
      const rawData = await create(req.body);
      res.status(201).json(rawData);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateOrder = async (req, res) => {
  try {
    const existingOrder = await checkExistingOrder(req.params.orderId);
    if (existingOrder.length === 0) {
      res
        .status(404)
        .send(`Il n'existe pas de commande lié à cet identifiant.`);
    } else {
      const existingOrderForFarmer = await checkOrderBelongsToFarmer(
        req.params.farmerId,
        req.params.orderId
      );
      if (existingOrderForFarmer.length === 0) {
        res
          .status(403)
          .send(
            `Vous n'êtes pas authorisé à modifier les données de cette commande`
          );
      } else {
        const error = validate(req.body);
        if (error) {
          res.status(422).json({ validationErrors: error.details });
        } else {
          const rawData = await update(req.body);
          res.json(rawData);
        }
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const existingOrder = await checkExistingOrder(req.params.orderId);
    if (existingOrder.length === 0) {
      res
        .status(404)
        .send(`Il n'existe pas de commande lié à cet identifiant.`);
    } else {
      const existingOrderForFarmer = await checkOrderBelongsToFarmer(
        req.params.farmerId,
        req.params.orderId
      );
      if (existingOrderForFarmer.length === 0) {
        res
          .status(403)
          .send(
            `Vous n'êtes pas autorisé à supprimer les données de cette commande`
          );
      } else {
        const rawData = await remove(req.params.farmerId);
        res
          .status(200)
          .send('La commande a été supprimée de notre base de données.');
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const getAllOrderedItems = async (req, res) => {
  try {
    const rawData = await findAllOrderedProducts(req.params.farmerId);
    if (rawData.length === 0) {
      res.status(404).send(`Aucune commande n'a été trouvée.`);
    } else {
      res.json(rawData);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOrderedItemsBtwDates = async (req, res) => {
  try {
    const rawData = await findOrderedProductsBtwDates(
      req.params.farmerId,
      req.query.startdate,
      req.query.enddate
    );
    if (rawData.length === 0) {
      res.status(404).send(`Aucune commande n'a été trouvée.`);
    } else {
      res.json(rawData);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const getMostOrderedItems = async (req, res) => {
  const rawData = await findTopProducts(req.params.farmerId);
  res.json(rawData);
};

const getLessOrderedItems = async (req, res) => {
  const rawData = await findFlopProducts(req.params.farmerId);
  res.json(rawData);
};

module.exports = {
  getAllOrders,
  getOneOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrderedItems,
  getOrderedItemsBtwDates,
  getMostOrderedItems,
  getLessOrderedItems,
};
