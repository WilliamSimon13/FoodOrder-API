const express = require('express');
const router = express.Router();

const {
    createCart,
    getCarts,
    getCartById,
    updateCart,
    deleteCart
} = require('../controllers/cart.controller');

router.route('/')
    .post(createCart)
    .get(getCarts);

router.route('/:id')
    .get(getCartById)
    .put(updateCart)
    .delete(deleteCart);

module.exports = router;
