const express = require("express");
const userRouter = require("./routes/users/userRoutes.js");
const postRouter = require("./routes/posts/postRouter.js");
const commentRouter = require("./routes/comments/commentRoutes.js");
const categoryRouter = require("./routes/categories/categoryRoute.js");
const db = require("./config/dbconnect.js")


const app = express();

require("dotenv").config();

db.dbconnect()




//middlewares
app.use(express.json()); //pass incoming payload





//-----
//routes
//----

//-----------
//users routes
//----------
app.use("/api/v1/users", userRouter);
//POST/api/v1/users/register
app.post("/api/v1/users/register", );

//POST/api/v1/users/login
app.post("/api/v1/users/login", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "user login",
        });
       } catch (error) {
        res.json(error.message);
       }
});

//GET/api/v1/users/:id
app.get("/api/v1/users/profile/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "profile route",
        });
       } catch (error) {
        res.json(error.message);
       }
});

//GET/api/v1/users
app.get("/api/v1/users", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "user route",
        });
       } catch (error) {
        res.json(error.message);
       }
});

//DELETE/api/v1/users/:id
app.delete("/api/v1/users/delete/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete user route",
        });
       } catch (error) {
        res.json(error.message);
       }
});

//PUT/api/v1/users/:id
app.put("/api/v1/users/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "update user route",
        });
       } catch (error) {
        res.json(error.message);
       }
});

//---------
//post routes
//-------------
app.use('/api/v1/posts', postRouter);
//POST/api/v1/posts
app.post("/api/v1/posts", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "post created",
        });
       } catch (error) {
        res.json(error.message);
       }
});

//GET/api/v1/posts/:id
app.get("/api/v1/posts/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "post route",
        });
       } catch (error) {
        res.json(error.message);
       }
});

//GET/api/v1/posts
app.get("/api/v1/posts", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "posts route",
        });
       } catch (error) {
        res.json(error.message);
       }
});

//DELETE/api/v1/posts/:id
app.delete("/api/v1/posts/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete post route",
        });
       } catch (error) {
        res.json(error.message);
       }
});

//PUT/api/v1/posts/:id
app.put("/api/v1/posts/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "update post route",
        });
       } catch (error) {
        res.json(error.message);
       }
});

//---------
//comment routes
//---------
app.use("/api/v1/comments", commentRouter);

//POST/api/v1/comments
app.post("/api/v1/comments", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "comment created",
        });
       } catch (error) {
        res.json(error.message);
       }
});

//GET/api/v1/comments/:id
app.get("/api/v1/comments/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "comment route",
        });
       } catch (error) {
        res.json(error.message);
       }
});

//DELETE/api/v1/comments/:id
app.delete("/api/v1/comments/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete comment route",
        });
       } catch (error) {
        res.json(error.message);
       }
});

//PUT/api/v1/comments/:id
app.put("/api/v1/comments/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "update comment route",
        });
       } catch (error) {
        res.json(error.message);
       }
});

//----------
//category routes 
//-------
app.use("/api/v1/categories", categoryRouter);

//POST/api/v1/categories
app.post("/api/v1/categories", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "category created",
        });
       } catch (error) {
        res.json(error.message);
       }
});

//GET/api/v1/categories/:id
app.get("/api/v1/categories/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "category route",
        });
       } catch (error) {
        res.json(error.message);
       }
});

//DELETE/api/v1/categories/:id
app.delete("/api/v1/categories/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete category route",
        });
       } catch (error) {
        res.json(error.message);
       }
});

//PUT/api/v1/categories/:id
app.put("/api/v1/categories/:id", async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "update category route",
        });
       } catch (error) {
        res.json(error.message);
       }
});



//error handlers middleware
//listen to server

const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up and running on ${PORT}`));