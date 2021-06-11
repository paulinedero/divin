const userRouter = require('./user');
const orderRouter = require('./order');
const productRouter = require('./product');
const stockRouter = require('./stock');

module.exports = (app) => {
  app.use('/user', userRouter);
  app.use('/dashboard', orderRouter);
  app.use('/product', productRouter);
  app.use('/history', stockRouter);
};
