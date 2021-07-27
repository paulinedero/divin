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
        22,
        'dis parturient montes nascetur ridiculus',
        'nisi at nibh in hac habitasse platea dictumst aliquam augue',
        'mauris morbi non lectus',
        1,
        4,
        1,
        3,
        true,
        'tempus sit amet sem fusce consequat nulla nisl',
        'parturient montes nascetur',
        10,
        1,
        2,
        'eget tincidunt eget',
        'dolor sit amet consectetuer adipiscing elit proin interdum mauris non',
        2,
        2,
        'odio justo',
        'Suspendisse potenti.',
        5);

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
        22,
        'carrottes',
        'nisi at nibh in hac habitasse platea dictumst aliquam augue',
        'mauris morbi non lectus',
        2,
        1,
        4,
        3,
        true,
        'tempus sit amet sem fusce consequat nulla nisl',
        'parturient montes nascetur',
        10,
        1,
        2,
        'eget tincidunt eget',
        'dolor sit amet consectetuer adipiscing elit proin interdum mauris non',
        2,
        1,
        'odio justo',
        'Suspendisse potenti.',
        2);

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
        5);

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





