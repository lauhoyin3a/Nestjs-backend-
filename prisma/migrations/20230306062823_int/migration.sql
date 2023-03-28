-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "Occupation" AS ENUM ('Manufacturing', 'Construction', 'Import/Export, WholeSale and Retail', 'Transportation, Storage, Postal and Courier Services', 'Accommodation and Food Services', 'Information and Communications', 'Financial and Insurance', 'Real Estate', 'Professional, Scientific and Technical', 'Administrative and Support Services', 'Public Administration', 'Medical and Health', 'Education', 'Social Work', 'Art, Entertainment and Recreation', 'Other');

-- CreateEnum
CREATE TYPE "Education_level" AS ENUM ('Primary School', 'Secondary School  ', 'Higher-Diploma', 'Associate Degree', 'Bachelor Degree', 'Master Degree', 'PhD');

-- CreateTable
CREATE TABLE "User_profile" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name_chi" TEXT NOT NULL,
    "first_name_chi" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "birthday" TEXT NOT NULL,
    "occupation" "Occupation" NOT NULL,
    "education_level" "Education_level" NOT NULL,
    "cv" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_profile_user_id_key" ON "User_profile"("user_id");

-- AddForeignKey
ALTER TABLE "User_profile" ADD CONSTRAINT "User_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
