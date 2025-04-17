// server.js
import express from 'express';
 import productrouter from './routes/productRoutes.js';
const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
 app.use('/products',productrouter)

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
