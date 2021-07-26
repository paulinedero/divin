const jsonwebtoken = require('jsonwebtoken');
const {
  checkExistingEmail,
  checkCredentials,
} = require('./authentication.model');

const { JWT_PRIVATE_KEY } = process.env;

// Log in farmer
const getLoggedInAsFarmer = async (req, res) => {
  try {
    const user = await checkExistingEmail(req.body.email);
    if (user.length === 0) {
      res
        .status(404)
        .send(
          `L'addresse email renseignée n'existe pas dans la base de données.`
        );
    } else {
      const checkPassword = await checkCredentials(
        req.body.email,
        req.body.password
      );
      if (checkPassword) {
        const token = jsonwebtoken.sign(
          {
            user: { id: user.id, email: user.email },
          },
          JWT_PRIVATE_KEY,
          {
            expiresIn: '2d',
          }
        );
        res.status(200).json({ token }).send('Authentification réussie');
      } else {
        res
          .status(401)
          .send(`L'authentification a échouée. Veuillez réessayer.`);
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getLoggedInAsFarmer,
};
