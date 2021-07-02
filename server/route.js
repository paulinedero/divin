const farmerRouter = require('./modules/farmer/farmer.route');
const orderRouter = require('./modules/order/order.route');
const productRouter = require('./modules/product/product.route');
// const stockRouter = require('./modules/stock/stock.route');

module.exports = (app) => {
  app.use('/farmers', farmerRouter);
  app.use('/farmers', orderRouter);
  app.use('/farmers', productRouter);
  // app.use('/stock', stockRouter);
};