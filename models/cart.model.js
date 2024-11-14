const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    is_oder:{
        type: Boolean,
        default: false,
    },
    account_id:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "account",
    },
    items:{
        food_id:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: "food",
        },
        quantity:{
            type: Number,
            default: 1,
        }
    }
    
});

module.exports = mongoose.model("cart", cartSchema);