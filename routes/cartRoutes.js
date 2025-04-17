// routes/cartRoutes.js
import express from 'express';
const router = express.Router();

// GET /cart/:userId
router.get('/:userId', (req, res) => {
  res.send(`Fetching cart for user with ID: ${req.params.userId}`);
});

// POST /cart/:userId
router.post('/:userId', (req, res) => {
  res.send(`Adding product to cart for user with ID: ${req.params.userId}`);
});

export default router;
