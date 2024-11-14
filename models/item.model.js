const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    food_id:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "food",
    },
    cart_id:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "cart",
    },
    quantity:{
        type: Number,
        default: 1,
    }
});

module.exports = mongoose.model("item", itemSchema);