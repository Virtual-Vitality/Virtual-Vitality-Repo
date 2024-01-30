/*
  Warnings:

  - You are about to drop the `Excercise` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExcercisesOnWorkouts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExcercisesOnWorkouts" DROP CONSTRAINT "ExcercisesOnWorkouts_excerciseId_fkey";

-- DropForeignKey
ALTER TABLE "ExcercisesOnWorkouts" DROP CONSTRAINT "ExcercisesOnWorkouts_workoutId_fkey";

-- DropTable
DROP TABLE "Excercise";

-- DropTable
DROP TABLE "ExcercisesOnWorkouts";

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "muscleGroup" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "videoLink" TEXT NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExercisesOnWorkouts" (
    "id" SERIAL NOT NULL,
    "exerciseId" INTEGER NOT NULL,
    "workoutId" INTEGER NOT NULL,
    "exerciseReps" INTEGER NOT NULL,
    "exerciseSets" INTEGER NOT NULL,

    CONSTRAINT "ExercisesOnWorkouts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ExercisesOnWorkouts" ADD CONSTRAINT "ExercisesOnWorkouts_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExercisesOnWorkouts" ADD CONSTRAINT "ExercisesOnWorkouts_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
