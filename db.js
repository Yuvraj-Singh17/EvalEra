const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/assignment-evaluator');
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
  }
};

module.exports = connectDB;
