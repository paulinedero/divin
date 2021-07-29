insert into country (name) values ('Belgium');

insert into address (street, street_number, zip_code, city, country) values ('Sentier de la senne', 16, 1430, 'Quenast', 1);

insert into farmer (
    email,
    password,
    company_name,
    lastname,
    firstname,
    birthdate,
    address,
    phone_number,
    siret_number,
    description) 
    values (
        'cbruck0@yahoo.com',
        'zaD7XYDNoTj7',
        'Sed accumsan felis', 
        'Bruck',
        'Cliff',
        '2021/04/03',
        1,
        '111 / 111 / 111',
        23,
        'Cras pellentesque volutpat dui.'
    );

insert into farmer (
    email,
    password,
    company_name,
    lastname,
    firstname,
    birthdate,
    address,
    phone_number,
    siret_number,
    description) 
    values (
        'paulinedero@yahoo.com',
        'zaD7XYfddfgTj7',
        'WCS', 
        'De Ro',
        'Pauline',
        '2021/04/11',
        20,
        '00 / 000 000',
        23,
        'Cras pellentesque volutpat dui.'
    );

insert into product_farming_type (name) values ('pleine terre');

insert into product_farming_type (name) values ('sous serre');

insert into product_category (name) values ('fruits');

insert into product_category(name) values ('legumes');

insert into product_category (name) values ('viandes');

insert into product_category(name) values ('poissons');

insert into product_season(name) values ('printemps');

insert into product_season(name) values ('été');

insert into product_season(name) values ('automne');

insert into product_season(name) values ('hiver');

insert into VAT_regime(value) values(21);

insert into VAT_regime(value) values(5);

insert into VAT_regime(value) values(6);

INSERT INTO product (
    EAN_code,
    name,
    description,
    origin,
    farming_type,
    category,
    under_category,
    season_id,
    transformation,
    nutritional_statement,
    production_unit,
    production_price,
    stock_min,
    stock_max,
    max_storage_date,
    purchase_unit,
    purchase_price,
    VAT,
    tag,
    photo,
    farmer_id)
    values (
        45,
        'carrots',
        'LAS',
        'France',
        1,
        2,
        3,
        1,
        true,
        '43kcal',
        'kg',
        20,
        1,
        4,
        'bla bla bla?',
        'bio',
        1,
        3,
        'gros',
        'carrotes ',
        7);

INSERT INTO product (
    EAN_code,
    name,
    description,
    origin,
    farming_type,
    category,
    under_category,
    season_id,
    transformation,
    nutritional_statement,
    production_unit,
    production_price,
    stock_min,
    stock_max,
    max_storage_date,
    purchase_unit,
    purchase_price,
    VAT,
    tag,
    photo,
    farmer_id)
    values (
        45,
        'bananes',
        'v',
        'France',
        2,
        3,
        2,
        2,
        true,
        '100kcal',
        'grammes',
        20,
        1,
        4,
        'bla bla bla?',
        'bio',
        1,
        3,
        'les petites',
        'banane petite, sucrees',
        7);

INSERT INTO product (
    EAN_code,
    name,
    description,
    origin,
    farming_type,
    category,
    under_category,
    season_id,
    transformation,
    nutritional_statement,
    production_unit,
    production_price,
    stock_min,
    stock_max,
    max_storage_date,
    purchase_unit,
    purchase_price,
    VAT,
    tag,
    photo,
    farmer_id)
    values (
        45,
        'oranges',
        'orange',
        'France',
        1,
        2,
        4,
        3,
        false,
        '199kcal',
        'grammes',
        20,
        1,
        4,
        'bla bla bla?',
        'bio',
        0.9,
        3,
        'les oranges bio',
        'orange sucrees',
        7);

