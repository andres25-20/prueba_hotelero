<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $usuarios = User::with('rol')->get();
        return response()->json($usuarios);
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'nombre' => 'required|string|max:255',
                'email' => 'required|email|unique:users',
                'password' => 'required|string|min:8',
                'rol_id' => 'nullable|exists:roles,id',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'message' => 'Validación fallida',
                'errors' => $e->errors(),
            ], 422);
        }


        $usuario = User::create([
            'nombre' => $request->nombre,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'rol_id' => $request->rol_id,
        ]);

        return response()->json($usuario, 201);
    }

    public function show($id)
    {
        $usuario = User::find($id);

        if ($usuario) {
            return response()->json($usuario);
        } else {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
            'password' => 'nullable|string|min:8',
            'rol_id' => 'nullable|exists:roles,id',
        ]);

        $usuario = User::find($id);

        if ($usuario) {
            $usuario->update([
                'nombre' => $request->nombre,
                'email' => $request->email,
                'password' => $request->password ? bcrypt($request->password) : $usuario->password,
                'rol_id' => $request->rol_id,
            ]);

            return response()->json($usuario);
        } else {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }
    }

    public function destroy($id)
    {
        $usuario = User::find($id);

        if ($usuario) {
            $usuario->delete();

            return response()->json(['message' => 'Usuario eliminado correctamente']);
        } else {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }
    }
}
