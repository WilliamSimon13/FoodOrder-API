const cartModel = require('../models/cart.model');

module.exports = {
    createCart: async (req, res) => {
        try {
            const body = req.body;
            const newCart = await cartModel.create(body);
            return res.status(201).json(newCart);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    getCarts: async (req, res) => {
        try {
            const carts = await cartModel.find()
                .populate("account_id", "username")
                .populate("items.food_id", "name price");
            return res.status(200).json(carts);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    getCartById: async (req, res) => {
        try {
            const id = req.params.id;
            const cart = await cartModel.findById(id)
                .populate("account_id", "username")
                .populate("items.food_id", "name price");
            if (!cart) {
                return res.status(404).json({ message: "Cart not found" });
            }
            return res.status(200).json(cart);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    updateCart: async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;
            const updatedCart = await cartModel.findByIdAndUpdate(id, body, { new: true });
            if (!updatedCart) {
                return res.status(404).json({ message: "Cart not found" });
            }
            return res.status(200).json(updatedCart);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    deleteCart: async (req, res) => {
        try {
            const id = req.params.id;
            const deletedCart = await cartModel.findByIdAndDelete(id);
            if (!deletedCart) {
                return res.status(404).json({ message: "Cart not found" });
            }
            return res.status(200).json(deletedCart);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
