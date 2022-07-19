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
+ **Path** - _Versión 0.12.7_
#### front-react/
+ **React** - _Versión 18.2.0 o superior_
+ **Axios** - _Versión 0.27.2_
+ **React Router Dom** - _Versión 6.3.0 o superior_

Al tener las dependencias correctamente instaladas, podrás ejecutar el proyecto dentro del directorio **back-express/** con ```npx nodemon app``` para encender el servidor backend.

***Nota:** Es importante que tengas activado el módulo de mysql para poder acceder a la base de datos.* 

Para ejecutar el servidor para frontend, deberá ejecutar el siguiente comando en el directorio **front-react/**: ```npm start```.

---

## Change Log
### 18 de Julio
#### _Versión 0.0.0a5_
##### Frontend
+ Ahora las cartas muestran las fotos de las plantas.
+ Se ha actualizado los estilos de las cartas de plantas del catálogo.
+ Se han eliminado los CDN de **bootstrap** del archivo **index.html**.
+ Se han eliminado comentarios inncesarios del archivo **index.html**.
+ Se ha creado el directorio **/static/** dentro del directorio **/src/** donde se almacenará los archivos de hojas de estilo.
+ Se ha creado la hoja de estilo **card.css** para el estilizado de las cartas del catálogo.
##### Backend
+ Se añadió la dependencia **path**.
+ Se creo un directorio **/static/images/** que contendrá las imágenes que se alojarán en el servidor.
+ Se puede acceder a las imagenes del servidor desde **http://localhost:9000/_nombre-de-la-imagen.jpg_**

---

### 16 de Julio
#### _Versión 0.0.0a4_:
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
