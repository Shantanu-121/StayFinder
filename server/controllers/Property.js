const Property = require("../models/Property");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const { convertSecondsToDuration } = require("../utils/secToDuration");
const Booking = require("../models/Bookings");

// Function to create a new course
exports.createProperty = async (req, res) => {
  try {
    // Get user ID from request object
    const userId = req.user.id;

    // Get all required fields from request body
    let { propertyName, propertyDescription, location, price } = req.body;
    // Get thumbnail image from request files
    const thumbnail = req.files.thumbnailImage;

    // Check if any of the required fields are missing
    if (
      !propertyName ||
      !propertyDescription ||
      !location ||
      !price ||
      !thumbnail
    ) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      });
    }
    // Check if the user is an instructor
    const adminDetails = await User.findById(userId, {
      accountType: "Admin",
    });

    if (!adminDetails) {
      return res.status(404).json({
        success: false,
        message: "Admin Details Not Found",
      });
    }

    // Upload the Thumbnail to Cloudinary
    const thumbnailImage = await uploadImageToCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    );
    console.log(thumbnailImage);
    // Create a new course with the given details
    const newProperty = await Property.create({
      propertyName,
      propertyDescription,
      price,
      location,
      thumbnail: thumbnailImage.secure_url,
    });

    res.status(200).json({
      success: true,
      data: newProperty,
      message: "Property Created Successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the creation of the course
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create property",
      error: error.message,
    });
  }
};

//getAllCourses handler function
exports.showAllProperties = async (req, res) => {
  try {
    const allProperties = await Property.find(
      {},
      {
        propertyName: true,
        price: true,
        thumbnail: true,
        propertyDescription: true,
        location: true,
      }
    );
    return res.status(200).json({
      success: true,
      message: "Data for all Properties fetched successfully",
      data: allProperties,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Cannot Fetch property data",
      error: error.message,
    });
  }
};

//get courses details handler function
exports.getPropertyDetails = async (req, res) => {
  try {
    //get id
    const { propertyId } = req.body;
    //get course details
    const propertyDetails = await Property.findOne({ _id: propertyId });

    //validation
    if (!propertyDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find the property with ${propertyId}`,
      });
    }

    //return response
    return res.status(200).json({
      success: true,
      message: "Property details fetched successfully",
      data: {
        propertyDetails,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Edit Course Details
exports.editProperty = async (req, res) => {
  try {
    const { propertyId } = req.body;
    const updates = req.body;
    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    // If Thumbnail Image is found, update it
    if (req.files) {
      console.log("thumbnail update");
      const thumbnail = req.files.thumbnailImage;
      const thumbnailImage = await uploadImageToCloudinary(
        thumbnail,
        process.env.FOLDER_NAME
      );
      property.thumbnail = thumbnailImage.secure_url;
    }

    // Update only the fields that are present in the request body
    for (const key in updates) {
      if (updates.hasOwnProperty(key)) {
        property[key] = updates[key];
      }
    }

    await property.save();

    const updatedProperty = await Property.findOne({
      _id: propertyId,
    });

    res.json({
      success: true,
      message: "Property updated successfully",
      data: updatedProperty,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Get a list of Course for a given Instructor
exports.getUserBookings = async (req, res) => {
  try {
    // Get the instructor ID from the authenticated user or request body
    const { userId } = req.body;

    // Find all courses belonging to the instructor
    const Bookings = await Booking.find({
      Customer: userId,
    })
      .populate("Property")
      .exec();

    res.status(200).json({
      success: true,
      data: Bookings,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve user bookings",
      error: error.message,
    });
  }
};
// Delete the Course

exports.bookProperty = async (req, res) => {
  try {
    const { propertyId, userId, date, time, partySize } = req.body;
    if (!propertyId || !userId || !date || !time || !partySize) {
      return res.status(500).json({
        success: false,
        message: "All fields required",
      });
    }

    const existingBooking = await Booking.findOne({
      Customer: userId,
      Property: propertyId,
      Date: date,
      Time: time,
      PartySize: partySize,
    });

    if (existingBooking) {
      return res.status(500).json({
        success: false,
        message:
          "A booking already exists for this property at the specified date, time and member's size",
      });
    }

    const newBooking = await Booking.create({
      Customer: userId,
      Property: propertyId,
      Date: date,
      Time: time,
      PartySize: partySize,
    });

    return res.status(200).json({
      success: true,
      data: newBooking,
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
      success: false,
      message: "Property can't be booked.",
    });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const { bookingId, userId } = req.body;
    if (!bookingId || !userId) {
      return res.status(400).json({
        success: false,
        message: "All inputs ain't passed.",
      });
    }
    await Booking.findByIdAndDelete(
      bookingId,
    );
    const Bookings = await Booking.find({
      Customer: userId,
    })
      .populate("Property")
      .exec();
    return res.status(200).json({
      success: true,
      data: Bookings,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    const { propertyId } = req.body;

    // Find the course
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    await Property.findByIdAndDelete(propertyId);

    return res.status(200).json({
      success: true,
      message: "Property deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
