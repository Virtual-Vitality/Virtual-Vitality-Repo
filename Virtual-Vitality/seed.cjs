const prisma = require("./src/Server/client.cjs");
const bcrypt = require("bcrypt");



const saltrounds = 5;

async function seed () {
    const hashedUser1 = await bcrypt.hash("password", saltrounds);
    const user1 = await prisma.user.create({
        data: {
            name: "Peng",
            email: "peng@yahoo.com",
            userName: "peng123",
            password : hashedUser1,
           
        },
    });

    const hashedUser2 = await bcrypt.hash("password", saltrounds);
    const user2 = await prisma.user.create({
        data: {
            name: "Sebastian",
            email: "seb@gmail.com",
            userName: "top coach 123",
            password : hashedUser2,
           
        },
    });

    const hashedUser3 = await bcrypt.hash("password", saltrounds);
    const user3 = await prisma.user.create({
        data: {
            name: "Jaylen",
            email: "jaylen@yahoo.com",
            userName: "Jay3",
            password : hashedUser3,
           
        },
    });

    const hashedUser4 = await bcrypt.hash("password", saltrounds);
    const user4 = await prisma.user.create({
        data: {
            name: "Chris",
            email: "chris@aol.com",
            userName: "Chris45",
            password : hashedUser4,
           
        },
    });

    const hashedUser5 = await bcrypt.hash("password", saltrounds);
    const user5 = await prisma.user.create({
        data: {
            name: "Jamari",
            email: "jamari@yahoo.com",
            userName: "Jamari334",
            password : hashedUser5,
          
        },
    });

    const hashedUser6 = await bcrypt.hash("password", saltrounds);
    const user6 = await prisma.user.create({
        data: {
            name: "Carter",
            email: "carter@yahoo.com",
            userName: "Carter222",
            password : hashedUser6,
          
        },
    });
    
    const workoutType1 = await prisma.workoutType.create({
        data: {
            name: "Weight Lifting",
        }
    });
    
    const workOut1 = await prisma.workout.create({
       data: {
           name: "Build Muscle",
           workoutTypeId: 1,
           description: "great for the core",
       },
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
        },
     });

     const workoutType3 = await prisma.workoutType.create({
        data: {
            name: "Cardio",
        }
    });
    

    const workoutType4 = await prisma.workoutType.create({
        data: {
            name: "Heart Racer",
        }
    });

    const workoutType5 = await prisma.workoutType.create({
        data: {
            name: "Stretching",
        }
    });

    const workoutType6 = await prisma.workoutType.create({
        data: {
            name: "Balance Training",
        }
    });

    const workoutType7 = await prisma.workoutType.create({
        data: {
            name: "Yoga",
        }
    });

    const workOut3 = await prisma.workout.create({
        data: {
            name: "Iron Legs",
            workoutTypeId: 3,
            description: "greate for leg strength",
        },
     });

     const workOut4 = await prisma.workout.create({
        data: {
            name: "Summer body",
            workoutTypeId: 4,
            description: "Summer never been finerrrr",
        },
     });

     const workOut5 = await prisma.workout.create({
        data: {
            name: "Warm ups and cool Downs",
            workoutTypeId: 5,
            description: "Don't pull muscles, shred fat",
        },
     });

     const workOut6 = await prisma.workout.create({
        data: {
            name: "Power Hour",
            workoutTypeId: 6,
            description: "test your strength",
        },
     });

     const workOut7 = await prisma.workout.create({
        data: {
            name: "Sanity Session",
            workoutTypeId: 7,
            description: "relax your mind",
        },
     });

   
     const coach1 = await prisma.coach.create({
        data: {
            name: "Jamari",
            isNutritionist: false,
            imgURL: "add image here",
            workoutTypes: { connect: [workoutType1]} ,
        },
     });


     const coach2 = await prisma.coach.create({
        data: {
            name: "Seb",
            isNutritionist: false,
            imgURL: "add image here",
            workoutTypes: { connect: [workoutType2]} ,
        },
     });

     const coach3 = await prisma.coach.create({
        data: {
            name: "Carter",
            isNutritionist: true,
            imgURL: "add image here",
            workoutTypes: { connect: [workoutType1]} ,
        },
     });



     const exercise1 = await prisma.excercise.create({
        data: {
            name: "Push Ups",
            muscleGroup: "upper body",
            description: "great for the core",
            imgUrl: "./src/Assets/Pushup.jpg",
            videoLink: "https://www.youtube.com/embed/1Pi0w8bUHPY",
        },
     });

     const exercise2 = await prisma.excercise.create({
        data: {
            name: "Jumping Jacks",
            muscleGroup: "full body",
            description: "great for the core",
            imgUrl: "./src/Assets/JumpingJack.jpg",
            videoLink: "https://www.youtube.com/embed/nwaFHDQP2YU?si=icEG3nitmvy0gUos",
        },
     });
     const exercise3 = await prisma.excercise.create({
        data: {
            name: "Sit Ups",
            muscleGroup: "stomach",
            description: "great for the abs",
            imgUrl: "./src/Assets/Situp.jpg",
            videoLink: "https://www.youtube.com/embed/PvbA9V2_2Wk?si=AehfyiA0jHtYjv6z",
        },
     });

     const exercise4 = await prisma.excercise.create({
        data: {
            name: "Squats",
            muscleGroup: "glutes",
            description: "core strength",
            imgUrl: "./src/Assets/Squat.jpg",
            videoLink: "https://www.youtube.com/embed/Toq-5vzwdFU?si=G8FT-Z6lHKnjwZVo",
        },
     });

     const exercise5 = await prisma.excercise.create({
        data: {
            name: "Burpees",
            muscleGroup: "full body",
            description: "increase stanmina and strength",
            imgUrl: "./src/Assets/Burpee.jpg",
            videoLink: "https://www.youtube.com/embed/auBLPXO8Fww?si=bT1uS93WI-6T-cuf",
        },
     });


     const exercise6 = await prisma.excercise.create({
        data: {
            name: "Lunges",
            muscleGroup: "legs",
            description: "iron legs",
            imgUrl: "./src/Assets/Lunge.jpg",
            videoLink: "https://www.youtube.com/embed/DlhojghkaQ0?si=FdSZdx78k5ufMXbU",
        },
     });

     const exercise7 = await prisma.excercise.create({
        data: {
            name: "Running",
            muscleGroup: "legs and core",
            description: "stamina",
            imgUrl: "./src/Assets/Running.jpg",
            videoLink: "https://www.youtube.com/embed/3r7d4qhKCp8?si=lkigFMxshzzf2Coy",
        },
     });

     const exercise8 = await prisma.excercise.create({
        data: {
            name: "Jump Rope",
            muscleGroup: "full body",
            description: "great for the abs",
            imgUrl: "./src/Assets/JumpingRope.jpg",
            videoLink: "https://www.youtube.com/embed/Z1DSRtSA61o?si=30SGCWy0t0npsY5U",
        },
     });

     const exercise9 = await prisma.excercise.create({
        data: {
            name: "Planks",
            muscleGroup: "core",
            description: "great for the abs",
            imgUrl: "./src/Assets/Plank.jpg",
            videoLink: "https://www.youtube.com/embed/4e-E9tic0V8?si=x4x_IXyGdhARPyyM",
        },
     });

     const exercise10 = await prisma.excercise.create({
        data: {
            name: "Swimming",
            muscleGroup: "full body",
            description: "fitness under the sea",
            imgUrl: "./src/Assets/Swimming.jpg",
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

     

     const excerciseToWorkout = await prisma.excercisesOnWorkouts.create({
        data: {
            excerciseId: (1,3),
            workoutId: 1,
            excerciseReps: 5,
            excerciseSets: 2,

        }
     });

     const excerciseToWorkout2 = await prisma.excercisesOnWorkouts.create({
        data: {
            excerciseId: (2,1),
            workoutId: 2,
            excerciseReps: 5,
            excerciseSets: 2,

        }
     });

     const excerciseToWorkout3 = await prisma.excercisesOnWorkouts.create({
        data: {
            excerciseId: (1,3,10,5),
            workoutId: 3,
            excerciseReps: 5,
            excerciseSets: 2,

        }
     });

     const excerciseToWorkout4 = await prisma.excercisesOnWorkouts.create({
        data: {
            excerciseId: (5,6,7),
            workoutId: 4,
            excerciseReps: 5,
            excerciseSets: 2,

        }
     });

     const excerciseToWorkout5 = await prisma.excercisesOnWorkouts.create({
        data: {
            excerciseId: (8,9,10),
            workoutId: 5,
            excerciseReps: 5,
            excerciseSets: 2,

        }
     });



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