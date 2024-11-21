const express = require('express');
const router = express.Router();

const {
    createAccount,
    getAccounts,
    getAccountById,
    updateAccount,
    deleteAccount
} = require('../controllers/account.controller');

router.route('/')
    .post(createAccount)
    .get(getAccounts);

router.route('/:id')
    .get(getAccountById)
    .put(updateAccount)
    .delete(deleteAccount);

module.exports = router;
