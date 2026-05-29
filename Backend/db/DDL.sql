CREATE DATABASE presupuesto;

CREATE TABLE usuarios (
id_usuario SERIAL UNIQUE NOT NULL,
nombre VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
password VARCHAR(150) NOT NULL,
id_presupuesto INTEGER,
PRIMARY KEY (id_usuario),
FOREIGN KEY (id_presupuesto) REFERENCES presupuesto(id_presupuesto)
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

SELECT * FROM ingresos;

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

SELECT * FROM egresos;

CREATE TABLE presupuesto (
  id_presupuesto        SERIAL        NOT NULL,
  nombre    VARCHAR(100)   NOT NULL,
  cantidad  INTEGER   NOT NULL,
  PRIMARY KEY (id_presupuesto)
);

SELECT * FROM presupuesto;