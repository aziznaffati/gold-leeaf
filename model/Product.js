// 1- require mongoose
const mongoose = require("mongoose");
// 2- require Schema
const { Schema } = mongoose;
// 3- Create productSchema
const productSchema = new Schema({
  NameProduct: {
    type: String,
    required: true,
  },
  ImgURL: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },

  Quantity: Number,
  Description: String,
});
module.exports = Product = mongoose.model("product", productSchema);