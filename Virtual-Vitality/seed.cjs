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
    
    const workOut3 = await prisma.workout.create({
       data: {
           name: "Get a faster sprint",
           workoutTypeId: 3,
           description: "great for the calves",
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
       },
    });


   
     const coach1 = await prisma.coach.create({
        data: {
            name: "Jennifer",
            isNutritionist: true,
            imgURL: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhlYWRzaG90cyUyMG9mJTIwcGVvcGxlfGVufDB8fDB8fHww",
            workoutTypes: { connect: [workoutType1]} ,
        },
     });


     const coach2 = await prisma.coach.create({
        data: {
            name: "Seb",
            isNutritionist: false,
            imgURL: "https://images.unsplash.com/photo-1504199367641-aba8151af406?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxwZW9wbGV8ZW58MHx8MHx8fDA%3D",
            workoutTypes: { connect: [workoutType2]} ,
        },
     });

     const coach3 = await prisma.coach.create({
        data: {
            name: "Carter",
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
        data: {
            name: "Push Ups",
            muscleGroup: "upper body",
            description: "great for the core",
            imgUrl: "/assets/Pushup.jpg",
            videoLink: "https://www.youtube.com/embed/1Pi0w8bUHPY",
        },
     });

     const exercise2 = await prisma.exercise.create({
        data: {
            name: "Jumping Jacks",
            muscleGroup: "full body",
            description: "great for the core",
            imgUrl: "/assets/JumpingJack.jpg",
            videoLink: "https://www.youtube.com/embed/nwaFHDQP2YU?si=icEG3nitmvy0gUos",
        },
     });
     const exercise3 = await prisma.exercise.create({
        data: {
            name: "Sit Ups",
            muscleGroup: "stomach",
            description: "great for the abs",
            imgUrl: "/assets/Situp.jpg",
            videoLink: "https://www.youtube.com/embed/PvbA9V2_2Wk?si=AehfyiA0jHtYjv6z",
        },
     });

     const exercise4 = await prisma.exercise.create({
        data: {
            name: "Squats",
            muscleGroup: "glutes",
            description: "core strength",
            imgUrl: "/assets/Squat.jpg",
            videoLink: "https://www.youtube.com/embed/Toq-5vzwdFU?si=G8FT-Z6lHKnjwZVo",
        },
     });

     const exercise5 = await prisma.exercise.create({
        data: {
            name: "Burpees",
            muscleGroup: "full body",
            description: "increase stanmina and strength",
            imgUrl: "/assets/Burpee.jpg",
            videoLink: "https://www.youtube.com/embed/auBLPXO8Fww?si=bT1uS93WI-6T-cuf",
        },
     });


     const exercise6 = await prisma.exercise.create({
        data: {
            name: "Lunges",
            muscleGroup: "legs",
            description: "iron legs",
            imgUrl: "/assets/Lunge.jpg",
            videoLink: "https://www.youtube.com/embed/DlhojghkaQ0?si=FdSZdx78k5ufMXbU",
        },
     });

     const exercise7 = await prisma.exercise.create({
        data: {
            name: "Running",
            muscleGroup: "legs and core",
            description: "stamina",
            imgUrl: "/assets/Running.jpg",
            videoLink: "https://www.youtube.com/embed/3r7d4qhKCp8?si=lkigFMxshzzf2Coy",
        },
     });

     const exercise8 = await prisma.exercise.create({
        data: {
            name: "Jump Rope",
            muscleGroup: "full body",
            description: "great for the abs",
            imgUrl: "/assets/JumpingRope.jpg",
            videoLink: "https://www.youtube.com/embed/Z1DSRtSA61o?si=30SGCWy0t0npsY5U",
        },
     });

     const exercise9 = await prisma.exercise.create({
        data: {
            name: "Planks",
            muscleGroup: "core",
            description: "great for the abs",
            imgUrl: "/assets/Plank.jpg",
            videoLink: "https://www.youtube.com/embed/4e-E9tic0V8?si=x4x_IXyGdhARPyyM",
        },
     });

     const exercise10 = await prisma.exercise.create({
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

     

     const exerciseToWorkout = await prisma.exercisesOnWorkouts.create({

        data: {
            exerciseId: (1,3),
            workoutId: 1,
            exerciseReps: 5,
            exerciseSets: 2,

        }
     });


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
