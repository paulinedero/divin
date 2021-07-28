const jsonwebtoken = require('jsonwebtoken');
const {
  checkExistingEmail,
  checkCredentials,
} = require('./authentication.model');

const { JWT_PRIVATE_KEY } = process.env;

// Log in farmer
const getLoggedInAsFarmer = async (req, res) => {
  try {
    const existingEmail = await checkExistingEmail(req.body.email);
    if (existingEmail.length === 0) {
      return res
        .status(404)
        .send(
          `L'addresse email renseignée n'existe pas dans la base de données.`
        );
    }
    const user = await checkCredentials(req.body.email, req.body.password);
    if (user === true) {
      const token = jsonwebtoken.sign(
        {
          user: {
            id: user.id,
            firstname: user.firstname,
            email: user.email,
          },
        },
        JWT_PRIVATE_KEY,
        {
          expiresIn: '2d',
        }
      );
      return res.status(200).json({ token });
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = { getLoggedInAsFarmer };
