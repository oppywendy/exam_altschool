const express = require('express');
const { postCreateCtrl, singlePostCtrl, postCtrl, deletePostCtrl, updatePostCtrl } = require('../../controllers/posts/postCtrl');


const postRouter = express.Router();

//POST/api/v1/posts
postRouter.post("/", postCreateCtrl);

//GET/api/v1/posts/:id
postRouter.get("/", singlePostCtrl);

//GET/api/v1/posts
postRouter.get("/", postCtrl);

//DELETE/api/v1/posts/:id
postRouter.delete("/:id", deletePostCtrl);

//PUT/api/v1/posts/:id
postRouter.put("//:id", updatePostCtrl);



module.exports = postRouter;