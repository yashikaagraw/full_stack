const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://127.0.0.1:27017/fullstack")

const UserSchema = mongoose.Schema({
        name: {type : String, required : true},
        email: {type : String, required : true},
        password: {type : String, required : true},
        age: {type : Number, required : true},
        phone_number: {type : Number, required : true},
        
})

const UserModel = mongoose.model("user", UserSchema)


module.exports = {UserModel, connection}
