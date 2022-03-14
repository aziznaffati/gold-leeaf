const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({

    FirstName : String,
    LastName : String,
    Gender: String,
    Birth : Date,
    Phone : String,
    Adresse : String,
    Email : {type : String, require : true, unique : true},
    Password : {type : String},
    Role : String,
    
   
}) 
module.exports = mongoose.model("User", userSchema);