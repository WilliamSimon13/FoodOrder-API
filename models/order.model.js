const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    customer:{
        type: String,
        require: true,
    },
    phone:{
        type: String,
        require: true,
    },
    address:{
        type: String,
        require: true,
    },
    total_money:{
        type: Number,
        require: true,
    },
    payment:{
        type: String,
        enum: ["Online","On Delivery"],
        default: "On Delivery"
    },
    is_payment:{
        type: Boolean,
        default: false,
    },
    status:{
        type: String,
        enum : ["pending","confirm","ship","receive"],
        default: "pending"
    },
    cart_id:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "cart",
    }
});

module.exports = mongoose.model("order", orderSchema);