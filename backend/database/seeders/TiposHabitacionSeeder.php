<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TiposHabitacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tipos_habitacion')->insert([
            ['nombre' => 'Estandar'],
            ['nombre' => 'Junior'],
            ['nombre' => 'Suite'],
        ]);
    }
}
