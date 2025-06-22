// Import the required modules
const express = require("express");
const router = express.Router();

// Import the Controllers

// Course Controllers Import
const {
  createProperty,
  showAllProperties,
  getPropertyDetails,
  editProperty,
  deleteProperty,
  bookProperty,
  getUserBookings,
  deleteBooking,
} = require("../controllers/Property");

// Importing Middlewares
const { auth, isCustomer, isHost } = require("../middlewares/auth");

router.post("/createProperty", auth, isHost, createProperty);
// Get all Registered Courses
router.get("/showAllProperties", showAllProperties);
// Get Details for a Specific Courses
router.post("/getPropertyDeails", getPropertyDetails);
router.post("/deleteBooking", deleteBooking);
router.post("/editProperty", auth, isHost, editProperty);
router.post("/bookProperty", bookProperty);
router.delete("/deleteProperty", deleteProperty);
router.post("/getBookings", getUserBookings);

module.exports = router;
