-- DROP DATABASE IF EXISTS usersys;
-- CREATE DATABASE usersys;
-- USE usersys;

-- DROP USER IF EXISTS 'usersys'@'localhost';
-- CREATE USER 'usersys'@'localhost' IDENTIFIED WITH mysql_native_password BY 'MyPassword1!';
-- GRANT ALL PRIVILEGES ON usersys.* TO 'usersys'@'localhost';

-- DROP TABLE IF EXISTS items;
CREATE TABLE items (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  item VARCHAR(64)
);

insert into items (item) values ("orange");
insert into items (item) values ("table");
insert into items (item) values ("car");
insert into items (item) values ("water");

