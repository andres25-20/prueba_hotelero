<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CiudadesSeeder extends Seeder
{
    public function run()
    {
        $ciudades = [
            ['nombre' => 'Bogotá'],
            ['nombre' => 'Medellín'],
            ['nombre' => 'Cali'],
            ['nombre' => 'Barranquilla'],
            ['nombre' => 'Cartagena'],
            ['nombre' => 'Bucaramanga'],
            ['nombre' => 'Pereira'],
            ['nombre' => 'Santa Marta'],
            ['nombre' => 'Manizales'],
            ['nombre' => 'Ibagué'],
            ['nombre' => 'Cúcuta'],
            ['nombre' => 'Armenia'],
            ['nombre' => 'Villavicencio'],
            ['nombre' => 'Neiva'],
            ['nombre' => 'Tunja'],
            ['nombre' => 'Popayán'],
            ['nombre' => 'Montería'],
            ['nombre' => 'Sincelejo'],
            ['nombre' => 'Quibdó'],
            ['nombre' => 'Leticia']
        ];

        DB::table('ciudades')->insert($ciudades);
    }
}
