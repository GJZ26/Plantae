# Databases
Antes de ejecutar el archivo de back-express, asegúrate de tener una base de datos de prueba en tu servidor local.
Ejecuta el siguiente Query desde Workbench o tu software SQL de preferencia y ¡listo! tienes la base de datos instaladas en tu ordenador.

Puedes eliminar la base de datos escribiendo `DROP DATABASE Plantae;` desde tu Workbench.

**Nota:** Recuerda tener activado el módulo de SQL antes de ejecutar el script

---

## Estructura
Conoce la estructura de las distintas tablas de proyecto
#### Planta
| id                   | nombre            | nombre_cientifico | descripcion | tipo              | img_ruta          | stock        |
| -------------------- | ----------------- | ----------------- | ----------- | ----------------- | ----------------- | ------------ |
| **INT** - PrimaryKey | **VARCHAR** (100) | **VARCHAR** (150) | **TEXT**    | **VARCHAR** (100) | **VARCHAR** (100) | **INT** (11) |

---
## Change Log
### 11 de Julio 2022

#### _Versión 0.0.0a1_ - (Actual):
+ Creación de la base de datos Plantae.
+ Creación de la tabla Plantas.