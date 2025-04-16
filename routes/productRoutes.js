// routes/productRoutes.js
import express from 'express';

const router = express.Router();

router.get("/products", (req, res) => {
    res.send("Here is the list of all products.");
});

router.post("/products", (req, res) => {
    res.send("A new product has been added.");
});

export default router;