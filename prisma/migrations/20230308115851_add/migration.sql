/*
  Warnings:

  - Added the required column `count` to the `Handclap` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_dt` to the `Order_Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_duration` to the `Order_Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_price` to the `Order_Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_dt` to the `Order_Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Handclap" ADD COLUMN     "count" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Order_Booking" ADD COLUMN     "end_dt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "file_path" TEXT,
ADD COLUMN     "service_duration" INTEGER NOT NULL,
ADD COLUMN     "service_price" INTEGER NOT NULL,
ADD COLUMN     "start_dt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "zoom_link" TEXT;
