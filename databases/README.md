# Databases
Antes de ejecutar el archivo de back-express, asegúrate de tener una base de datos de prueba en tu servidor local.
Ejecuta el siguiente Query desde Workbench o tu software SQL de preferencia y ¡listo! tienes la base de datos instaladas en tu ordenador.

Puedes eliminar la base de datos escribiendo `DROP DATABASE Plantae;` desde tu Workbench.

**Nota:** Recuerda tener activado el módulo de SQL antes de ejecutar el script

---

## Estructura
Conoce la estructura de las distintas tablas de proyecto
#### Planta
| id                   | nombre            | nombre_cientifico | descripcion | tipo              | img_ruta          | stock        | precio       |
| -------------------- | ----------------- | ----------------- | ----------- | ----------------- | ----------------- | ------------ | ------------ |
| **INT** - PrimaryKey | **VARCHAR** (100) | **VARCHAR** (150) | **TEXT**    | **VARCHAR** (100) | **VARCHAR** (100) | **INT** (11) | **INT** (11) |

---

## Change Log
### 20 de Julio
#### _Versión 0.0.0a6_:
+ Se añadió el id del registro en la ruta de las imágenes en la fila **img_ruta**.

---

### 16 de Julio 2022
#### _Versión 0.0.0a4_:
+ Correción de la propiedad **auto incremental** de la columna id.

---

### 15 de Julio 2022
#### _Versión 0.0.0a3_:
+ Eliminación de las columnas **createdAt** y **updateAt**.
+ Creación de la columna **precio**

---

### 11 de Julio 2022
#### _Versión 0.0.0a1_:
+ Creación de la base de datos Plantae.
+ Creación de la tabla Plantas.