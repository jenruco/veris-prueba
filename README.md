# Veris App - Prueba Técnica

Aplicación web desarrollada en Angular para la gestión y monitoreo de mensajes de correo electrónico por sucursal como prueba técnica manejando datos estáticos únicamente a nivel de front.

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

En caso de que se desee levantar en Docker

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
├── dashboard/        
├── login/            
├── menu/             
├── modal-mail/       
├── navbar/           
├── seleccion-sucursal/ 
├── sucursal/         
└── services/         
```

## Credenciales de prueba

| Usuario | Contraseña |
|---------|------------|
| hperez  | 123456     |

## Url de video presentación App

https://mega.nz/file/HZ8CzLSL#_XiuQAPhFjnFqh9mhBeqUh-Sg1-dfGKXCDENyz7kay4

## Url de video presentación Código

https://mega.nz/file/TQVywRpb#PpKdVRpvxqyG9CkrVL4J_gQzKc1QcjJ84nzLp2bE7u0