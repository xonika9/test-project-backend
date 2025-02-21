-- Add new column with default value
ALTER TABLE "User" ADD COLUMN "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- Update existing rows to use current timestamp
UPDATE "User" SET "updatedAt" = CURRENT_TIMESTAMP;

-- Make column NOT NULL
ALTER TABLE "User" ALTER COLUMN "updatedAt" SET NOT NULL;

