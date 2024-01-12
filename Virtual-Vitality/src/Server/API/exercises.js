const express = require("express");
const prisma = require("../client");
const router = express.Router();

// /api/exercises
router.get("/", async (req, res) => {
    const allExercises = await prisma.exercises.findMany();
    res.send(allExercises)
})

module.exports = router;