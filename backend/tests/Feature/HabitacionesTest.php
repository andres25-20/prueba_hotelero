<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\Ciudad;
use App\Models\User;
use App\Models\Rol;
use Tests\TestCase;
use App\Models\Hotel;
use App\Models\Habitacion;

class HabitacionesTest extends TestCase
{
    use RefreshDatabase;
    public function test_no_permite_mas_habitaciones_que_las_permitidas()
    {
        $hotel = Hotel::factory()->create(['numero_habitaciones' => 2]);
        Habitacion::factory()->count(2)->create(['hotel_id' => $hotel->id]);

        $response = $this->postJson('/api/habitaciones', [
            'hotel_id' => $hotel->id,
            'tipo_habitacion_id' => 1,
            'acomodacion_id' => 1,
            'cantidad' => 1,
        ]);

        $response->assertStatus(422);
        $response->assertJsonFragment([
            'message' => 'Supera el número máximo de habitaciones permitido para este hotel'
        ]);
    }
}
