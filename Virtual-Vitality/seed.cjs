const prisma = require("./src/Server/client.cjs");
const bcrypt = require("bcrypt");



const saltrounds = 5;

async function seed() {
    const hashedUser1 = await bcrypt.hash("password", saltrounds);
    const user1 = await prisma.user.create({
        data: {
            name: "Peng",
            email: "peng@yahoo.com",
            userName: "peng123",
            password: hashedUser1,
        },
    });

    const hashedUser2 = await bcrypt.hash("password", saltrounds);
    const user2 = await prisma.user.create({
        data: {
            name: "Sebastian",
            email: "seb@gmail.com",
            userName: "top coach 123",
            password: hashedUser2,
        },
    });

    const hashedUser3 = await bcrypt.hash("password", saltrounds);
    const user3 = await prisma.user.create({
        data: {
            name: "Jaylen",
            email: "jaylen@yahoo.com",
            userName: "Jay3",
            password: hashedUser3,
        },
    });

    const hashedUser4 = await bcrypt.hash("password", saltrounds);
    const user4 = await prisma.user.create({
        data: {
            name: "Chris",
            email: "chris@aol.com",
            userName: "Chris45",
            password: hashedUser4,
        },
    });

    const hashedUser5 = await bcrypt.hash("password", saltrounds);
    const user5 = await prisma.user.create({
        data: {
            name: "Jamari",
            email: "jamari@yahoo.com",
            userName: "Jamari334",
            password: hashedUser5,
        },
    });

    const hashedUser6 = await bcrypt.hash("password", saltrounds);
    const user6 = await prisma.user.create({
        data: {
            name: "Carter",
            email: "carter@yahoo.com",
            userName: "Carter222",
            password: hashedUser6,
        },
    });

    const workoutType1 = await prisma.workoutType.create({
        data: {
            name: "Weight Lifting",
        }
    });

    const workOut1 = await prisma.workout.create({
<<<<<<< HEAD
        data: {
            name: "Build Muscle",
            workoutTypeId: 1,
            description: "great for the core",
            difficulty: "Beginner",
        },
=======
       data: {
           name: "Build Muscle",
           workoutTypeId: 1,
           description: "great for the core",
           difficulty: "Beginner"
       },
>>>>>>> main
    });

    const workoutType2 = await prisma.workoutType.create({
        data: {
            name: "HIIT",
        }
    });

    const workOut2 = await prisma.workout.create({
        data: {
            name: "Weight Lost",
            workoutTypeId: 2,
            description: "great for intense workouts",
<<<<<<< HEAD
            difficulty: "Intermediate",
=======
            difficulty: "Beginner"
>>>>>>> main
        },
    });

<<<<<<< HEAD
    const workoutType3 = await prisma.workoutType.create({
=======
     const workoutType3 = await prisma.workoutType.create({
        data: {
            name: "Cardio",
        }
    });
    
    const workOut3 = await prisma.workout.create({
       data: {
           name: "Get a faster sprint",
           workoutTypeId: 3,
           description: "great for the calves",
           difficulty: "Intermediate"
       },
    });

    const workoutType4 = await prisma.workoutType.create({
        data: {
            name: "Weight Lifting",
        }
    });
    
    const workOut4 = await prisma.workout.create({
       data: {
           name: "Build fighting ability",
           workoutTypeId: 4,
           description: "great for the core",
           difficulty: "Intermediate"
       },
    });

    const workoutType5 = await prisma.workoutType.create({
        data: {
            name: "Calesthenics",
        }
    });
    
    const workOut5 = await prisma.workout.create({
       data: {
           name: "Build Flexible Muscle",
           workoutTypeId: 5,
           description: "great for the back",
           difficulty: "Advanced"
       },
    });


   
     const coach1 = await prisma.coach.create({
>>>>>>> main
        data: {
            name: "Yoga",
        }
    });

    const workOut3 = await prisma.workout.create({
        data: {
            name: "Mindful Stretching",
            workoutTypeId: 3,
            description: "Relaxing yoga routine",
            difficulty: "Beginner",
        },
    });

    const workoutType4 = await prisma.workoutType.create({
        data: {
            name: "Pilates",
        }
    });

    const workOut4 = await prisma.workout.create({
        data: {
            name: "Pilates Sculpt",
            workoutTypeId: 4,
            description: "Sculpt and tone your body with Pilates",
            difficulty: "Intermediate",
        },
    });

    const workoutType5 = await prisma.workoutType.create({
        data: {
            name: "Strength Training",
        }
    });

    const workOut5 = await prisma.workout.create({
        data: {
            name: "Strength and Conditioning",
            workoutTypeId: 5,
            description: "Full-body strength training session",
            difficulty: "Advanced",
        },
    });

    const workoutType6 = await prisma.workoutType.create({
        data: {
            name: "Cycling",
        }
    });

    const workOut6 = await prisma.workout.create({
        data: {
            name: "High-Intensity Cycling",
            workoutTypeId: 6,
            description: "Intense cycling workout for cardiovascular fitness",
            difficulty: "Advanced",
        },
    });

    const workoutType7 = await prisma.workoutType.create({
        data: {
            name: "CrossFit",
        }
    });

    const workOut7 = await prisma.workout.create({
        data: {
            name: "CrossFit WOD",
            workoutTypeId: 7,
            description: "CrossFit workout of the day",
            difficulty: "Advanced",
        },
    });

    const workoutType8 = await prisma.workoutType.create({
        data: {
            name: "Swimming",
        }
    });

    const workOut8 = await prisma.workout.create({
        data: {
            name: "Swim Training",
            workoutTypeId: 8,
            description: "Training program for improving swimming techniques",
            difficulty: "Intermediate",
        },
    });

    const coach1 = await prisma.coach.create({
        data: {
<<<<<<< HEAD
            name: "Jamari",
            isNutritionist: false,
            imgURL: "add image here",
            workoutTypes: { connect: [workoutType1] },
=======
            name: "Jennifer",
            isNutritionist: true,
            imgURL: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhlYWRzaG90cyUyMG9mJTIwcGVvcGxlfGVufDB8fDB8fHww",
            workoutTypes: { connect: [workoutType1]} ,
>>>>>>> main
        },
    });


    const coach2 = await prisma.coach.create({
        data: {
            name: "Seb",
            isNutritionist: false,
<<<<<<< HEAD
            imgURL: "add image here",
            workoutTypes: { connect: [workoutType2] },
=======
            imgURL: "https://images.unsplash.com/photo-1504199367641-aba8151af406?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxwZW9wbGV8ZW58MHx8MHx8fDA%3D",
            workoutTypes: { connect: [workoutType2]} ,
>>>>>>> main
        },
    });

    const coach3 = await prisma.coach.create({
        data: {
            name: "Carter",
<<<<<<< HEAD
            isNutritionist: true,
            imgURL: "add image here",
            workoutTypes: { connect: [workoutType1] },
        },
    });



    const exercise1 = await prisma.exercise.create({
=======
            isNutritionist: false,
            imgURL: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3RzJTIwb2YlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
            workoutTypes: { connect: [workoutType3]} ,
        },
     });
     const coach4 = await prisma.coach.create({
        data:{
            name: "Peter",
            isNutritionist: false,
            imgURL: "https://images.unsplash.com/photo-1504810370725-2585de12e6ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhlYWRzaG90cyUyMG9mJTIwcGVvcGxlfGVufDB8fDB8fHww",
            workoutTypes: {connect: [workoutType4]}
        }
     })
     const coach5 =await prisma.coach.create({
        data: {
            name:"John",
            isNutritionist: false,
            imgURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHNob3RzJTIwb2YlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
            workoutTypes: {connect: [workoutType5]}
        }
     })



     const exercise1 = await prisma.exercise.create({
>>>>>>> main
        data: {
            name: "Push Ups",
            muscleGroup: "upper body",
            description: "great for the core",
            imgUrl: "/assets/Pushup.jpg",
            videoLink: "https://www.youtube.com/embed/1Pi0w8bUHPY",
        },
    });

<<<<<<< HEAD
    const exercise2 = await prisma.exercise.create({
=======
     const exercise2 = await prisma.exercise.create({
>>>>>>> main
        data: {
            name: "Jumping Jacks",
            muscleGroup: "full body",
            description: "great for the core",
            imgUrl: "/assets/JumpingJack.jpg",
            videoLink: "https://www.youtube.com/embed/nwaFHDQP2YU?si=icEG3nitmvy0gUos",
        },
<<<<<<< HEAD
    });
    const exercise3 = await prisma.exercise.create({
=======
     });
     const exercise3 = await prisma.exercise.create({
>>>>>>> main
        data: {
            name: "Sit Ups",
            muscleGroup: "stomach",
            description: "great for the abs",
            imgUrl: "/assets/Situp.jpg",
            videoLink: "https://www.youtube.com/embed/PvbA9V2_2Wk?si=AehfyiA0jHtYjv6z",
        },
    });

<<<<<<< HEAD
    const exercise4 = await prisma.exercise.create({
=======
     const exercise4 = await prisma.exercise.create({
>>>>>>> main
        data: {
            name: "Squats",
            muscleGroup: "glutes",
            description: "core strength",
            imgUrl: "/assets/Squat.jpg",
            videoLink: "https://www.youtube.com/embed/Toq-5vzwdFU?si=G8FT-Z6lHKnjwZVo",
        },
    });

<<<<<<< HEAD
    const exercise5 = await prisma.exercise.create({
=======
     const exercise5 = await prisma.exercise.create({
>>>>>>> main
        data: {
            name: "Burpees",
            muscleGroup: "full body",
            description: "increase stanmina and strength",
            imgUrl: "/assets/Burpee.jpg",
            videoLink: "https://www.youtube.com/embed/auBLPXO8Fww?si=bT1uS93WI-6T-cuf",
        },
    });


<<<<<<< HEAD
    const exercise6 = await prisma.exercise.create({
=======
     const exercise6 = await prisma.exercise.create({
>>>>>>> main
        data: {
            name: "Lunges",
            muscleGroup: "legs",
            description: "iron legs",
            imgUrl: "/assets/Lunge.jpg",
            videoLink: "https://www.youtube.com/embed/DlhojghkaQ0?si=FdSZdx78k5ufMXbU",
        },
    });

<<<<<<< HEAD
    const exercise7 = await prisma.exercise.create({
=======
     const exercise7 = await prisma.exercise.create({
>>>>>>> main
        data: {
            name: "Running",
            muscleGroup: "legs and core",
            description: "stamina",
            imgUrl: "/assets/Running.jpg",
            videoLink: "https://www.youtube.com/embed/3r7d4qhKCp8?si=lkigFMxshzzf2Coy",
        },
    });

<<<<<<< HEAD
    const exercise8 = await prisma.exercise.create({
=======
     const exercise8 = await prisma.exercise.create({
>>>>>>> main
        data: {
            name: "Jump Rope",
            muscleGroup: "full body",
            description: "great for the abs",
            imgUrl: "/assets/JumpingRope.jpg",
            videoLink: "https://www.youtube.com/embed/Z1DSRtSA61o?si=30SGCWy0t0npsY5U",
        },
    });

<<<<<<< HEAD
    const exercise9 = await prisma.exercise.create({
=======
     const exercise9 = await prisma.exercise.create({
>>>>>>> main
        data: {
            name: "Planks",
            muscleGroup: "core",
            description: "great for the abs",
            imgUrl: "/assets/Plank.jpg",
            videoLink: "https://www.youtube.com/embed/4e-E9tic0V8?si=x4x_IXyGdhARPyyM",
        },
    });

<<<<<<< HEAD
    const exercise10 = await prisma.exercise.create({
=======
     const exercise10 = await prisma.exercise.create({
>>>>>>> main
        data: {
            name: "Swimming",
            muscleGroup: "full body",
            description: "fitness under the sea",
            imgUrl: "/assets/Swimming.jpg",
            videoLink: "https://www.youtube.com/embed/hY4YileHEiA?si=9-l9kMvjNeqUqz8l",
        },
    });

    const payment1 = await prisma.payment.create({
        data: {
            cardHolderName: user1.name,
            cardNumber: 123456789,
            expiration: "12/34",
            cvv: 123,
            zipCode: 12345,
            userId: 1,
        }
    });

<<<<<<< HEAD
<<<<<<< HEAD
    const exerciseToWorkout = await prisma.exercisesOnWorkouts.createMany({
        data: [
            {
                exerciseId: 1,
                workoutId: 1,
                exerciseReps: 7,
                exerciseSets: 3,
            },
            {
                exerciseId: 2,
                workoutId: 1,
                exerciseReps: 5,
                exerciseSets: 3,
            },
            {
                exerciseId: 3,
                workoutId: 1,
                exerciseReps: 7,
                exerciseSets: 2,
            },
        ]
    });
=======
     const excerciseToWorkout = await prisma.excercisesOnWorkouts.create
=======
>>>>>>> main
     

     const exerciseToWorkout = await prisma.exercisesOnWorkouts.create({

        data: {
            exerciseId: (1,3),
            workoutId: 1,
            exerciseReps: 5,
            exerciseSets: 2,
>>>>>>> main

    const exerciseToWorkout2 = await prisma.exercisesOnWorkouts.createMany({
        data: [
            {
                exerciseId: 4,
                workoutId: 2,
                exerciseReps: 8,
                exerciseSets: 2,
            },
            {
                exerciseId: 5,
                workoutId: 2,
                exerciseReps: 5,
                exerciseSets: 4,
            },
            {
                exerciseId: 6,
                workoutId: 2,
                exerciseReps: 9,
                exerciseSets: 2,
            },
        ]
    });

<<<<<<< HEAD
    const exerciseToWorkout3 = await prisma.exercisesOnWorkouts.createMany({
        data: [
            {
                exerciseId: 7,
                workoutId: 3,
                exerciseReps: 8,
                exerciseSets: 2,
            },
            {
                exerciseId: 8,
                workoutId: 3,
                exerciseReps: 4,
                exerciseSets: 2,
            },
            {
                exerciseId: 9,
                workoutId: 3,
                exerciseReps: 8,
                exerciseSets: 3,
            },
        ]
    });
=======

<<<<<<< HEAD
      await prisma.excercisesOnWorkouts.create({
        data: {
            excerciseId: (2,1),
            workoutId: 1,
            excerciseReps: 42,
            excerciseSets: 65,
>>>>>>> main

    const exerciseToWorkout4 = await prisma.exercisesOnWorkouts.createMany({
        data: [
            {
                exerciseId: 10,
                workoutId: 4,
                exerciseReps: 3,
                exerciseSets: 5,
            },
            {
                exerciseId: 2,
                workoutId: 4,
                exerciseReps: 2,
                exerciseSets: 6,
            },
            {
                exerciseId: 4,
                workoutId: 4,
                exerciseReps: 6,
                exerciseSets: 4,
            },
        ]
    });

    const exerciseToWorkout5 = await prisma.exercisesOnWorkouts.createMany({
        data: [
            {
                exerciseId: 6,
                workoutId: 5,
                exerciseReps: 2,
                exerciseSets: 7,
            },
            {
                exerciseId: 8,
                workoutId: 5,
                exerciseReps: 6,
                exerciseSets: 3,
            },
            {
                exerciseId: 10,
                workoutId: 5,
                exerciseReps: 4,
                exerciseSets: 3,
            },
        ]
    });

<<<<<<< HEAD
    const exerciseToWorkout6 = await prisma.exercisesOnWorkouts.createMany({
        data: [
            {
                exerciseId: 1,
                workoutId: 6,
                exerciseReps: 5,
                exerciseSets: 2,
            },
            {
                exerciseId: 3,
                workoutId: 6,
                exerciseReps: 6,
                exerciseSets: 4,
            },
            {
                exerciseId: 5,
                workoutId: 6,
                exerciseReps: 8,
                exerciseSets: 3,
            },
        ]
    });

    const exerciseToWorkout7 = await prisma.exercisesOnWorkouts.createMany({
        data: [
            {
                exerciseId: 7,
                workoutId: 7,
                exerciseReps: 5,
                exerciseSets: 3,
            },
            {
                exerciseId: 9,
                workoutId: 7,
                exerciseReps: 3,
                exerciseSets: 3,
            },
            {
                exerciseId: 10,
                workoutId: 7,
                exerciseReps: 4,
                exerciseSets: 4,
            },
        ]
    });

    const exerciseToWorkout8 = await prisma.exercisesOnWorkouts.createMany({
        data: [
            {
                exerciseId: 1,
                workoutId: 8,
                exerciseReps: 6,
                exerciseSets: 3,
            },
            {
                exerciseId: 4,
                workoutId: 8,
                exerciseReps: 3,
                exerciseSets: 4,
            },
            {
                exerciseId: 7,
                workoutId: 8,
                exerciseReps: 2,
                exerciseSets: 6,
            },
        ]
    });
=======
=======
>>>>>>> main
     const exerciseToWorkout2 = await prisma.exercisesOnWorkouts.create({
        data: {
            exerciseId: (2,1),
            workoutId: 2,
            exerciseReps: 5,
            exerciseSets: 2,

        }
     });

     const exerciseToWorkout3 = await prisma.exercisesOnWorkouts.create({
        data: {
            exerciseId: (1,3,10,5),
            workoutId: 3,
            exerciseReps: 5,
            exerciseSets: 2,

        }
     });

     const exerciseToWorkout4 = await prisma.exercisesOnWorkouts.create({
        data: {
            exerciseId: (5,6,7),
            workoutId: 4,
            exerciseReps: 5,
            exerciseSets: 2,

        }
     });

     const exerciseToWorkout5 = await prisma.exercisesOnWorkouts.create({
        data: {
            exerciseId: (8,9,10),
            workoutId: 5,
            exerciseReps: 5,
            exerciseSets: 2,


        }
     });
>>>>>>> main



}
seed()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
