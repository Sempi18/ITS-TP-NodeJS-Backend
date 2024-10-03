# Aplicación de Gestión de Pagos creada por Lucas Duran


## Descripción

Esta es una aplicación de servidor creada con Node.js que permite la gestión de usuarios y pagos. El sistema soporta la creación de diferentes tipos de usuarios (superusuario, administradores y usuarios comunes), el registro de pagos y la subida de recibos en formato PDF.

### Funcionalidades Principales:

- **Superusuario**: Puede crear usuarios administradores.
- **Administradores**: Pueden registrar nuevos usuarios (administradores y usuarios comunes), registrar pagos y subir recibos en formato PDF.
- **Usuarios Comunes**: Pueden ver y descargar sus propios recibos de pagos.
- **Gestión de Errores**: La aplicación maneja errores con respuestas claras y detalladas, devolviendo los códigos de error HTTP adecuados (404, 400, etc.).

## Requisitos del Proyecto

- **Buenas prácticas de código**: El proyecto sigue principios de responsabilidad única y clean code, con comentarios descriptivos en el código.
- **Manejo de Errores**: Implementa un sistema robusto de manejo de errores con mensajes claros para los clientes y códigos HTTP precisos.
- **Base de Datos**: Se puede utilizar Sequelize para la interacción con la base de datos. El dump de la base de datos está disponible en la carpeta `database/`.
- **MER (Modelo Entidad-Relación)**: Se incluye el MER en la carpeta raíz del proyecto en formato `.png`.
- **Pruebas Unitarias**: Cada función creada tiene sus respectivas pruebas unitarias usando Mocha y Chai. El servidor puede probarse mediante estas pruebas, no mediante Thunder Client, Postman o Insomnia.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para el servidor.
- **Express.js**: Framework web para gestionar las rutas y peticiones.
- **Sequelize**: ORM para interactuar con la base de datos.
- **Multer**: Middleware para la subida de archivos.
- **JWT**: Autenticación mediante JSON Web Tokens.
- **Mocha y Chai**: Frameworks para pruebas unitarias.
- **MySQL**: Base de datos utilizada (puede cambiarse en la configuración).

## Estructura del Proyecto

```plaintext
my-app/
│
├── controllers/        # Lógica de negocio (usuarios, pagos, autenticación)
├── database/           # Conexión a la base de datos y modelos (Sequelize)
│   ├── models/
│   └── dump.sql        # DUMP de la base de datos
├── middlewares/        # Middlewares (manejo de errores, autenticación)
├── routes/             # Definición de rutas (usuarios, pagos)
├── tests/              # Pruebas unitarias (Mocha, Chai)
├── uploads/            # Carpeta donde se almacenan los recibos en PDF
├── .env                # Variables de entorno (configuración de la base de datos)
├── app.js              # Punto de entrada de la aplicación
└── README.md           # Este archivo
```
