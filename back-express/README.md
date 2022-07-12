# Back Express
Esta carpeta tiene el fin de establecer las conexiones a la base de datos y proporcionar las API's necesarias para el adecuado funcionamiento de la aplicación web.

## Funcionamiento
Por el momento no hay nada.
## Dependencias 
| Nombre    | Versión |
| :-------- | :-----: |
| Express   | 4.18.1  |
| Cors      |  2.8.5  |
| MySQL2    |  2.3.3  |
| Nodemon   | 2.0.19  |
| Sequelize | 6.21.2  |

Puedes instalar todas estas dependencias ejecutando el siguiente comando: `npm install express cors mysql2 sequelize`

Para ejecutar este proyecto, ejecuta el siguiente comando desde tu terminal: `npx nodemon app`

**_Nota:_** Debes haber inicializado un proyecto en node para ejecutar todo, puedes instalarlo con `npm init -y`

## Change Log
### 11 de Julio 2022

#### _Versión 0.0.0a1_ - (Actual):
+ Creación de los controladores.
+ Creación de la conexión a la base de datos.
+ Creación de los modelos necesarios para manejar los datos para el catálogo de plantas.
+ Creación de los controladores de para consultar las plantas en la base de datos.