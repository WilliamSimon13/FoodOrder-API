const express = require("express");
const router = express.Router();
const {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory,
} = require("../controllers/category.controller");

// router.post("/category", createCategory);
// router.get("/category", getCategories);
// router.put("/category/:id", updateCategory);
// router.delete("/category/:id", deleteCategory);

router
    .route("/")
    .post(createCategory)
    .get(getCategories);
    
router
    .route("/:id")
    .put(updateCategory)
    .delete(deleteCategory);

module.exports = router;