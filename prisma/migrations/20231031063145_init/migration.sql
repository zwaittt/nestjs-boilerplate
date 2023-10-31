-- CreateTable
CREATE TABLE `Cats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `age` DOUBLE NULL,
    `breed` VARCHAR(255) NULL,
    `birth_time` DATETIME(6) NULL DEFAULT CURRENT_TIMESTAMP(6),

    UNIQUE INDEX `Cats_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
