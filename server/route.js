const userRouter = require('./modules/user/user.route');
// const orderRouter = require('./modules/order/order.route');
const productRouter = require('./modules/product/product.route');
// const stockRouter = require('./modules/stock/stock.route');

module.exports = (app) => {
  app.use('/user', userRouter);
  // app.use('/order', orderRouter);
  app.use('/user', productRouter);
  // app.use('/stock', stockRouter);
};