const express = require('express');
const app = express();

// Middleware to log HTTP method and endpoint accessed
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next(); // Pass control to the next middleware or route handler
});

// Routes for handling products
app.get("/products", (req, res) => {
    res.send("Here is the list of all products.");
});

app.post("/products", (req, res) => {
    res.send("A new product has been added.");
});

// Routes for handling categories
app.get("/categories", (req, res) => {
    res.send("Here is the list of all categories.");
});

app.post("/categories", (req, res) => {
    res.send("A new category has been created.");
});

// Catch-all route for undefined endpoints (404 - Not Found)
app.use((req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});