-- CreateEnum
CREATE TYPE "Duration" AS ENUM ('half', '45', '60');

-- CreateEnum
CREATE TYPE "Experience_Type" AS ENUM ('work', 'education');

-- CreateEnum
CREATE TYPE "Order_Status" AS ENUM ('succesed', 'returned', 'cancelled');

-- CreateEnum
CREATE TYPE "Order_Status2" AS ENUM ('progress', 'cancel');

-- CreateEnum
CREATE TYPE "Order_type" AS ENUM ('booking', 'subscription', 'course');

-- CreateEnum
CREATE TYPE "Payment_Method" AS ENUM ('visa', 'master', 'alipay', 'octopus');

-- CreateEnum
CREATE TYPE "Booking_Status" AS ENUM ('pending', 'accept', 'reject', 'completed');

-- CreateTable
CREATE TABLE "Bookmark" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "course_id" INTEGER,
    "article_id" INTEGER,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coupon" (
    "id" SERIAL NOT NULL,
    "promocode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "discount_amount" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "start_at" TIMESTAMP(3) NOT NULL,
    "end_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Redeem_Coupon" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "coupon_id" INTEGER NOT NULL,
    "is_used" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Redeem_Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mentor_Experience" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type" "Experience_Type" NOT NULL,
    "title_name" TEXT,
    "org_name" TEXT,
    "start_year" TEXT,
    "end_year" TEXT,
    "start_month" TEXT,
    "end_month" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mentor_Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mentor_Service" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "service_id" INTEGER NOT NULL,
    "duration" "Duration" NOT NULL,
    "price" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mentor_Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mentor_Skill" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "skill_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mentor_Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mentor_Profile" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "website" TEXT,
    "linkedin" TEXT,
    "facebook" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mentor_Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "status" "Order_Status" NOT NULL,
    "type" "Order_type" NOT NULL,
    "payment_method" "Payment_Method" NOT NULL,
    "redeem_coupon_id" INTEGER NOT NULL,
    "total_amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order_Booking" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "status" "Booking_Status" NOT NULL DEFAULT 'pending',
    "mentor_service_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order_Course" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,
    "course_status" TEXT NOT NULL,
    "course_name" TEXT NOT NULL,
    "course_price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order_Subscription" (
    "id" SERIAL NOT NULL,
    "status" "Order_Status2" NOT NULL,
    "order_id" INTEGER NOT NULL,
    "subscription_id" INTEGER NOT NULL,
    "subscription_name" TEXT NOT NULL,
    "subscription_price" INTEGER NOT NULL,
    "end_dt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shopping_Cart" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shopping_Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coupon_promocode_key" ON "Coupon"("promocode");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_Service_service_id_key" ON "Mentor_Service"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_Skill_skill_id_key" ON "Mentor_Skill"("skill_id");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_Profile_user_id_key" ON "Mentor_Profile"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_redeem_coupon_id_key" ON "Order"("redeem_coupon_id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_Booking_order_id_key" ON "Order_Booking"("order_id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_Subscription_order_id_key" ON "Order_Subscription"("order_id");

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Redeem_Coupon" ADD CONSTRAINT "Redeem_Coupon_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Redeem_Coupon" ADD CONSTRAINT "Redeem_Coupon_coupon_id_fkey" FOREIGN KEY ("coupon_id") REFERENCES "Coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor_Experience" ADD CONSTRAINT "Mentor_Experience_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor_Service" ADD CONSTRAINT "Mentor_Service_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor_Service" ADD CONSTRAINT "Mentor_Service_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor_Skill" ADD CONSTRAINT "Mentor_Skill_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor_Skill" ADD CONSTRAINT "Mentor_Skill_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor_Profile" ADD CONSTRAINT "Mentor_Profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_redeem_coupon_id_fkey" FOREIGN KEY ("redeem_coupon_id") REFERENCES "Redeem_Coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_Booking" ADD CONSTRAINT "Order_Booking_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_Booking" ADD CONSTRAINT "Order_Booking_mentor_service_id_fkey" FOREIGN KEY ("mentor_service_id") REFERENCES "Mentor_Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_Course" ADD CONSTRAINT "Order_Course_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_Course" ADD CONSTRAINT "Order_Course_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_Subscription" ADD CONSTRAINT "Order_Subscription_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_Subscription" ADD CONSTRAINT "Order_Subscription_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shopping_Cart" ADD CONSTRAINT "Shopping_Cart_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shopping_Cart" ADD CONSTRAINT "Shopping_Cart_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
