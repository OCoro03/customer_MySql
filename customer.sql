DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL, 
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(10,2) NULL,
    stock INT(12) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Bose Quiet Comfort 35", "Technology", 349.99, 150),
("Bad Blood", "Books", 14.99, 50),
("Red Dead Redemption", "Video Games", 59.99, 100),
("48 Laws of Power", "Books", 16.99, 75),
("iPad", "Technology", 400.00, 100),
("Mucinex", "Health", 15.99, 30),
("Macbook Pro", "Technology", 349.99, 150)
