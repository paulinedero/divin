ALTER TABLE `farmer` ADD `VAT_number` INT;

ALTER TABLE `farmer` MODIFY COLUMN `VAT_number` INT AFTER `siret_number`;

ALTER TABLE `farmer` RENAME COLUMN birthdate TO `birthday`;

ALTER TABLE `stock_movement` RENAME TO `stock`;

ALTER TABLE `stock` RENAME COLUMN date TO `availability_date`;

ALTER TABLE `stock` DROP COLUMN `movement_type`;

DROP TABLE `stock_movement_type`;

ALTER TABLE `order` ADD `stock_id` INT;

ALTER TABLE `order` MODIFY COLUMN `stock_id` INT AFTER `id`;


/* ADD BY MÁRIO DAY 9/7/2021 AFTER CORRECTION => TO ALLOW BUILT ROUTES FROM SERVER */
/* TABLE ORDER BUILD 1 TO 1 WITH STOCK */
ALTER TABLE stock DROP FOREIGN KEY stock_ibfk_2;

ALTER TABLE stock DROP FOREIGN KEY stock_ibfk_3;

ALTER TABLE stock DROP COLUMN order_id;
