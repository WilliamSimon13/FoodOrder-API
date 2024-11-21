const foodModel = require('../models/food.model');

module.exports = {
    createFood: async (req, res) => {
        try {
            const body = req.body;
            const newFood = await foodModel.create(body);
            return res.status(201).json(newFood);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    getFoods: async (req, res) => {
        try {
            const foods = await foodModel.find().populate("category_id", "name img");
            return res.status(200).json(foods);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    getFoodById: async (req, res) => {
        try {
            const id = req.params.id;
            const food = await foodModel.findById(id).populate("category_id", "name img");
            if (!food) {
                return res.status(404).json({ message: "Food not found" });
            }
            return res.status(200).json(food);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    updateFood: async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;
            const updatedFood = await foodModel.findByIdAndUpdate(id, body, { new: true });
            if (!updatedFood) {
                return res.status(404).json({ message: "Food not found" });
            }
            return res.status(200).json(updatedFood);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    deleteFood: async (req, res) => {
        try {
            const id = req.params.id;
            const deletedFood = await foodModel.findByIdAndDelete(id);
            if (!deletedFood) {
                return res.status(404).json({ message: "Food not found" });
            }
            return res.status(200).json(deletedFood);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
