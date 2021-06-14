const productRouter = require('express').Router();

const { 
    getAllProducts,
    getOneProduct,
    getOneProductDetail,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductOverview,
 } = require('./product.controller');

productRouter.get('/product', getAllProducts);
productRouter.get('/product/:id', getOneProduct);
productRouter.get('/product/:id/detail', getOneProductDetail);
productRouter.post('/product', createProduct);
productRouter.put('/product/:id', updateProduct);
productRouter.delete('/product/:id', deleteProduct);
productRouter.get('/product/overview', getProductOverview);

module.exports = productRouter;