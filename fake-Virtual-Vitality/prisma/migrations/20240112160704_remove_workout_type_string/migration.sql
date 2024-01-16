/*
  Warnings:

  - You are about to drop the column `typeOfWorkout` on the `Workout` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Workout_typeOfWorkout_key";

-- AlterTable
ALTER TABLE "Workout" DROP COLUMN "typeOfWorkout";
