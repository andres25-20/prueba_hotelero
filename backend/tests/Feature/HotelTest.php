<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Rol;
use App\Models\Ciudad;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class HotelTest extends TestCase
{
    use RefreshDatabase;

    public function test_crear_hotel_con_gerente()
{

    $ciudad = Ciudad::factory()->create();

    $rol = Rol::factory()->create();

    $gerente = User::factory()->create([
        'rol_id' => $rol->id,
    ]);

    $data = [
        'nombre' => 'Hotel Aurora',
        'direccion' => 'Av. Siempre Viva 123',
        'ciudad_id' => $ciudad->id,
        'nit' => '9876543210',
        'numero_habitaciones' => 25,
        'gerente_id' => $gerente->id,
    ];

    $response = $this->postJson('/api/hoteles', $data);

    $response->assertStatus(201)
             ->assertJsonFragment(['nombre' => 'Hotel Aurora']);

    $this->assertDatabaseHas('hoteles', ['nombre' => 'Hotel Aurora']);
}
}
