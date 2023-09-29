/*
  Warnings:

  - You are about to drop the column `accent_color` on the `Cat` table. All the data in the column will be lost.
  - You are about to drop the column `anonymous_id` on the `Cat` table. All the data in the column will be lost.
  - You are about to drop the column `avatar` on the `Cat` table. All the data in the column will be lost.
  - You are about to drop the column `banner` on the `Cat` table. All the data in the column will be lost.
  - You are about to drop the column `binding` on the `Cat` table. All the data in the column will be lost.
  - You are about to drop the column `bot` on the `Cat` table. All the data in the column will be lost.
  - You are about to drop the column `create_time` on the `Cat` table. All the data in the column will be lost.
  - You are about to drop the column `discord_id` on the `Cat` table. All the data in the column will be lost.
  - You are about to drop the column `discriminator` on the `Cat` table. All the data in the column will be lost.
  - You are about to drop the column `flags` on the `Cat` table. All the data in the column will be lost.
  - You are about to drop the column `system` on the `Cat` table. All the data in the column will be lost.
  - You are about to drop the column `uid` on the `Cat` table. All the data in the column will be lost.
  - You are about to drop the column `update_time` on the `Cat` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Cat` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Cat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `age` to the `Cat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `breed` to the `Cat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Cat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Cat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Cat` DROP COLUMN `accent_color`,
    DROP COLUMN `anonymous_id`,
    DROP COLUMN `avatar`,
    DROP COLUMN `banner`,
    DROP COLUMN `binding`,
    DROP COLUMN `bot`,
    DROP COLUMN `create_time`,
    DROP COLUMN `discord_id`,
    DROP COLUMN `discriminator`,
    DROP COLUMN `flags`,
    DROP COLUMN `system`,
    DROP COLUMN `uid`,
    DROP COLUMN `update_time`,
    DROP COLUMN `username`,
    ADD COLUMN `age` INTEGER NOT NULL,
    ADD COLUMN `breed` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Cat_email_key` ON `Cat`(`email`);
