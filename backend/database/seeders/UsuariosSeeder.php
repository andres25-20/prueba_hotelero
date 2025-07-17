<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsuariosSeeder extends Seeder
{
    public function run(): void
    {
        $adminId = DB::table('roles')->where('nombre', 'admin')->value('id');
        $gerenteId = DB::table('roles')->where('nombre', 'gerente')->value('id');

        DB::table('users')->insert([
            [
                'nombre' => 'Admin Principal',
                'email' => 'admin@decameron.com',
                'password' => Hash::make('admin123'),
                'rol_id' => $adminId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Gerente Hotel Bella Vista',
                'email' => 'gerente@hotelbellavista.com',
                'password' => Hash::make('gerente123'),
                'rol_id' => $gerenteId,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
