const express = require('express');
const { userRegisterCtrl, userLoginCtrl, userProfileCtrl, userCtrl, userDeleteCtrl, updateUserCtrl } = require('../../controllers/users/userCtrl');

const userRouter = express.Router();

//POST/api/v1/users/register
userRouter.post("/register", userRegisterCtrl);

//POST/api/v1/users/login
userRouter.post("/", userLoginCtrl);

//GET/api/v1/users/:id
userRouter.get("/:id", userProfileCtrl);

//GET/api/v1/users
userRouter.get("/", userCtrl);

//DELETE/api/v1/users/:id
userRouter.delete("/:id", userDeleteCtrl);

//PUT/api/v1/users/:id
userRouter.put("/:id", updateUserCtrl);



module.exports = userRouter;