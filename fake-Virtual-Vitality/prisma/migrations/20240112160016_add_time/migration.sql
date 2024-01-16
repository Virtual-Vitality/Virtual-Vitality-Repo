/*
  Warnings:

  - Added the required column `hours` to the `WorkoutType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkoutType" ADD COLUMN     "hours" TIMESTAMP(3) NOT NULL;
