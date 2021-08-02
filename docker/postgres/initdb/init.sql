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

CREATE TABLE app_user_register (
    user_register_id BIGSERIAL NOT NULL,
    f_name  VARCHAR(15) NOT NULL,
    l_name VARCHAR(20) NOT NULL,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    PRIMARY KEY(user_register_id)
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
    product_id BIGSERIAL NOT NULL,
    title VARCHAR (30) NOT NULL,
    price MONEY NOT NULL,
    currency currency NOT NULL,
    category category NOT NULL,
    description TEXT,
    status status NOT NULL,
    PRIMARY KEY(product_id),
    CONSTRAINT fk_product_user
        FOREIGN KEY(user_register_id)
            REFERENCES app_user_register(user_register_id)

);

CREATE TABLE app_user_detail (
    user_detail_id BIGSERIAL NOT NULL,
    country VARCHAR(20) NOT NULL,
    town VARCHAR(20) NOT NULL,
    phone_number INTEGER,
    email VARCHAR(30) NOT NULL,
    photo BYTEA,
    liked_product_ids BIGSERIAL[],
    PRIMARY KEY(user_detail_id),
    CONSTRAINT fk_user_register_detail
         FOREIGN KEY(user_register_id )
             REFERENCES app_user_register(user_register_id) NOT NULL
--     CONSTRAINT fk_liked_product_user
--                              FOREIGN KEY(liked_product_ids)
--                              REFERENCES product_details(product_id)

);

CREATE TABLE product_photos (
    photo_id BIGSERIAL NOT NULL,
    img_name VARCHAR(20) NOT NULL,
    img BYTEA NOT NULL,
    CONSTRAINT fk_product_photo_detail
                            FOREIGN KEY(product_id)
                            REFERENCES product_details(product_id) NOT NULL
);

