const orderRouter = require('express').Router();

const {
  getAllOrders,
  getOneOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrderedItems,
  getOrderedItemsBtwDates,
  getMostOrderedItems,
  getLessOrderedItems,
} = require('./order.controller');

orderRouter.get('/:farmerId/orders/', getAllOrders);
orderRouter.get('/:farmerId/orders/:orderId', getOneOrder);
orderRouter.post('/:farmerId/orders/', createOrder);
orderRouter.put('/:farmerId/orders/:orderId', updateOrder);
orderRouter.delete('/:farmerId/orders/:orderId', deleteOrder);
orderRouter.get('/:farmerId/ordered-items', getOrderedItemsBtwDates); // use with query startdate & enddate
orderRouter.get('/:farmerId/ordered-items', getAllOrderedItems);
orderRouter.get('/:farmerId/most-ordered-items', getMostOrderedItems);
orderRouter.get('/:farmerId/less-ordered-items', getLessOrderedItems);

module.exports = orderRouter;
