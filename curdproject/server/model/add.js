const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },

})

const add = new mongoose.model("add",userSchema);
module.exports = add;