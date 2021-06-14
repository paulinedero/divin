const userRouter = require('express').Router();

const { 
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
 } = require('./user.controller');

userRouter.get('/user', getAllUsers);
userRouter.get('/user/:id', getOneUser);
userRouter.post('/user', createUser);
userRouter.put('/user/:id', updateUser);
userRouter.delete('/user/:id', deleteUser);

module.exports = userRouter;