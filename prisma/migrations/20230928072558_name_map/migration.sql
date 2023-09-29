/*
  Warnings:

  - You are about to drop the `Cat` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Cat`;

-- CreateTable
CREATE TABLE `cats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `age` DOUBLE NOT NULL,
    `breed` VARCHAR(255) NULL,
    `birth_id` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    UNIQUE INDEX `cats_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
