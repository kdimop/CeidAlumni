const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
  graduationYear: Number,
  educationDegree: String,
  educationInstitute: String,
  currentJob: String,
  emailAddress: String,
  text: String,
  image: String, // URL to the photo of the alumni
  video: String  // URL to the video of the alumni
});

const User = mongoose.model('User', userSchema);

module.exports = User;