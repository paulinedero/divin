const farmerRouter = require('./modules/farmer/farmer.route');
const orderRouter = require('./modules/order/order.route');
const productRouter = require('./modules/product/product.route');
const authRouter = require('./modules/authentication/authentication.route');
const countryRouter = require('./modules/country/country.route');
// const stockRouter = require('./modules/stock/stock.route');
// as a FK from address and address as a FK form farmer this router should be independente
// const countryRouter = require('./modules/country/country.route');

module.exports = (app) => {
  app.use('/authentication', authRouter);
  app.use('/farmers', farmerRouter);
  app.use('/farmers', orderRouter);
  app.use('/farmers', productRouter);
  app.use('/countries', countryRouter);
  // app.use('/stock', stockRouter);
};
