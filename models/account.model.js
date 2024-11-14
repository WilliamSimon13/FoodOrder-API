const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
    username:{
        type:String,
        require: true,
        unique: true,
    },
    password:{
        type:String,
        require: true,
    },
    phone:{
        type: String,
        require:true
    },
    address:{
        type: String,
        require:true
    },
    role:{
        type: String,
        enum: ["admin","user"],
        default:"user"
    }   
    
})

module.exports = mongoose.model("account", accountSchema);