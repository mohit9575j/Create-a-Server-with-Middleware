// routes/productRoutes.js
import express from 'express';
const router = express.Router();

// GET /products
router.get('/', (req, res) => {
  res.send('Fetching all products');
});

// POST /products
router.post('/', (req, res) => {
  res.send('Adding a new product');
});

// GET /products/:id
router.get('/:id', (req, res) => {
  res.send(`Fetching product with ID: ${req.params.id}`);
});

export default router;
