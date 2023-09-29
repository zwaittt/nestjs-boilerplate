/*
  Warnings:

  - You are about to alter the column `age` on the `Cat` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Cat` MODIFY `age` DOUBLE NOT NULL,
    MODIFY `breed` VARCHAR(255) NULL;
