CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOL NOT NULL DEFAULT 0,
    date TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);
