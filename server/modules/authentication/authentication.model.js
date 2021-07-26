const argon2 = require('argon2');
const db = require('../../dbConfig');

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

/*
const hashPassword = (plainPassword) =>
  argon2.hash(plainPassword, hashingOptions);

const verifyPassword = (plainPassword, hashedPassword) =>
  argon2.verify(hashedPassword, plainPassword, hashingOptions);
*/

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

// function to check if password is matching
const checkCredentials = async (email, password) => {
  try {
    const [result] = await db.query(
      'SELECT password FROM `farmer` WHERE email = ?',
      [email]
    );
    const storedPassword = Object.values(result[0])[0];
    return await argon2.verify(storedPassword, password, hashingOptions);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  checkExistingEmail,
  checkCredentials,
};
