<?php

namespace App\Http\Controllers;

use App\Models\Habitacion;
use Illuminate\Http\Request;
use App\Models\Hotel;

class HabitacionController extends Controller
{
    public function index()
    {
        $habitaciones = Habitacion::with(['hotel', 'tipoHabitacion', 'acomodacion'])->get();
        return response()->json($habitaciones);
    }

    public function store(Request $request)
    {
        $request->validate([
            'hotel_id' => 'required|exists:hoteles,id',
            'tipo_habitacion_id' => 'required|exists:tipos_habitacion,id',
            'acomodacion_id' => 'required|exists:acomodaciones,id',
            'cantidad' => 'required|integer|min:1',
        ]);

        $hotel = Hotel::findOrFail($request->hotel_id);
        $habitaciones_actuales = Habitacion::where('hotel_id', $hotel->id)->sum('cantidad');

        if ($habitaciones_actuales + $request->cantidad > $hotel->numero_habitaciones) {
            return response()->json(['message' => 'Supera el número máximo de habitaciones permitido para este hotel'], 422);
        }

        $habitacion = Habitacion::create($request->all());

        return response()->json($habitacion, 201);
    }

    public function show($id)
    {
        $habitacion = Habitacion::find($id);

        if ($habitacion) {
            return response()->json($habitacion);
        } else {
            return response()->json(['message' => 'Habitación no encontrada'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'hotel_id' => 'required|exists:hoteles,id',
            'tipo_habitacion_id' => 'required|exists:tipos_habitacion,id',
            'acomodacion_id' => 'required|exists:acomodaciones,id',
            'cantidad' => 'required|integer|min:1',
        ]);

        $habitacion = Habitacion::find($id);

        if ($habitacion) {
            $habitacion->update($request->all());

            return response()->json($habitacion);
        } else {
            return response()->json(['message' => 'Habitación no encontrada'], 404);
        }
    }

    public function destroy($id)
    {
        $habitacion = Habitacion::find($id);

        if ($habitacion) {
            $habitacion->delete();

            return response()->json(['message' => 'Habitación eliminada correctamente']);
        } else {
            return response()->json(['message' => 'Habitación no encontrada'], 404);
        }
    }
}
