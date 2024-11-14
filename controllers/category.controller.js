const categoryModel = require("../models/category.model");

module.exports = {
    createCategory: async (req, res) => {
        try {
            const body = req.body;
            const newCategory = await categoryModel.create(body);
            return res.status(201).json(newCategory);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    getCategories: async (req, res) => {
        try {
            const categories = await categoryModel.find();
            return res.status(200).json(categories);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    updateCategory: async (req, res) => {
        try {
            const id = req.param.id;
            const body = req.body;
            const updatedCategory = await categoryModel.findByIdAndUpdate(id, body, {new : true});
            return res.status(200).json(updatedCategory);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const id = req.param.id;
            const deletedCategory = await categoryModel.findByIdAndDelete(id);
            return res.status(200).json(deletedCategory);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};
