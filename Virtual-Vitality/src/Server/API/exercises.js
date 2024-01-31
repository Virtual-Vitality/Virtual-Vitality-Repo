const express = require("express");
const prisma = require("../client.cjs");
const router = express.Router();

// /api/exercises
router.get("/", async (req, res) => {
    try {
    const allExercises = await prisma.exercise.findMany();
    res.send(allExercises)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;