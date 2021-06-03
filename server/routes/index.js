const schoolRouter = require('./schools');

module.exports = (app) => {
    app.use('/schools', schoolRouter);
}