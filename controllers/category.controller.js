const categoryModel = require('../models/category.model');

module.exports = {
    createCategory: async (req, res) => {
        const body = req.body;
        const newCategory = await categoryModel.create(body);
        return res.status(201).json(newCategory);   
    },

    getCategories: async (req, res) => {
        const categories = await categoryModel.find();
        return res.status(200).json(categories);
    },

    updateCategory: async (req, res) => {
        const body = req.body;
        const id = req.params.id;   
        const updatedCategory = await categoryModel.findByIdAndUpdate(id, body, {new: true});
        return res.status(200).json(updatedCategory);
    },

    deleteCategory: async (req, res) => {
        const id = req.params.id;
        const deletedCategory = await categoryModel.findByIdAndDelete(id);
        return res.status(200).json(deletedCategory);
    },

    renderCategories: async (req, res) => {
        try {
            const categories = await categoryModel.find();
            res.render('index', { categories }); // Render view với dữ liệu
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}