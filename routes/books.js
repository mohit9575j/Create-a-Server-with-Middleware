// routes/books.js

//const express = require('express');
import express from 'express';
const router = express.Router();

// GET /books
router.get('/', (req, res) => {
  console.log("GET request received at /books");
  res.send("Here is the list of books!");
});

// POST /books
router.post('/', (req, res) => {
  console.log("POST request received at /books");
  console.log("Received book data:", req.body);
  res.send("Book has been added!");
});

export default router;
