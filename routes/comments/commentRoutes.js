const express = require('express');
const { commentCreateCtrl, singleCommentCtrl, deleteCommentCtrl, updateCommentCtrl } = require('../../controllers/comments/commentCtrl');

const commentRouter = express.Router();
//POST/api/v1/comments
commentRouter.post("/", commentCreateCtrl);

//GET/api/v1/comments/:id
commentRouter.get("/:id", singleCommentCtrl);

//DELETE/api/v1/comments/:id
commentRouter.delete("/:id", deleteCommentCtrl);

//PUT/api/v1/comments/:id
commentRouter.put("/:id", updateCommentCtrl);



module.exports = commentRouter;
