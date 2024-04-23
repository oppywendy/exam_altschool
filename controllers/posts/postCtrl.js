//create
const postCreateCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "post created",
        });
       } catch (error) {
        res.json(error.message);
       }
};


//single
const singlePostCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "post route",
        });
       } catch (error) {
        res.json(error.message);
       }
};

//all
const postCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "posts route",
        });
       } catch (error) {
        res.json(error.message);
       }
};


//update
updatePostCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete post route",
        });
       } catch (error) {
        res.json(error.message);
       }
};

//delete
deletePostCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "update post route",
        });
       } catch (error) {
        res.json(error.message);
       }
};


module.exports = {
    postCreateCtrl,
    singlePostCtrl,
    postCtrl,
    updatePostCtrl,
    deletePostCtrl,
}