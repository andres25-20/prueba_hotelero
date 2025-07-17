<?php

namespace App\Http\Controllers;

use App\Models\TipoHabitacion;
use Illuminate\Http\Request;

class TipoHabitacionController extends Controller
{
    public function index()
    {
        $tiposHabitacion = TipoHabitacion::all();
        return response()->json($tiposHabitacion);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255|unique:tipos_habitacion',
        ]);

        $tipoHabitacion = TipoHabitacion::create($request->all());

        return response()->json($tipoHabitacion, 201);
    }

    public function show($id)
    {
        $tipoHabitacion = TipoHabitacion::find($id);

        if ($tipoHabitacion) {
            return response()->json($tipoHabitacion);
        } else {
            return response()->json(['message' => 'Tipo de habitación no encontrado'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'required|string|max:255|unique:tipos_habitacion,nombre,' . $id,
        ]);

        $tipoHabitacion = TipoHabitacion::find($id);

        if ($tipoHabitacion) {
            $tipoHabitacion->update($request->all());

            return response()->json($tipoHabitacion);
        } else {
            return response()->json(['message' => 'Tipo de habitación no encontrado'], 404);
        }
    }

    public function destroy($id)
    {
        $tipoHabitacion = TipoHabitacion::find($id);

        if ($tipoHabitacion) {
            $tipoHabitacion->delete();

            return response()->json(['message' => 'Tipo de habitación eliminado correctamente']);
        } else {
            return response()->json(['message' => 'Tipo de habitación no encontrado'], 404);
        }
    }
}
