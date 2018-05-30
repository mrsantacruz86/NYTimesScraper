DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers(
  id INT KEY AUTO_INCREMENT,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN DEFAULT FALSE
);

INSERT INTO burgers (burger_name, devoured) 
  VALUES 
  ('Duble cheeseburger', FALSE ),
  ('Chicken', FALSE ),
  ('Big Mac', TRUE );
  