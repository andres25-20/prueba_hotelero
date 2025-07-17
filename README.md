# prueba_hotelero
Se realiza aplicación Web para el funcionamiento de una cadena Hotelera en la cual podremos realizar registro de hoteles, habitaciones entre otras funcionalidades permitidas por la aplicación.

# SIREH - Sistema de Registro Hotelero

**SIREH** Es una plataforma web desarrollada para gestionar hoteles, habitaciones, tipos de acomodaciones y usuarios.

---

## Tecnologías Utilizadas

### Backend

- Laravel 12 - Framework PHP para la API RESTful
- PostgreSQL - Base de datos relacional
- PHPUnit para pruebas automatizadas simples
- Migraciones y Seeders
- Relaciones con claves foraneas

### Frontend

- React 18 - Framework para interfaz de usuario
- Vite - Herramienta rapida de construccion para desarrollo frontend
- Bootstrap 5 -Framework CSS para diseño responsive
- React Router - Manejo de rutas
- Axios - Cliente HTTP para consumo de API
- React Toastify - Notificaciones elegantes

---

## Funcionalidades

- Registro y gestión de hoteles
- Asignación de habitaciones según tipos y acomodaciones
- Validación automática de disponibilidad por hotel
- Registro y gestión de usuarios con roles
- Vista de acomodaciones permitidas por tipo de habitación
- Interfaz responsive

---

## Estructura

backend => Laravel AP
---app
------Http/ Controllers => Controladores Implementados
------Models => Clases modelo implementadas
---database
------Migrations => Migraciones para instalacion de las tablas requeridas
------Seeders => Archivos con datos predefinidos para inicializar informacion en las tablas
---routes => Contiene archivos para las solicitudes API
---tests => Archivos para implementacion de pruebas unitarias


frontend => React + Vite 
---src 
------api => Servicios Axios 
------pages => Vistas (hoteles, usuarios, etc.) 
------components => Reutilizables (Header, Footer, etc.) 
------assets => Imágenes y recursos

---

## Requisitos
- PHP 8.2+
- Composer
- PostgreSQL
- Node.js 18+
- Vite / npm

---

## Ejecucion del Proyecto

### Backend (Laravel)

- cd backend
- composer install
- cp .env.example .env
- php artisan migrate --seed
- php artisan serve


### Frontend (React)

- cd frontend
- npm install
- npm run dev

---

## Verifica que los puertos no estén en uso:

- Laravel: http://127.0.0.1:8000
- Vite (React): http://localhost:5173