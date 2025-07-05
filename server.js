const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Route imports
const userRoutes = require('./Routes/Routing/userRoutes');
const assignmentRoutes = require('./Routes/Routing/assignmentRoutes');
const submissionRoutes = require('./Routes/Routing/submissionRoutes');
const evaluationRoutes = require('./Routes/Routing/evaluationRoutes');
// const adminRoutes = require('./routes/Routing/adminRoutes'); // optional

// Mount routes
app.use('/api/users', userRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/submissions', submissionRoutes);
app.use('/api/evaluations', evaluationRoutes);
// app.use('/api/admin', adminRoutes); // if used

// Health check route
app.get('/', (req, res) => {
  res.send('Assignment Evaluator API is Running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
