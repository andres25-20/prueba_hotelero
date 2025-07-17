<?php

namespace App\Http\Controllers;

use App\Models\Acomodacion;
use Illuminate\Http\Request;

class AcomodacionController extends Controller
{
    public function index()
    {
        $acomodaciones = Acomodacion::all();
        return response()->json($acomodaciones);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255|unique:acomodaciones',
        ]);

        $acomodacion = Acomodacion::create($request->all());

        return response()->json($acomodacion, 201);
    }

    public function show($id)
    {
        $acomodacion = Acomodacion::find($id);

        if ($acomodacion) {
            return response()->json($acomodacion);
        } else {
            return response()->json(['message' => 'Acomodación no encontrada'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'required|string|max:255|unique:acomodaciones,nombre,' . $id,
        ]);

        $acomodacion = Acomodacion::find($id);

        if ($acomodacion) {
            $acomodacion->update($request->all());

            return response()->json($acomodacion);
        } else {
            return response()->json(['message' => 'Acomodación no encontrada'], 404);
        }
    }

    public function destroy($id)
    {
        $acomodacion = Acomodacion::find($id);

        if ($acomodacion) {
            $acomodacion->delete();

            return response()->json(['message' => 'Acomodación eliminada correctamente']);
        } else {
            return response()->json(['message' => 'Acomodación no encontrada'], 404);
        }
    }

    public function listPermitidas()
    {
        $acomodaciones = \DB::table('reglas_acomodacion')
            ->join('acomodaciones', 'reglas_acomodacion.acomodacion_id', '=', 'acomodaciones.id')
            ->select('acomodaciones.id', 'acomodaciones.nombre')
            ->distinct()
            ->orderBy('acomodaciones.nombre')
            ->get();

        return response()->json($acomodaciones);
    }

    public function listConReglas()
    {
        $acomodaciones = Acomodacion::with('tiposPermitidos:id,nombre')->get(['id', 'nombre']);
        return response()->json($acomodaciones);
    }
}
