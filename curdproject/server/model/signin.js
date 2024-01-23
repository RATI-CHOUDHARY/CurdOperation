const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    location:String

})
const signin = mongoose.model('signin',userSchema)
module.exports = signin
