const db = require('../../dbConfig');

// function to send all the existing countries in database
// Countries's table as a Foreign Key condition
const findCountries = async () => {
  try {
    return await db.query('SELECT * FROM country');
  } catch (err) {
    throw new Error(err);
  }
};

/*
// to create a new tuggle in the Country table
const create = async (newCountry) => {
  const { country } = newCountry;
  try {
    const [insertedCountry] = await db.query(
      'INSERT INTO country (name) VALUES (?)', [name]);
    const createdCountry = {
      id: insertedCountry.insertId,
      name,
    };
    return createdCountry;
  } catch (err) {
    throw new Error(err);
  }
};
*/

module.exports = {
  findCountries,
};
