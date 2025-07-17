<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\HabitacionController;
use App\Http\Controllers\TipoHabitacionController;
use App\Http\Controllers\AcomodacionController;
use App\Http\Controllers\ReglaAcomodacionController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CiudadController;

Route::apiResource('hoteles', HotelController::class);
Route::apiResource('habitaciones', HabitacionController::class);
Route::apiResource('tipos-habitacion', TipoHabitacionController::class);
Route::apiResource('reglas-acomodacion', ReglaAcomodacionController::class);
Route::apiResource('roles', RolController::class);
Route::apiResource('usuarios', UserController::class);
Route::apiResource('ciudades', CiudadController::class);
Route::get('reglas-acomodacion/tipo/{id}', [ReglaAcomodacionController::class, 'getAcomodacionesPorTipo']);
Route::get('acomodaciones/permitidas', [AcomodacionController::class, 'listPermitidas']);
Route::get('acomodaciones', [AcomodacionController::class, 'index']);
Route::post('acomodaciones', [AcomodacionController::class, 'store']);
Route::get('acomodaciones/con-reglas', [AcomodacionController::class, 'listConReglas']);
Route::get('acomodaciones/{id}', [AcomodacionController::class, 'show']);
Route::put('acomodaciones/{id}', [AcomodacionController::class, 'update']);
