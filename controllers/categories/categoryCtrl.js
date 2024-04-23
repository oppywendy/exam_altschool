//create
const categoryCreateCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "category created",
        });
       } catch (error) {
        res.json(error.message);
       }
};

//single
const categorySingleCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "category route",
        });
       } catch (error) {
        res.json(error.message);
       }
};

//update
const updateCategoryCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "update category route",
        });
       } catch (error) {
        res.json(error.message);
       }
};


//delete
const deleteCategoryCtrl = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete category route",
        });
       } catch (error) {
        res.json(error.message);
       }
};


module.exports = {
    categoryCreateCtrl,
    categorySingleCtrl,
    updateCategoryCtrl,
    deleteCategoryCtrl,
    
}