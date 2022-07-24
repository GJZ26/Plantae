-- Ejecuta este script para generar las tablas y bases de datos necesarias para arrancar le proyector
/**
 
 Nota: Recuerda activar el módulo de SQL antes de ejecutar el script.
 
 Versión del Servidor: 10.4.24-MariaDB
 
 **/
-- Creamos la  base de datos 
CREATE DATABASE IF NOT EXISTS Plantae;

-- Uso de la base de datos
USE Plantae;

-- Creamos la tabla Plantas
CREATE TABLE plantas (
    id INT(11) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    nombre_cientifico VARCHAR(150) NOT NULL,
    descripcion text NOT NULL,
    tipo VARCHAR(100) NOT NULL,
    img_ruta VARCHAR(100) NOT NULL,
    stock INT(11) NOT NULL,
    precio INT (11) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

-- Insercción de datos a la tabla plantas
INSERT INTO
    plantas(
        id,
        nombre,
        nombre_cientifico,
        descripcion,
        tipo,
        img_ruta,
        stock,
        precio
    )
VALUES
    (
        1,
        'Azaleas',
        'Rhododendron',
        'Las azaleas florecen en primavera, y a menudo sus flores duran varias semanas. Toleran la sombra, y prefieren vivir cerca o debajo de los árboles.',
        'Sombra',
        'azalea-1.jpg',
        7,
        190
    ),
    (
        2,
        'Begonias',
        'Begonia',
        'Son oriundas de las regiones tropicales y subtropicales de América, África y Asia.',
        'Sombra',
        'begonias-2.jpg',
        2,
        180
    ),
    (
        3,
        'Helechos',
        'Tracheophyta',
        'Los helechos son plantas vasculares sin semilla, cuyas características morfológicas más sobresalientes son sus hojas grandes, usualmente pinadas y con prefoliación circinada.',
        'Sombra',
        'helechos-3.jpg',
        12,
        155
    ),
    (
        4,
        'Pistia',
        'Pistia Stratiotes',
        'Las plantas de Pistia stratiotes flotan en la superficie del agua con sus raíces que cuelgan sumergidas debajo de las hojas flotantes. Es una planta perenne monocotiledónea con las hojas gruesas, suaves que forman una roseta.',
        'Acuáticas',
        'pistia-4.jpg',
        1,
        140
    ),
    (
        5,
        'Helecho de Agua',
        'Azolla Filiculoides',
        'Son plantas acuáticas flotantes, de hojas pequeñas con raíces cortas. Frondes divididos cuyo color oscila entre rojo y púrpura a pleno sol y de verde pálido a verde azulado en la sombra. Crece muy rápido, ideal para cubrir la superficie. Ayuda a controlar el desarrollo de algas al limitar la luminosidad en el medio acuático. Son intolerantes al agua salada.',
        'Acuáticas',
        'helecho-agua-5.jpg',
        5,
        130
    ),
    (
        6,
        'Calas',
        'Zantedeschia Aethiopica',
        'La cala o lirio de agua es una planta herbácea que nos regala cada año una preciosa floración con el inicio de la primavera.',
        'Acuáticas',
        'calas-6.jpg',
        9,
        145
    ),
    (
        7,
        'Kalanchoe',
        'Kalanchoe',
        'Puede alcanzar los 6 m de altura, sin embargo, la mayoría no superan 1 m. Las formas de las hojas varían según la especie, generalmente carnosas con cubierta cérea, de color verde medio a oscuro.',
        'Florales',
        'kalanchoe-7.jpg',
        6,
        132
    ),
    (
        8,
        'Azucena',
        'Lilium Candidum',
        'La azucena, también conocida como lilium o lirio, es un género que comprende cerca de 110 variedades de plantas. Se pueden encontrar azucenas indígenas tanto en Europa como en Asia o América. Sus flores tienen forma de trompeta y desprenden un aroma intenso, sobre todo por la noche, aunque es cierto que no todas las variedades son perfumadas.',
        'Florales',
        'azucena-8.jpg',
        6,
        122
    ),
    (
        9,
        'Peral',
        'Pyrus Communis',
        'Los perales suelen adoptar forma arbórea. Son árboles de tamaño mediano, que alcanzan de media 10–17 m de alto, a menudo con una coronación alta y estrecha; unas pocas especies son arbustivas.',
        'Frutales',
        'peral-9.jpg',
        13,
        105
    ),
    (
        10,
        'Groselleros',
        'Ribes Rubrum',
        'La planta es un arbusto caducifolio que suele alcanzar entre 1 y 1,5 m de altura, llegando ocasionalmente a los 2 m, con hojas de 5 lóbulos distribuidas en espiral en las ramas.',
        'Frutales',
        'groselleros-10.jpg',
        3,
        110
    ),
    (
        11,
        'Melocotonero',
        'Prunus Persica',
        'El melocotonero es un árbol frutal de porte pequeño, aunque algunas variedades pueden alcanzar los seis metros de altura. Sus hojas son simples, verdes brillantes y las flores de color rosa a rojo.',
        'Frutales',
        'melocotonero-11.jpg',
        9,
        95
    ),
    (
        12,
        'Mandarino',
        'Citrus Reticulata',
        'Árbol de características similares al naranjo, aunque más pequeño (2-6 m) y con porte frecuentemente torcido. Las hojas son oblongas o elíptico-lanceoladas, de 3,5-8 x 1,5-4 cm, con márgenes serrados y ápice obtuso.',
        'Frutales',
        'mandarino-12.jpg',
        4,
        132
    );

-- Modificaciones del valor auto-incremental de la llave primaria de la tablas planta
ALTER TABLE
    plantas
MODIFY
    id INT(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 13;

-- CREACIÓN DE LA TABLA  USUARIOS PARA EL LOGIN --
-- Usamos la base de datos
USE Plantae;

-- Creamos la tabla usuarios
CREATE TABLE IF NOT EXISTS usuarios(
    id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    pwd VARCHAR (100) NOT NULL,
    priv VARCHAR (50) NOT NULL,
    PRIMARY KEY (id)
);