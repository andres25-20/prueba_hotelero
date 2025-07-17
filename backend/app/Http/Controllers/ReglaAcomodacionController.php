<?php

namespace App\Http\Controllers;

use App\Models\ReglaAcomodacion;
use Illuminate\Http\Request;

class ReglaAcomodacionController extends Controller
{
    public function index()
    {
        $reglasAcomodacion = ReglaAcomodacion::all();
        return response()->json($reglasAcomodacion);
    }

    public function store(Request $request)
    {
        $request->validate([
            'tipo_habitacion_id' => 'required|exists:tipos_habitacion,id',
            'acomodacion_id' => 'required|exists:acomodaciones,id',
        ]);

        $reglaAcomodacion = ReglaAcomodacion::create($request->all());

        return response()->json($reglaAcomodacion, 201);
    }

    public function show($id)
    {
        $reglaAcomodacion = ReglaAcomodacion::find($id);

        if ($reglaAcomodacion) {
            return response()->json($reglaAcomodacion);
        } else {
            return response()->json(['message' => 'Regla de acomodación no encontrada'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'tipo_habitacion_id' => 'required|exists:tipos_habitacion,id',
            'acomodacion_id' => 'required|exists:acomodaciones,id',
        ]);

        $reglaAcomodacion = ReglaAcomodacion::find($id);

        if ($reglaAcomodacion) {
            $reglaAcomodacion->update($request->all());

            return response()->json($reglaAcomodacion);
        } else {
            return response()->json(['message' => 'Regla de acomodación no encontrada'], 404);
        }
    }

    public function destroy($id)
    {
        $reglaAcomodacion = ReglaAcomodacion::find($id);

        if ($reglaAcomodacion) {
            $reglaAcomodacion->delete();

            return response()->json(['message' => 'Regla de acomodación eliminada correctamente']);
        } else {
            return response()->json(['message' => 'Regla de acomodación no encontrada'], 404);
        }
    }

    public function getAcomodacionesPorTipo($tipoHabitacionId)
    {
        $acomodaciones = \DB::table('reglas_acomodacion')
            ->where('tipo_habitacion_id', $tipoHabitacionId)
            ->join('acomodaciones', 'reglas_acomodacion.acomodacion_id', '=', 'acomodaciones.id')
            ->select('acomodaciones.id', 'acomodaciones.nombre')
            ->get();

        return response()->json($acomodaciones);
    }
}
