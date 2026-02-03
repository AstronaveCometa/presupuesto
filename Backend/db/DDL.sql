CREATE DATABASE presupuesto;

CREATE TABLE usuarios (
id_usuario SERIAL UNIQUE NOT NULL,
nombre VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
password VARCHAR(50) NOT NULL
);

DROP TABLE usuarios;

CREATE TABLE ingresos (
  id        SERIAL        NOT NULL,
  nombre    VARCHAR(50)   NOT NULL,
  cantidad  INTEGER   NOT NULL,
  fecha     DATE   NOT NULL,
  id_usuario INTEGER,
  PRIMARY KEY (id),
        FOREIGN KEY (id_usuario)
        REFERENCES usuarios(id_usuario)
);

CREATE TABLE egresos (
  id        SERIAL        NOT NULL,
  nombre    VARCHAR(50)   NOT NULL,
  cantidad  INTEGER   NOT NULL,
  fecha     DATE   NOT NULL,
  id_usuario INTEGER,
  PRIMARY KEY (id),
        FOREIGN KEY (id_usuario)
        REFERENCES usuarios(id_usuario)
);

SELECT * FROM usuarios;