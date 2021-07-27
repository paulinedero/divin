const orderRouter = require('express').Router();

const {
  getAllOrders,
  getOneOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrderedItems,
  getMostOrderedItems,
  getLessOrderedItems,
} = require('./order.controller');

const { checkauthentication } = require('../../middlewares/authentication');

orderRouter.use(checkauthentication);

orderRouter.get('/:farmerId/orders/', getAllOrders); // use with query startdate & enddate
orderRouter.get('/:farmerId/orders/:orderId', getOneOrder);
orderRouter.post('/:farmerId/orders/', createOrder);
orderRouter.put('/:farmerId/orders/:orderId', updateOrder);
orderRouter.delete('/:farmerId/orders/:orderId', deleteOrder);
orderRouter.get('/:farmerId/ordered-items', getAllOrderedItems); // use with query startdate & enddate
orderRouter.get('/:farmerId/most-ordered-items', getMostOrderedItems);
orderRouter.get('/:farmerId/less-ordered-items', getLessOrderedItems);

module.exports = orderRouter;
