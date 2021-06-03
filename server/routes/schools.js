const schoolRouter = require('express').Router();

const {
    getAllSchools,
    getOneSchool,
    getWizardFromSchool
} = require('../controllers/schools');

schoolRouter.get('/', getAllSchools);
schoolRouter.get('/:id', getOneSchool);
schoolRouter.get('/:id/wizards', getWizardFromSchool);

module.exports = schoolRouter;