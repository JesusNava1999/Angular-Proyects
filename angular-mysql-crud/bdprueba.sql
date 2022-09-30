CREATE DATABASE pruebaangular;

USE pruebaangular;

CREATE TABLE usuario(
  correo_institucional VARCHAR(60) NOT NULL,
  contrasena VARCHAR(30) NOT NULL,
  id_persona INT NOT NULL,
  PRIMARY KEY (correo_institucional),
  FOREIGN KEY (id_persona) REFERENCES persona(id_persona)
);

CREATE TABLE persona(
  id_persona INT NOT NULL,
  nombre VARCHAR(30),
  PRIMARY KEY(id_persona)
);
