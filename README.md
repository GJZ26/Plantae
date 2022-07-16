<h1>Plantae</h1>
Un página para la venta de platas en línea escrito en React + Express + MySQL.

---
## Instalación
Esta página consta de dos proyectos que servirá de backend y frontend. Mira en la sección de **requisitos** para conocer las dependencias necesarias para ser ejecutadas.
### Requisitos
#### Generales
+ **Node** - _Versión 16.16.0_
+ **NPM** - _Versión 8.11.0_
#### back-express/
+ **Express** - _Versión 4.18.1 o superior_
+ **Cors** - _Versión 2.8.5 o superior_
+ **Mysql** - _Versión 2.18.1 o superior_
+ **Nodemon** - _Versión 2.0.19 o superior_
#### front-react/
+ **React** - _Versión 18.2.0 o superior_
+ **Axios** - _Versión 0.27.2_
+ **React Router Dom** - _Versión 6.3.0 o superior_

Al tener las dependencias correctamente instaladas, podrás ejecutar el proyecto dentro del directorio **back-express/** con ```npx nodemon app``` para encender el servidor backend.

***Nota:** Es importante que tengas activado el módulo de mysql para poder acceder a la base de datos.* 

Para ejecutar el servidor para frontend, deberá ejecutar el siguiente comando en el directorio **front-react/**: ```npm start```.

---

## Change Log

### 16 de Julio
#### _Versión 0.0.0a4_(Actual):
##### Frontend
+ Creación del directorio **/component** dónde estarán guardados los componentes de react para la visualización del usuario.
+ Adición de los CDN de **bootstrap** en el archivo **index.html** para hacer diseños de pruebas.
+ Depuración de comentarios innecesarios del archivo **App.js**.
##### Database
+ Correción de la propiedad **auto incremental** de la columna id.

---

### 15 de Julio 2022
#### _Versión 0.0.0a3_:
##### General
+ Correción de los README.
##### Backend
+ Depuración de los controladores de **Planta**.
##### Database
+ Eliminación de las columnas **createdAt** y **updateAt**.
+ Creación de la columna **precio**

---

### 14 de Julio 2022
#### _Versión 0.0.0a2_:
##### Frontend
+ Adición de la carpeta **/maquetación** en el directorio **/front-react**.
##### Backend
+ Eliminación de las dependencias de Sequelize y MySQL2.
+ Adición de la dependencia de MySQL.
+ Re-adaptación de los controladores para la sintaxis de MySQL.

---

### 11 de Julio 2022
#### _Versión 0.0.0a1_:
##### General
+ Creación de la carpeta **databases/** que contendrá  los script necesarios para crear la base de datos.
+ Cambio en la estrutura de la sección **Change Log**.
##### Backend
+ Creación de los controladores.
+ Creación de la conexión a la base de datos.
+ Creación de los modelos necesarios para manejar los datos para el catálogo de plantas.
+ Creación de los controladores de para consultar las plantas en la base de datos.
##### Databases
+ Creación de la base de datos Plantae.
+ Creación de la tabla Plantas.

---

## 10 de Julio 2022
#### _Versión 0.0.0_:
##### General
Subida inicial de los archivos al repositorio.
