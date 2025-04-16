// server.js
import express from 'express';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';

const app = express();

// Logging middleware - this should come BEFORE routes to log all requests
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

// Mount route modules
app.use(categoryRoutes);
app.use(productRoutes);

// Catch-all route for undefined endpoints (404 - Not Found)
app.use((req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});