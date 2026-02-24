# PhantomX - Veris App

Aplicación web desarrollada en Angular para la gestión y monitoreo de mensajes de correo electrónico por sucursal.

## Tecnologías

- **Angular CLI:** 21.1.4
- **Node.js:** 22.14.0
- **Package Manager:** npm 10.9.2

## Requisitos previos

- Node.js 22.14.0
- npm 10.9.2

## Instalación

```bash
npm install
```

## Ejecución en desarrollo

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

## Docker

```bash
# Construir imagen
docker build -t app-veris .

# Ejecutar contenedor
docker run -d --name app-veris -p 4200:80 app-veris
```

La aplicación estará disponible en `http://localhost:4200`

## Estructura del proyecto

```
src/app/
├── dashboard/        # Dashboard con estadísticas y tabla de mensajes
├── login/            # Autenticación de usuario
├── menu/             # Cruce de depósitos y registros
├── modal-mail/       # Modal informativo de emails
├── navbar/           # Barra de navegación
├── seleccion-sucursal/ # Selección de sucursal
├── sucursal/         # Vista principal por sucursal
└── services/         # Servicios HTTP
```

## Credenciales de prueba

| Usuario | Contraseña |
|---------|------------|
| hperez  | 123456     |