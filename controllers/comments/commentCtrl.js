//create
const commentCreateCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "comment created",
        });
       } catch (error) {
        res.json(error.message);
       }
};

//single
const singleCommentCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "comment route",
        });
       } catch (error) {
        res.json(error.message);
       }
};

//update
const deleteCommentCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete comment route",
        });
       } catch (error) {
        res.json(error.message);
       }
};

//delete
const updateCommentCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "update comment route",
        });
       } catch (error) {
        res.json(error.message);
       }
};


module.exports = {
    commentCreateCtrl,
    singleCommentCtrl,
    deleteCommentCtrl,
    updateCommentCtrl,
}