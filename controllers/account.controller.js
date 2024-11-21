const accountModel = require('../models/account.model');

module.exports = {
    createAccount: async (req, res) => {
        try {
            const body = req.body;
            const newAccount = await accountModel.create(body);
            return res.status(201).json(newAccount);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    getAccounts: async (req, res) => {
        try {
            const accounts = await accountModel.find();
            return res.status(200).json(accounts);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    getAccountById: async (req, res) => {
        try {
            const id = req.params.id;
            const account = await accountModel.findById(id);
            if (!account) {
                return res.status(404).json({ message: "Account not found" });
            }
            return res.status(200).json(account);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    updateAccount: async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;
            const updatedAccount = await accountModel.findByIdAndUpdate(id, body, { new: true });
            if (!updatedAccount) {
                return res.status(404).json({ message: "Account not found" });
            }
            return res.status(200).json(updatedAccount);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    deleteAccount: async (req, res) => {
        try {
            const id = req.params.id;
            const deletedAccount = await accountModel.findByIdAndDelete(id);
            if (!deletedAccount) {
                return res.status(404).json({ message: "Account not found" });
            }
            return res.status(200).json(deletedAccount);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
