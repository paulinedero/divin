const userRouter = require('./user');
const dashboardRouter = require('./dashboard');
const productRouter = require('./product');
const networkRouter = require('./network');
const historyRouter = require('./history');

module.exports = (app) => {
  app.use('/user', userRouter);
  app.use('/dashboard', dashboardRouter);
  app.use('/product', productRouter);
  app.use('/network', networkRouter);
  app.use('/history', historyRouter);
};
