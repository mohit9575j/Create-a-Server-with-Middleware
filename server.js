import express from "express";
import studentRoutes from "./routes/students.js";
import courseRoutes from "./routes/courses.js";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
});

// Routes
app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

// 404 Handler
app.use("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
