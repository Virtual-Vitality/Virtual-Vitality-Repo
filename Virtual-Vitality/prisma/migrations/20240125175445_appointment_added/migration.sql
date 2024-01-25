/*
  Warnings:

  - You are about to drop the column `userId` on the `Coach` table. All the data in the column will be lost.
  - You are about to drop the column `isCoach` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Coach" DROP CONSTRAINT "Coach_userId_fkey";

-- DropIndex
DROP INDEX "Coach_userId_key";

-- AlterTable
ALTER TABLE "Coach" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isCoach";

-- CreateTable
CREATE TABLE "Appointments" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "coachId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_coachId_fkey" FOREIGN KEY ("coachId") REFERENCES "Coach"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
