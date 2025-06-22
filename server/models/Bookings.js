const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  Customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  Property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  PartySize: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  Time: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
