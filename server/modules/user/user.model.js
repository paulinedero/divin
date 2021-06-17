const db = require('../../dbConfig');

const findMany = async () => await db.query('SELECT * FROM `farmer`');

const findOne = async (id) => {
  const result = await db.query('SELECT * FROM `farmer` WHERE id = ?', [id]);
  return result[0];
};

const create = async (newUser) => {
  const {
    email,
    password,
    company_name,
    lastname,
    firstname,
    birthdate,
    address,
    phone_number,
    siret_number,
    description,
  } = newUser;

  await db.query(
    'INSERT INTO address (street, street_number, zip_code, city, country) VALUES (?, ?, ?, ?, ?)',
    [
      address.id,
      address.street,
      address.street_number,
      address.zip_code,
      address.city,
      address.country,
    ]
  );
  db.query(
    'INSERT INTO farmer (email, password, company_name, lastname, firstname, birthdate, address, phone_number, siret_number, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      email,
      password,
      company_name,
      lastname,
      firstname,
      birthdate,
      address.id,
      phone_number,
      siret_number,
      description,
    ]
  );
  return newUser;
  /*
  const createdUser = {
    id: insertedFarmer.insertId,
    email,
    password,
    company_name,
    lastname,
    firstname,
    birthdate,
    address,
    phone_number,
    siret_number,
    description,
    // creation_date,
  };
  return createdUser; */
};

const update = async () => await db.query('SELECT * FROM `farmer`');

const remove = async () => await db.query('SELECT * FROM `farmer`');

module.exports = {
  findMany,
  findOne,
  create,
  update,
  remove,
};
