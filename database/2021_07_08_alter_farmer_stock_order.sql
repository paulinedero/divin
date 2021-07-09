ALTER TABLE `farmer` ADD `VAT_number` INT;

ALTER TABLE `farmer` MODIFY COLUMN `VAT_number` INT AFTER `siret_number`;

ALTER TABLE `farmer` RENAME COLUMN birthdate TO `birthday`;

ALTER TABLE `stock_movement` RENAME TO `stock`;

ALTER TABLE `stock` RENAME COLUMN date TO `availability_date`;

ALTER TABLE `stock` DROP COLUMN `movement_type`;

DROP TABLE `stock_movement_type`;

ALTER TABLE `order` ADD `stock_id` INT;

ALTER TABLE `order` MODIFY COLUMN `stock_id` INT AFTER `id`;


