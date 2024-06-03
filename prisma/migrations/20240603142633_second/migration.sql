/*
  Warnings:

  - Added the required column `receipt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "receipt" TEXT NOT NULL,
ALTER COLUMN "order_Id" DROP NOT NULL;
