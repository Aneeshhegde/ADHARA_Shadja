const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: 'Junior'
  },
  level: {
    type: String,
    default: 'Beginner'
  },
  duration: {
    type: String,
    default: 'Flexible'
  },
  instructorName: {
    type: String,
    default: 'Shri Vinayak Hegde Hirehadda'
  },
  price: {
    type: Number,
    default: 0
  },
  musicType: {
    type: String,
    default: 'Vocal'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Course', courseSchema);
