CREATE DATABASE chat;

USE chat;

CREATE TABLE usernames (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roomnames (
  id INT NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  usernameId INT,
  text VARCHAR(255) NOT NULL,
  roomnameId INT,
  PRIMARY KEY (id),
  CONSTRAINT fk_usernameId FOREIGN KEY (usernameId) REFERENCES usernames(id),
  CONSTRAINT fk_roomnameId FOREIGN KEY (roomnameId) REFERENCES roomnames(id)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

