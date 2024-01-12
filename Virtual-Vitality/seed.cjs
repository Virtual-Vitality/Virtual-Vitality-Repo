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
     const coach1 = await prisma.coach.create({
        data: {
            name: "Bob",
            isNutritionist: false,
            imgURL: "add image here",
            userId: 1,
            workoutTypes: { connect: [workoutType1]} ,
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


     const payment1 = await prisma.payment.create({
        data: {
            cardHolderName: user1.name,
            cardNumber: 123456789,
            expiration: "12/34",
            cvv: 123,
            zipCode: 12345,
            userId: 1, 
        }
     })

     const excerciseToWorkout = await prisma.excercisesOnWorkouts.create({
        data: {
            excerciseId: 1,
            workoutId: 1,
            excerciseReps: 5,
            excerciseSets: 2,

        }
     })



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