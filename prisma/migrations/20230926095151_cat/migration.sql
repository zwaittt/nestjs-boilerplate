-- CreateTable
CREATE TABLE `Cat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `discord_id` VARCHAR(255) NOT NULL,
    `uid` VARCHAR(255) NULL,
    `anonymous_id` VARCHAR(255) NULL,
    `bot` VARCHAR(255) NULL,
    `system` VARCHAR(255) NULL,
    `flags` VARCHAR(255) NULL,
    `username` VARCHAR(255) NULL,
    `discriminator` VARCHAR(255) NULL,
    `avatar` VARCHAR(255) NULL,
    `banner` VARCHAR(255) NULL,
    `accent_color` VARCHAR(255) NULL,
    `binding` VARCHAR(255) NULL,
    `create_time` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_time` DATETIME(6) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
