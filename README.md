Proyecto Delilah Resto

Este proyecto se basa en la creación de una API de pedidos online para un restaurante. La Api debia permitir realizar altas, bajas, modificaciones y obtención de información sobre una estructura de datos que podría consumir un cliente. 

Instrucciones de ejecución

Prerequisitos

Contar con los siguientes software instalados:

Visual Studio Code
Node
MySql Workbench
Postman
Instalación

Iniciar en  MySQLWorckbench una nueva conexion

Connection Name:Dalillah
Connextion Method: Standard (TCP/IP)
Hostname: remotemysql.com
Port: 3306
Username: dIUBrVGCAr
Password:maaxRJdiuz
Default Schema: dIUBrVGCAr

Desde la ventana "Query1" para ejecutar las sentencias de sql ejecutar las sentencias del archivo script "SQL-creacionDB.txt".
Luego, tambien desde la ventana "Query1" ejecutar las sentencias de sql del archivo "SQL agregar platos y admin txt" .

Abrir la carpeta del proyecto dentro de Visual Studio code

Dentro de la terminal de Bash ubicarse dentro de la carpeta del proyecto cd 'proyecto-delilah-resto'

Ejecutar la sentencia npm install para instalar todas las dependencias del archivo package.json.

Una vez instaladas ejecutar el comando npm run dev para inicializar el servidor.

Si el servidor se encuentra bien inicializado la consola dará el mensaje "conexion exitosa".

Aclaraciones

Por defecto todos los usuarios se crean como no administradores, por lo que se agrego en el script de la tabla de platos una sentencia SQL para agreagr un usuario administrador.


Se incluye los archivos spec.yaml y spec.json para ser visualizados desde Swagger Editor. Para poder probar estos archivos es necesario levantar el servidor con el comando npm run dev

Se guarda el archivo .env para que no sea necesario configurar nada más a excepción de MySQL Workbench.

PREUBA DE ENDPOINTS EN POSTMAN
Para probar los endpoints es necesario loggear un Usuario primero ya que todos los endpoints piden el uso del Token. En caso de querer modificar algo en la DB es necesario loggear el usuario admin que se agregó con el script de tablas y admin y usar el TOKEN que devuelva POSTMAN.

ENTRE OTROS ENDPOINTS A PROBAR

- Registro de usuario nuevo
POST localhost:3000/registrar

- Login de usuario/
POST localhost:3000/login

- Obtener todos los platos
GET localhost:3000/platos

- Realizar un pedido
POST localhost:3000/pedidos

Ejemplo de body:
{
    "forma_pago": "EFT",
    "platos": [
        {
            "platoId": 2,
            "cantidad": 5
        }
    ]
}


- Obtener todos los pedidos / para admin
GET localhost:3000/pedidos

- Obtener todos los USUARIOS / para admin
GET localhost:3000/usuarios

- Modificar un plato/ para admin
PUT localhost:3000/platos/id

- Cambiar el Estado de un pedido / para admin
PUT localhost:3000/pedidos/cambiarEstado/id

- Agregar un plato/ para admin
POST localhost:3000/platos

- ELIMINAR un plato/ para admin
DELETE localhost:3000/platos/id

- ELIMINAR un pedido/ para admin
DELETE localhost:3000/pedidos/id
