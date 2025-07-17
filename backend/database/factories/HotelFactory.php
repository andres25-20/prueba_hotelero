<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Hotel;
use App\Models\User;
use App\Models\Ciudad;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Hotel>
 */
class HotelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nombre' => $this->faker->unique()->company,
            'direccion' => $this->faker->address,
            'ciudad_id' => Ciudad::factory(),
            'nit' => $this->faker->unique()->numerify('##########'),
            'numero_habitaciones' => $this->faker->numberBetween(10, 100),
            'gerente_id' => User::factory(),
        ];
    }
}
