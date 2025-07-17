<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AcomodacionesSeeder extends Seeder
{

    public function run(): void
    {
        DB::table('acomodaciones')->insert([
            ['nombre' => 'Sencilla'],
            ['nombre' => 'Doble'],
            ['nombre' => 'Triple'],
            ['nombre' => 'Cuadruple'],
        ]);
    }
}
