<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    public function index()
    {
        $hoteles = Hotel::with(['ciudad','gerente'])->get();
        return response()->json($hoteles);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255|unique:hoteles',
            'direccion' => 'required|string|max:255',
            'ciudad_id' => 'required|exists:ciudades,id',
            'nit' => 'required|string|max:255|unique:hoteles',
            'numero_habitaciones' => 'required|integer|min:1',
            'gerente_id' => 'nullable|exists:users,id',
        ], [
            'nombre.unique' => 'El nombre del hotel ya está registrado.',
            'nombre.required' => 'El nombre del hotel es obligatorio.',
        ]);

        $hotel = Hotel::create($request->all());

        return response()->json($hotel, 201);
    }

    public function show($id)
    {
        $hotel = Hotel::with('ciudad')->find($id);

        if ($hotel) {
            return response()->json($hotel);
        } else {
            return response()->json(['message' => 'Hotel no encontrado'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'required|string|max:255|unique:hoteles,nombre,' . $id,
            'direccion' => 'required|string|max:255',
            'ciudad_id' => 'required|exists:ciudades,id',
            'nit' => 'required|string|max:255|unique:hoteles,nit,' . $id,
            'numero_habitaciones' => 'required|integer|min:1',
        ]);

        $hotel = Hotel::find($id);

        if ($hotel) {
            $hotel->update($request->all());

            return response()->json($hotel);
        } else {
            return response()->json(['message' => 'Hotel no encontrado'], 404);
        }
    }

    public function destroy($id)
    {
        $hotel = Hotel::find($id);

        if ($hotel) {
            $hotel->delete();

            return response()->json(['message' => 'Hotel eliminado correctamente']);
        } else {
            return response()->json(['message' => 'Hotel no encontrado'], 404);
        }
    }
}
