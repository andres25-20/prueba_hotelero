<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            CiudadesSeeder::class,
            RolesSeeder::class,
            UsuariosSeeder::class,
            TiposHabitacionSeeder::class,
            AcomodacionesSeeder::class,
            ReglasAcomodacionSeeder::class,
        ]);
    }
}
