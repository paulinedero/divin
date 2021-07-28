CREATE TABLE `favorite`(
     `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     `isFavorite` Boolean, `farmer_id`INT NOT NULL);
    );

CREATE TABLE `favorite`(
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `parent_farmer_id` INT NOT NULL,
    `child_farmer_id` INT NOT NULL,
    `isFavorite` Boolean
    );

ALTER TABLE `favorite` ADD FOREIGN KEY (`child_farmer_id`) REFERENCES `farmer` (`id`);
ALTER TABLE `favorite` ADD FOREIGN KEY (`parent_farmer_id`) REFERENCES `farmer` (`id`);