insert into product (
    EAN_code,
    name,
    description,
    origin,
    farming_type,
    category,
    under_category,
    season_id,
    transformation,
    nutritional_statement,
    production_unit,
    production_price,
    stock_min,
    stock_max,
    max_storage_date,
    purchase_unit,
    purchase_price,
    VAT,
    tag,
    photo,
    farmer_id) 
    values (
        25,
        'fraises',
        'rouges',
        'France',
        1,
        2,
        4,
        3,
        false,
        '34kcal',
        'grammes',
        20,
        1,
        4.86,
        'quoi ecrire?',
        'as',
        0.9,
        3,
        'les fraises',
        'fraise fraiches',
        7);

INSERT INTO stock (availability_date, product_id, quantity) VALUES ('2021-08-15', 20, 10);

INSERT INTO stock (availability_date, product_id, quantity) VALUES ('2021-08-15', 21, 20);

INSERT INTO stock (availability_date, product_id, quantity) VALUES ('2021-08-15', 22, 15);

INSERT INTO stock (availability_date, product_id, quantity) VALUES ('2021-08-15', 23, 13);



insert into relay_point_category (name) values ('BLED');

insert into relay_point_category (name) values ('Restaurant');

insert into relay_point (name, contact_person, address, latitude, longitude, phone_number, siret_number, point_category) values ('WCS', 'Pauline De Ro', 1, 40, 50, '02/000.000', 256, 2);

insert into `order` (relay_id, status_id, purchase_date, pickup_date, total) values (1, null, '2021/06/22', '2021/06/22', 15);

insert into `order` (relay_id, status_id, purchase_date, pickup_date, total, creation_date) values (1, null, '2021/05/22', '2021/05/22', 15, '2021/05/22');

insert into `order` (relay_id, status_id, purchase_date, pickup_date, total, creation_date) values (1, null, '2021/04/22', '2021/04/22', 15, '2021/04/22');

insert into ordered_item (product_id, order_id, quantity) values (3, 1, 2);

insert into ordered_item (product_id, order_id, quantity) values (2, 1, 2);

insert into `order` (relay_id, status_id, purchase_date, pickup_date, total, creation_date) values (1, null, '2021/06/22', '2021/06/22', 15, '2021/04/26');

insert into ordered_item (product_id, order_id, quantity) values (4, 6, 3);

insert into ordered_item (product_id, order_id, quantity) values (5, 6, 5);

insert into ordered_item (product_id, order_id, quantity) values (4, 1, 8);

insert into ordered_item (product_id, order_id, quantity) values (12, 11, 8);
insert into ordered_item (product_id, order_id, quantity) values (13, 12, 9);
insert into ordered_item (product_id, order_id, quantity) values (14, 13, 10);
insert into ordered_item (product_id, order_id, quantity) values (15, 14, 11);

insert into `order` (relay_id, status_id, purchase_date, pickup_date, total, creation_date) values (1, null, '2021/07/28', '2021/07/28', 15, '2021/07/20');
insert into `order` (relay_id, status_id, purchase_date, pickup_date, total, creation_date) values (1, null, '2021/07/28', '2021/07/28', 15, '2021/07/20');
insert into `order` (relay_id, status_id, purchase_date, pickup_date, total, creation_date) values (1, null, '2021/07/28', '2021/07/28', 15, '2021/07/20');
insert into `order` (relay_id, status_id, purchase_date, pickup_date, total, creation_date) values (1, null, '2021/07/28', '2021/07/2', 15, '2021/07/20');


insert into `order` (relay_id, status_id, purchase_date, pickup_date, total, creation_date) values (1, null, '2021/07/28', '2021/07/28', 15, '2021/07/28');
insert into `order` (relay_id, status_id, purchase_date, pickup_date, total, creation_date) values (1, null, '2021/07/28', '2021/07/28', 15, '2021/07/28');
insert into `order` (relay_id, status_id, purchase_date, pickup_date, total, creation_date) values (1, null, '2021/07/28', '2021/07/28', 15, '2021/07/28');
insert into `order` (relay_id, status_id, purchase_date, pickup_date, total, creation_date) values (1, null, '2021/07/28', '2021/07/28', 15, '2021/07/28');











