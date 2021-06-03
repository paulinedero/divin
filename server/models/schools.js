const db = require('../dbConfig');

const findMany = async () => {
    return db
        .promise()
        .query('SELECT * FROM `school`')
        .then(([res]) => res);
}

const findOne = async (id) => {
    return db
        .promise()
        .query('SELECT * FROM `school` WHERE id = ?', [id])
        .then(([res]) => res[0]);
}

const findWizards = async (idSchool) => {
    return db
        .promise()
        .query('SELECT * FROM `wizard` WHERE school_id = ?', [idSchool])
        .then(([res]) => res);
}

module.exports = {
    findMany,
    findOne,
    findWizards
}