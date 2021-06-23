CREATE DATABASE divin;

USE DATABASE divin;

CREATE TABLE `user` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `lastname` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `address` INT NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `farmer` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `company_name` varchar(255),
  `lastname` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `birthdate` DATE,
  `address` INT NOT NULL,
  `phone_number` varchar(255),
  `siret_number` INT,
  `description` TEXT,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `address` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `street` varchar(350) NOT NULL,
  `street_number` INT NOT NULL,
  `zip_code` INT NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` INT NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `country` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `relay_point` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `contact_person` varchar(255),
  `address` INT NOT NULL,
  `latitude` INT NOT NULL,
  `longitude` INT NOT NULL,
  `phone_number` varchar(255),
  `siret_number` INT,
  `point_category` INT NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `relay_point_category` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `product_place` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `relay_point_id` INT NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `product` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `EAN_code` INT,
  `name` varchar(255) NOT NULL,
  `description` TEXT NOT NULL,
  `origin` varchar(255),
  `farming_type` INT,
  `category` INT NOT NULL,
  `under_category` INT,
  `season_id` INT,
  `transformation` BOOLEAN,
  `nutritional_statement` varchar(255) NOT NULL,
  `production_unit` varchar(255),
  `production_price` INT,
  `stock_min` INT,
  `stock_max` INT,
  `max_storage_date` varchar(255),
  `purchase_unit` varchar(255) NOT NULL,
  `purchase_price` INT NOT NULL,
  `VAT` INT NOT NULL,
  `tag` varchar(255),
  `photo` TEXT,
  `farmer_id` INT NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `ordered_item` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `order_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `product_category` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `under_category` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `category_id` INT NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `product_under_category` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `under_category_id` INT NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `product_season` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `purchase_unit` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `VAT_regime` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `value` INT NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `production_unit` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `product_allergen` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `allergen_id` INT NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `allergen` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `nutrition_values` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `kcal` INT,
  `protein` INT,
  `fat` INT,
  `carbs` INT,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `stock_movement` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `product_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `movement_type` varchar(255) NOT NULL,
  `order_id` INT NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `stock_movement_type` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `order` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `relay_id` INT NOT NULL,
  `status_id` INT,
  `purchase_date` DATE,
  `pickup_date` DATE,
  `total` INT NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `status` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `status` varchar(255) NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `product_farming_type` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `liked_product` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `creation_date` DATE DEFAULT (now())
);

ALTER TABLE `user` ADD FOREIGN KEY (`address`) REFERENCES `address` (`id`);

ALTER TABLE `farmer` ADD FOREIGN KEY (`address`) REFERENCES `address` (`id`);

ALTER TABLE `address` ADD FOREIGN KEY (`country`) REFERENCES `country` (`id`);

ALTER TABLE `relay_point` ADD FOREIGN KEY (`point_category`) REFERENCES `relay_point_category` (`id`);

ALTER TABLE `relay_point` ADD FOREIGN KEY (`address`) REFERENCES `address` (`id`);

ALTER TABLE `product_place` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `product_place` ADD FOREIGN KEY (`relay_point_id`) REFERENCES `relay_point` (`id`);

ALTER TABLE `product` ADD FOREIGN KEY (`farmer_id`) REFERENCES `farmer` (`id`);

ALTER TABLE `product` ADD FOREIGN KEY (`farming_type`) REFERENCES `product_farming_type` (`id`);

ALTER TABLE `product` ADD FOREIGN KEY (`category`) REFERENCES `product_category` (`id`);

ALTER TABLE `product` ADD FOREIGN KEY (`season_id`) REFERENCES `product_season` (`id`);

ALTER TABLE `product` ADD FOREIGN KEY (`production_unit`) REFERENCES `production_unit` (`id`);

ALTER TABLE `product` ADD FOREIGN KEY (`purchase_unit`) REFERENCES `purchase_unit` (`id`);

ALTER TABLE `product` ADD FOREIGN KEY (`VAT`) REFERENCES `VAT_regime` (`id`);

ALTER TABLE `ordered_item` ADD FOREIGN KEY (`order_id`) REFERENCES `order` (`id`);

ALTER TABLE `ordered_item` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `under_category` ADD FOREIGN KEY (`category_id`) REFERENCES `product_category` (`id`);

ALTER TABLE `product_under_category` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `product_under_category` ADD FOREIGN KEY (`under_category_id`) REFERENCES `under_category` (`id`);

ALTER TABLE `product_allergen` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `product_allergen` ADD FOREIGN KEY (`allergen_id`) REFERENCES `allergen` (`id`);

ALTER TABLE `nutrition_values` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `stock_movement` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `stock_movement` ADD FOREIGN KEY (`movement_type`) REFERENCES `stock_movement_type` (`id`);

ALTER TABLE `stock_movement` ADD FOREIGN KEY (`order_id`) REFERENCES `order` (`id`);

ALTER TABLE `order` ADD FOREIGN KEY (`relay_id`) REFERENCES `relay_point` (`id`);

ALTER TABLE `order` ADD FOREIGN KEY (`status_id`) REFERENCES `status` (`id`);

ALTER TABLE `liked_product` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `liked_product` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `stock_movement` ADD FOREIGN KEY (`product_id`) REFERENCES `stock_movement` (`id`);