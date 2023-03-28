-- AlterTable
ALTER TABLE "users" ALTER COLUMN "is_active" DROP NOT NULL,
ALTER COLUMN "is_blocked" DROP NOT NULL,
ALTER COLUMN "verify_email" DROP NOT NULL;
