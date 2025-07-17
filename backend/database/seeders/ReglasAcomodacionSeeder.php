<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReglasAcomodacionSeeder extends Seeder
{

    public function run(): void
    {
        $tipos = DB::table('tipos_habitacion')->pluck('id', 'nombre');
        $acomodaciones = DB::table('acomodaciones')->pluck('id', 'nombre');

        $reglas = [
            [$tipos['Estandar'], $acomodaciones['Sencilla']],
            [$tipos['Estandar'], $acomodaciones['Doble']],

            [$tipos['Junior'], $acomodaciones['Triple']],
            [$tipos['Junior'], $acomodaciones['Cuadruple']],

            [$tipos['Suite'], $acomodaciones['Sencilla']],
            [$tipos['Suite'], $acomodaciones['Doble']],
            [$tipos['Suite'], $acomodaciones['Triple']],
        ];

        foreach ($reglas as [$tipoId, $acomId]) {
            DB::table('reglas_acomodacion')->insert([
                'tipo_habitacion_id' => $tipoId,
                'acomodacion_id' => $acomId,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
