const mongoose = require('mongoose');

// Define the schema for lawyers
const lawyerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name of the lawyer is required
  },
  practice_area: {
    type: String,
    required: true, // The practice area (e.g., "Family Law", "Corporate Law") is required
  },
  location: {
    type: String,
    required: true, // The location (city/state) of the lawyer is required
  },
  years_of_experience: {
    type: Number,
    required: true, // The number of years the lawyer has practiced is required
  },
  availability: {
    type: Boolean,
    default: true, // Whether the lawyer is available for consultation
  },
  contact_info: {
    type: String,
    required: true, // Contact information, like email or phone number
  }
});

// Create a model from the schema
const Lawyer = mongoose.model('Lawyer', lawyerSchema);

module.exports = Lawyer;
