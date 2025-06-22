const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  propertyName: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  propertyDescription: {
    type: String,
    required: true,
    trim: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Property", propertySchema);
