// server.js

//const express = require('express');
import express from 'express';
const app = express();
import bookRoutes from './routes/books.js';
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Importing routes
 app.use('/books', bookRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
