const express = require("express")
const prisma = require("../client.cjs")
const router = express.Router();

// /api/workouts
router.get("/", async (req, res) => {

    const allWorkouts = await prisma.workout.findMany({
        include: {
            workoutType: true ,
            exercisesOnWorkouts:{
                include: {
                    exercise: true
                }
            }
        }
    });
    res.send(allWorkouts)
   
})

module.exports = router;
