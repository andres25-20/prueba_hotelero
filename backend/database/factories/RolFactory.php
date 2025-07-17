<?php

namespace Database\Factories;

use App\Models\Rol;
use Illuminate\Database\Eloquent\Factories\Factory;

class RolFactory extends Factory
{
    protected $model = Rol::class;

    /**
     * Define el estado por defecto del modelo.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nombre' => $this->faker->word,
        ];
    }
}
