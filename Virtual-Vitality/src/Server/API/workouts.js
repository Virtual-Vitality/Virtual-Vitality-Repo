const express = require('express');
const { PrismaClient } = require('@prisma/client');
const workoutsRouter = express.Router();
const prisma = new PrismaClient();


workoutsRouter.get('/', async (req, res, next) => {
    try {
        // Use Prisma to retrieve all workout
        const allWorkouts = await prisma.workout.findMany({
            include: {
                WorkoutType: true,
                ExcercisesOnWorkouts: {
                    include: {
                        exercise: true
                    }
                }
            }
        })
        res.send(allWorkouts);
        // Send the array of workouts as a response
    } catch (error) {
        console.error(error.message);
        next(error);
    }
});


// Get workout by ID
// Accessible to everyone
// workoutsRouter.get('/:id', async (req, res, next) => {
//     const workoutId = parseInt(req.params.id);
//     try {
//         const workout = await prisma.workout.findUnique({
//             where: { id: workoutId 
//             },
//             include:{
//                 workoutType:true,
//                 excercisesOnWorkouts:{
//                     include:{
//                         excerciseReps: true,
//                         excerciseSets: true,
//                         excercise:{
//                             include:{
//                                 name:true,
//                                 muscleGroup: true   
//                             }
//                         }
//                 }
//                 }
//             }
//         });
//         res.send(workout);
//     } catch (error) {
//         console.error(error.message);
//         next(error);
//     }
// });




module.exports = workoutsRouter;