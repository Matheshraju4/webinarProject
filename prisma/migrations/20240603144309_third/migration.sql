/*
  Warnings:

  - A unique constraint covering the columns `[receipt]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_receipt_key" ON "User"("receipt");
