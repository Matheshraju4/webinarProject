-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "contact" TEXT,
    "order_Id" TEXT NOT NULL,
    "signature" TEXT,
    "payment_Id" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
