/*
  Warnings:

  - Made the column `is_active` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_blocked` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `phone` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `verify_email` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "is_active" SET NOT NULL,
ALTER COLUMN "is_blocked" SET NOT NULL,
DROP COLUMN "phone",
ADD COLUMN     "phone" INTEGER NOT NULL,
ALTER COLUMN "verification_code" SET DEFAULT 1213,
ALTER COLUMN "verify_email" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");
