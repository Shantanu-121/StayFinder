// Import the required modules
const express = require("express");
const router = express.Router();

const {
  capturePayment,
  verifyPayment,
} = require("../controllers/Payments");
const {
  auth,
  isCustomer,
  isHost,
} = require("../middlewares/auth");
router.post("/capturePayment", capturePayment);
router.post("/verifyPayment", verifyPayment);

module.exports = router;
