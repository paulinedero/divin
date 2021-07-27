const argon2 = require('argon2');
const db = require('../../dbConfig');

// secure password
const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (plainPassword) =>
  argon2.hash(plainPassword, hashingOptions);

// function to check if farmer already exists
const checkExistingFarmer = async (farmerId) => {
  try {
    const result = await db.query('SELECT id FROM `farmer` WHERE id = ?', [
      farmerId,
    ]);
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to check if email already exists
const checkExistingEmail = async (email) => {
  try {
    const result = await db.query(
      'SELECT email FROM `farmer` WHERE email = ?',
      [email]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to retrieve all farmers
const findMany = async () => {
  try {
    return await db.query('SELECT * FROM farmer');
  } catch (err) {
    throw new Error(err);
  }
};

// function to retrieve one farmer
const findOne = async (farmerId) => {
  try {
    const result = await db.query('SELECT * FROM `farmer` WHERE id = ?', [
      farmerId,
    ]);
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to create a new farmer
const create = async (newFarmer) => {
  const {
    email,
    password,
    company_name,
    lastname,
    firstname,
    birthday,
    address,
    phone_number,
    siret_number,
    VAT_number,
    description,
  } = newFarmer;

  try {
    const hashedPassword = await hashPassword(password);
    const [insertedAddress] = await db.query(
      'INSERT INTO address (street, street_number, zip_code, city, country) VALUES (?, ?, ?, ?, ?)',
      [
        address.street,
        address.street_number,
        address.zip_code,
        address.city,
        address.country,
      ]
    );
    const [insertedFarmer] = await db.query(
      'INSERT INTO farmer (email, password, company_name, lastname, firstname, birthday, address, phone_number, siret_number, VAT_number, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        email,
        hashedPassword,
        company_name,
        lastname,
        firstname,
        birthday,
        insertedAddress.insertId,
        phone_number,
        siret_number,
        VAT_number,
        description,
      ]
    );

    const createdFarmer = {
      id: insertedFarmer.insertId,
      email,
      password,
      company_name,
      lastname,
      firstname,
      birthday,
      address,
      phone_number,
      siret_number,
      VAT_number,
      description,
    };
    return createdFarmer;
  } catch (err) {
    throw new Error(err);
  }
};

// function to update a farmer
const update = async (farmerId, updatedInfo) => {
  try {
    await db.query('UPDATE farmer SET ? WHERE id = ?', [updatedInfo, farmerId]);
    return updatedInfo;
  } catch (err) {
    throw new Error(err);
  }
};

// function to update farmer's address
const updateAddress = async (farmerId, updatedAddressFields) => {
  try {
    const addressId = await db.query(
      'SELECT address FROM farmer WHERE id = ?',
      [farmerId]
    );
    const updatedAddressId = Object.values(
      JSON.parse(JSON.stringify(addressId[0][0]))
    );
    await db.query('UPDATE address SET ? WHERE id = ?', [
      updatedAddressFields,
      updatedAddressId,
    ]);
    return updatedAddressFields;
  } catch (err) {
    throw new Error(err);
  }
};

// function to delete all farmer's info
const remove = async (farmerId) => {
  try {
    await db.query('DELETE FROM farmer WHERE id = ?', [farmerId]);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  checkExistingFarmer,
  checkExistingEmail,
  findMany,
  findOne,
  create,
  update,
  updateAddress,
  remove,
};
