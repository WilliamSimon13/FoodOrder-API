const express = require('express');
const router = express.Router();

const{
    renderCategories, 
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
} = require('../controllers/category.controller');

router.route('/')
    .post(createCategory)
    .get(getCategories);

router.route('/:id')    
    .put(updateCategory)
    .delete(deleteCategory);

router.get('/views', renderCategories);
module.exports = router;