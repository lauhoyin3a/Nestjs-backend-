/*
  Warnings:

  - You are about to drop the `Categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Weekday" AS ENUM ('Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun');

-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_category_id_fkey";

-- DropForeignKey
ALTER TABLE "Categories_Courses_Map" DROP CONSTRAINT "Categories_Courses_Map_categoriesId_fkey";

-- DropTable
DROP TABLE "Categories";

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cover_image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mentor_Booked" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "timeslot_id" INTEGER NOT NULL,
    "date" TIMESTAMP(3),
    "order_booking_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mentor_Booked_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mentor_Schedule" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "weekdays_id" INTEGER NOT NULL,
    "start_dt" TIMESTAMP(3) NOT NULL,
    "end_dt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mentor_Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timeslot" (
    "id" SERIAL NOT NULL,
    "time" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Timeslot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weekdays" (
    "id" SERIAL NOT NULL,
    "weekday" "Weekday" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Weekdays_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_Booked_timeslot_id_key" ON "Mentor_Booked"("timeslot_id");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_Booked_order_booking_id_key" ON "Mentor_Booked"("order_booking_id");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_Schedule_weekdays_id_key" ON "Mentor_Schedule"("weekdays_id");

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categories_Courses_Map" ADD CONSTRAINT "Categories_Courses_Map_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor_Booked" ADD CONSTRAINT "Mentor_Booked_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor_Booked" ADD CONSTRAINT "Mentor_Booked_timeslot_id_fkey" FOREIGN KEY ("timeslot_id") REFERENCES "Timeslot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor_Booked" ADD CONSTRAINT "Mentor_Booked_order_booking_id_fkey" FOREIGN KEY ("order_booking_id") REFERENCES "Order_Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor_Schedule" ADD CONSTRAINT "Mentor_Schedule_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor_Schedule" ADD CONSTRAINT "Mentor_Schedule_weekdays_id_fkey" FOREIGN KEY ("weekdays_id") REFERENCES "Weekdays"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
