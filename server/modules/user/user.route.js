const userRouter = require('express').Router();

const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  updateUserAddress,
  deleteUser,
} = require('./user.controller');

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getOneUser);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.put('/:id/address', updateUserAddress);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;
