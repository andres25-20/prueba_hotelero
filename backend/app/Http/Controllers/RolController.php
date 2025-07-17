<?php

namespace App\Http\Controllers;

use App\Models\Rol;
use Illuminate\Http\Request;

class RolController extends Controller
{
    public function index()
    {
        $roles = Rol::all();
        return response()->json($roles);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255|unique:roles',
        ]);

        $rol = Rol::create($request->all());

        return response()->json($rol, 201);
    }

    public function show($id)
    {
        $rol = Rol::find($id);

        if ($rol) {
            return response()->json($rol);
        } else {
            return response()->json(['message' => 'Rol no encontrado'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'required|string|max:255|unique:roles,nombre,' . $id,
        ]);

        $rol = Rol::find($id);

        if ($rol) {
            $rol->update($request->all());

            return response()->json($rol);
        } else {
            return response()->json(['message' => 'Rol no encontrado'], 404);
        }
    }

    public function destroy($id)
    {
        $rol = Rol::find($id);

        if ($rol) {
            $rol->delete();

            return response()->json(['message' => 'Rol eliminado correctamente']);
        } else {
            return response()->json(['message' => 'Rol no encontrado'], 404);
        }
    }
}
