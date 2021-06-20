const db = require('../../dbConfig');

// function to retrieve all farmers
const findMany = async () => {
  return await db.query('SELECT * FROM farmer');
};

// function to retrieve one farmer
const findOne = async (id) => {
  const result = await db.query('SELECT * FROM `farmer` WHERE id = ?', [id]);
  return result[0];
};

// function to create a new farmer
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

  try {
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
      'INSERT INTO farmer (email, password, company_name, lastname, firstname, birthdate, address, phone_number, siret_number, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        email,
        password,
        company_name,
        lastname,
        firstname,
        birthdate,
        insertedAddress.insertId,
        phone_number,
        siret_number,
        description,
      ]
    );

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
    };
    return createdUser;
  } catch (err) {
    throw new Error(err);
  }
};

// function to update a farmer
const update = async (id, updatedInfo) => {
  try {
    await db.query('UPDATE farmer SET ? WHERE id = ?', [updatedInfo, id]);
    return updatedInfo;
  } catch (err) {
    throw new Error(err);
  }
};

// function to update farmer's address
const updateAddress = async (id, updatedAddressFields) => {
  try {
    const addressId = await db.query(
      'SELECT address FROM farmer WHERE id = ?',
      [id]
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
const remove = async (id) => {
  await db.query('DELETE FROM farmer WHERE id = ?', [id]);
};

module.exports = {
  findMany,
  findOne,
  create,
  update,
  updateAddress,
  remove,
};
