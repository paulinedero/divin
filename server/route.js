const farmerRouter = require('./modules/farmer/farmer.route');
const orderRouter = require('./modules/order/order.route');
const productRouter = require('./modules/product/product.route');
const stockRouter = require('./modules/stock/stock.route');
const favoriteRouter = require('./modules/favorite/favorite.route');
const countryRouter = require('./modules/country/country.route'); // this route was created to make it possible to a farmer submit a signup account
const authRouter = require('./modules/authentication/authentication.route');
// as a FK from address and address as a FK form farmer this router should be independent

const stockAdminRouter = require('./modules/admin/admin.route');

module.exports = (app) => {
  // IN SCOPE
  app.use('/authentication', authRouter);
  app.use('/farmers', farmerRouter);
  app.use('/farmers', orderRouter);
  app.use('/farmers', productRouter);
  app.use('/farmers', stockRouter);
  app.use('/farmers', favoriteRouter);

  // OUTSIDE SCOPE, but necessairy
  app.use('/stocks', stockAdminRouter); // for administartion
  app.use('/countries', countryRouter);
};
