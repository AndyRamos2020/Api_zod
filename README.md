# API REST con Node.js y Express

API REST desarrollada con Node.js y Express. El proyecto utiliza un sistema de rutas separado para organizar los diferentes endpoints de la aplicación.

## Tecnologías utilizadas

* Node.js
* Express.js
* JavaScript

## Características

* Servidor HTTP desarrollado con Express.
* Manejo de solicitudes en formato JSON.
* Sistema de rutas separado.
* API accesible mediante el prefijo `/api`.
* Servidor ejecutándose en el puerto `3000`.

## Instalación

Clona el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresa a la carpeta del proyecto:

```bash
cd NOMBRE_DEL_PROYECTO
```

Instala las dependencias:

```bash
npm install
```

## Ejecución

Para iniciar el servidor:

```bash
node app.js
```

El servidor estará disponible en:

```text
http://localhost:3000
```

## Estructura básica

```text
proyecto/
├── app.js
├── router/
│   └── app.js
├── package.json
└── README.md
```

## API

Las rutas de la aplicación utilizan el siguiente prefijo:

```text
/api
```

Endpoints
GET - Obtener usuarios

Obtiene todos los usuarios almacenados.

GET http://localhost:3000/api/
POST - Crear usuario

Permite crear un nuevo usuario.

POST http://localhost:3000/api/save

Los datos se envían en formato JSON dentro del body de la petición.

Ejemplo:

{
  "id": 1
}

Los datos son validados antes de ser almacenados.

PUT - Actualizar usuario

Permite actualizar un usuario existente utilizando su id.

PUT http://localhost:3000/api/put/1

El 1 corresponde al id del usuario que se desea actualizar.

Los nuevos datos se envían en formato JSON dentro del body.

Ejemplo:

{
  "id": 1
}

Si el usuario no existe, la API devuelve:

404 Not Found
DELETE - Eliminar usuario

Permite eliminar un usuario utilizando su id.

DELETE http://localhost:3000/api/delete/1

El 1 corresponde al id del usuario que se desea eliminar.

Si el usuario no existe, la API devuelve:

404 Not Found
Resumen de endpoints
Método	Endpoint	Función
GET	/api/	Obtener usuarios
POST	/api/save	Crear usuario
PUT	/api/put/:id	Actualizar usuario
DELETE	/api/delete/:id	Eliminar usuario
Ejecutar el proyecto

Instalar las dependencias:

npm install

Iniciar el servidor:

node app.js

Servidor:

http://localhost:3000


Los endpoints disponibles se documentarán aquí a medida que se agreguen las diferentes rutas del proyecto.

## Autor

Andy Ramos
