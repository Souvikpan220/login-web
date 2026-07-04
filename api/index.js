require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Base API route
app.get('/api/health', (req, res) => {
  res.json({ status: 'MoonWitch API is online' });
});

// Export the app for Vercel Serverless
module.exports = app;
