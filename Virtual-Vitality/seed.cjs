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
            isCoach : false,
        },
    });

    const hashedUser2 = await bcrypt.hash("password", saltrounds);
    const user2 = await prisma.user.create({
        data: {
            name: "Sebastian",
            email: "seb@gmail.com",
            userName: "top coach 123",
            password : hashedUser2,
            isCoach : true,
        },
    });

    const hashedUser3 = await bcrypt.hash("password", saltrounds);
    const user3 = await prisma.user.create({
        data: {
            name: "Jaylen",
            email: "jaylen@yahoo.com",
            userName: "Jay3",
            password : hashedUser3,
            isCoach : false,
        },
    });

    const hashedUser4 = await bcrypt.hash("password", saltrounds);
    const user4 = await prisma.user.create({
        data: {
            name: "Chris",
            email: "chris@aol.com",
            userName: "Chris45",
            password : hashedUser4,
            isCoach : false,
        },
    });

    const hashedUser5 = await bcrypt.hash("password", saltrounds);
    const user5 = await prisma.user.create({
        data: {
            name: "Jamari",
            email: "jamari@yahoo.com",
            userName: "Jamari334",
            password : hashedUser5,
            isCoach : true,
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
            userId: 5,
            workoutTypes: { connect: [workoutType1]} ,
        },
     });


     const coach2 = await prisma.coach.create({
        data: {
            name: "Seb",
            isNutritionist: false,
            imgURL: "add image here",
            userId: 2,
            workoutTypes: { connect: [workoutType2]} ,
        },
     });



     const exercise1 = await prisma.excercise.create({
        data: {
            name: "push ups",
            muscleGroup: "upper body",
            description: "great for the core",
            imgUrl: "add img here",
            videoLink: "add link here",
        },
     });

     const exercise2 = await prisma.excercise.create({
        data: {
            name: "jumping jacks",
            muscleGroup: "full body",
            description: "great for the core",
            imgUrl: "add img here",
            videoLink: "add link here",
        },
     });
     const exercise3 = await prisma.excercise.create({
        data: {
            name: "sit ups",
            muscleGroup: "stomach",
            description: "great for the abs",
            imgUrl: "add img here",
            videoLink: "add link here",
        },
     });

     const exercise4 = await prisma.excercise.create({
        data: {
            name: "squats",
            muscleGroup: "glutes",
            description: "core strength",
            imgUrl: "add img here",
            videoLink: "add link here",
        },
     });

     const exercise5 = await prisma.excercise.create({
        data: {
            name: "burpees",
            muscleGroup: "full body",
            description: "increase stanmina and strength",
            imgUrl: "add img here",
            videoLink: "add link here",
        },
     });


     const exercise6 = await prisma.excercise.create({
        data: {
            name: "lunges",
            muscleGroup: "legs",
            description: "iron legs",
            imgUrl: "add img here",
            videoLink: "add link here",
        },
     });

     const exercise7 = await prisma.excercise.create({
        data: {
            name: "running",
            muscleGroup: "legs and core",
            description: "stamina",
            imgUrl: "add img here",
            videoLink: "add link here",
        },
     });

     const exercise8 = await prisma.excercise.create({
        data: {
            name: "jump rope",
            muscleGroup: "full body",
            description: "great for the abs",
            imgUrl: "add img here",
            videoLink: "add link here",
        },
     });

     const exercise9 = await prisma.excercise.create({
        data: {
            name: "planks",
            muscleGroup: "core",
            description: "great for the abs",
            imgUrl: "add img here",
            videoLink: "add link here",
        },
     });

     const exercise10 = await prisma.excercise.create({
        data: {
            name: "swimming",
            muscleGroup: "full body",
            description: "fitness under the sea",
            imgUrl: "add img here",
            videoLink: "add link here",
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