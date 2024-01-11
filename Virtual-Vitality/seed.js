const prisma = require("./src/Server/client.js");
const bcrypt = require("bcrypt");



const saltrounds = 5;

async function seed () {
    const hashedUser1 = await bcrypt.hash("password", saltrounds);
    const Peng = await prisma.user.create({
        data: {
            name: "Peng",
            email: "peng@yahoo.com",
            userName: "peng123",
            password : hashedUser1,
            isCoach : false,
        },
    });

     const coach1 = await prisma.coach.create({
        data: {
            name: "Jack",
            workoutType: "Weight Lifting",
            isNutritionist: false,
            imgURL: "add image here",
            userId: "",
        }
     });

     const exercise1 = await prisma.excercise.create({
        data: {
            name: "push ups",
            muscleGroup: "upper body",
            description: "great for the core",
            imgUrl: "add img here",
            videoLink: "add link here",
        }
     });

     const workOut1 = await prisma.workout.create({
        data: {
            name: "Build Muscle",
            typeOfWorkout: "Weight Lifting",
            description: "great for the core",
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