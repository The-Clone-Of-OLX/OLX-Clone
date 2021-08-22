CREATE ROLE olx_user WITH
    LOGIN
    PASSWORD 'AhSYYiJpjPAqqFb1jtShHPIbbjI9tsbgOoVDixdYXdNQZCC1zMa++A=='
    NOSUPERUSER
    INHERIT
    NOCREATEDB
    NOCREATEROLE
    NOREPLICATION;

CREATE DATABASE olx_database WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    TABLESPACE = pg_default
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    CONNECTION LIMIT = -1;

CREATE TABLE photos (
    photo_id UUID NOT NULL,
    img_name VARCHAR(20) NOT NULL,
    img BYTEA NOT NULL,
    PRIMARY KEY(photo_id)
);

CREATE TABLE app_user (
    app_user_id UUID NOT NULL,
    first_name  VARCHAR(15) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(100) NOT NULL,
    country VARCHAR(20) NOT NULL,
    town VARCHAR(20) NOT NULL,
    phone_number TEXT,
    email VARCHAR(30) NOT NULL,
    liked_products UUID[],
    avatar UUID,
    PRIMARY KEY(app_user_id),
    CONSTRAINT fk_user_photo
      FOREIGN KEY(avatar)
        REFERENCES photos(photo_id)
);

CREATE TYPE currency AS ENUM (
    'PLN',
    'EUR',
    'USD'
);

CREATE TYPE category AS ENUM (
    'Cars',
    'Electronics',
    'Sport',
    'Other'
);

CREATE TYPE status AS ENUM (
    'available',
    'hidden',
    'sold'
);

CREATE TABLE product_details (
    product_id UUID NOT NULL,
    title VARCHAR (30) NOT NULL,
    price MONEY NOT NULL,
    currency currency NOT NULL,
    category category NOT NULL,
    description TEXT,
    status status NOT NULL,
    app_user_id UUID NOT NULL,
    photos UUID[],
    posting_date DATE NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY(product_id),
    CONSTRAINT fk_product_user
        FOREIGN KEY(app_user_id)
            REFERENCES app_user(app_user_id)

);

CREATE TABLE app_user_liked_products (
    app_user_app_user_id UUID NOT NULL,
    liked_products UUID NOT NULL
);

CREATE TABLE product_details_photos (
    product_details_product_id UUID NOT NULL,
    photos UUID NOT NULL
);




-- INSERT INTO app_user_register (f_name, l_name, username, password)
-- VALUES (
--         'admin',
--         'admin',
--         'admin',
--         '$2a$10$6l5lmpxymHc9MNAumCPljeOZaLuSDrchoX5IZHlai2duUzi0jZjNa'
--        );

