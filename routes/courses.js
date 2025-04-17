import express from "express";
const router = express.Router();

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

// GET /courses
router.get("/", (req, res) => {
  const names = courses.map((c) => c.name).join(", ");
  res.send(`Courses: ${names}`);
});

// GET /courses/:id
router.get("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (course) {
    res.send(`Course: ${course.name}, Description: ${course.description}`);
  } else {
    res.send("Course not found");
  }
});

export default router;
