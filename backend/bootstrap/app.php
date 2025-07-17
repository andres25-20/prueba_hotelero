<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->validateCsrfTokens(['api/usuarios',
    'api/usuarios/*','api/hoteles',
    'api/hoteles/*','api/ciudades',
    'api/ciudades/*','api/habitaciones',
    'api/habitaciones/*','api/tipos-habitacion',
    'api/tipos-habitacion/*','api/roles',
    'api/roles/*','api/reglas-acomodacion',
    'api/reglas-acomodacion/*','api/reglas-acomodacion/tipo',
    'api/reglas-acomodacion/tipo/*','api/acomodaciones',
    'api/acomodaciones/*','api/acomodaciones/permitidas']);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
