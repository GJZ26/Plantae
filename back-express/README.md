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

Puedes instalar todas estas dependencias ejecutando el siguiente comando: `npm install express cors mysql`

Para ejecutar este proyecto, ejecuta el siguiente comando desde tu terminal: `npx nodemon app`

**_Nota:_** Debes haber inicializado un proyecto en node para ejecutar todo, puedes instalarlo con `npm init -y`

## Change Log
### 11 de Julio 2022

#### _Versión 0.0.0a2_ (Actual):
+ Adición de la carpeta **/maquetación** en el directorio **/front-react**
+ Eliminación de las dependencias de Sequelize y MySQL2.
+ Adición de la dependencia de MySQL.
+ Re-adaptación de los controladores para la sintaxis de MySQL.

#### _Versión 0.0.0a1_:
+ Creación de los controladores.
+ Creación de la conexión a la base de datos.
+ Creación de los modelos necesarios para manejar los datos para el catálogo de plantas.
+ Creación de los controladores de para consultar las plantas en la base de datos.