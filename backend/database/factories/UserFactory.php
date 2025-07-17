<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Rol;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nombre' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password'),
            'rol_id' => Rol::inRandomOrder()->first()->id ?? null,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
        ]);
    }
}
