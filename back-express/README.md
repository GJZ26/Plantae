# Back Express
Esta carpeta tiene el fin de establecer las conexiones a la base de datos y proporcionar las API's necesarias para el adecuado funcionamiento de la aplicación web.

## Funcionamiento
Por el momento no hay nada.
## Dependencias 
| Nombre  | Versión |
| :------ | :-----: |
| Express | 4.18.1  |
| Cors    |  2.8.5  |
| MySQL   | 2.18.1  |
| Nodemon | 2.0.19  |
| Path    | 0.12.7  |

Puedes instalar todas estas dependencias ejecutando el siguiente comando: `npm install express cors mysql path`

Para ejecutar este proyecto, ejecuta el siguiente comando desde tu terminal: `npx nodemon app`

**_Nota:_** Debes haber inicializado un proyecto en node para ejecutar todo, puedes instalarlo con `npm init -y`

---

## Change Log
### 20 de Julio 2022
#### _Versión 0.0.0a6_:
+ Se renombraron los archivos del directorio **/static/images/**, para que coincida con la modificación en la base de datos.
+ Se crearon los controladores para **eliminar**, **actualizar** y **crear** registros en la tabla **planta**.
+ Correción de los mensajes de error en el documento **conexion.js**.
+ Creación de las rutas para **eliminar**, **actualizar** y **crear** registros.
+ Prueba a las API. Funcional.

---

### 18 de Julio 2022
#### _Versión 0.0.0a5_:
+ Se añadió la dependencia **path**.
+ Se creo un directorio **/static/images/** que contendrá las imágenes que se alojarán en el servidor.
+ Se puede acceder a las imagenes del servidor desde **http://localhost:9000/_nombre-de-la-imagen.jpg_**

---

### 15 de Julio 2022
#### _Versión 0.0.0a3_:
+ Depuración de los controladores de **Planta**.

---

### 11 de Julio 2022

#### _Versión 0.0.0a2_:
+ Adición de la carpeta **/maquetación** en el directorio **/front-react**
+ Eliminación de las dependencias de Sequelize y MySQL2.
+ Adición de la dependencia de MySQL.
+ Re-adaptación de los controladores para la sintaxis de MySQL.

---

### 10 de Julio 2022
#### _Versión 0.0.0a1_:
+ Creación de los controladores.
+ Creación de la conexión a la base de datos.
+ Creación de los modelos necesarios para manejar los datos para el catálogo de plantas.
+ Creación de los controladores de para consultar las plantas en la base de datos.