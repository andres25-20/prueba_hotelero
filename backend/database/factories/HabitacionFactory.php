<?php

namespace Database\Factories;

use App\Models\Habitacion;
use App\Models\Hotel;
use App\Models\TipoHabitacion;
use App\Models\Acomodacion;
use Illuminate\Database\Eloquent\Factories\Factory;

class HabitacionFactory extends Factory
{
    protected $model = Habitacion::class;

    public function definition()
    {
        return [
            'hotel_id' => Hotel::factory(),
            'tipo_habitacion_id' => TipoHabitacion::factory(),
            'acomodacion_id' => Acomodacion::factory(),
            'cantidad' => $this->faker->numberBetween(1, 5),
        ];
    }
}
