import express from "express";
const router = express.Router();

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

// GET /students
router.get("/", (req, res) => {
  const names = students.map((s) => s.name).join(", ");
  res.send(`Students: ${names}`);
});

// GET /students/:id
router.get("/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (student) {
    res.send(`Student: ${student.name}`);
  } else {
    res.send("Student not found");
  }
});

export default router;
