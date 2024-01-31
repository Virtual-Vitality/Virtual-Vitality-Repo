const express = require("express");
const prisma = require("../client.cjs");
const router = express.Router();

// /api/exercises
router.get("/", async (req, res) => {
    const allExercises = await prisma.exercise.findMany();
    res.send(allExercises)
})

module.exports = router;