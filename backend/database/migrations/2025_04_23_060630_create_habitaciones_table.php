<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('habitaciones', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hotel_id')->constrained('hoteles')->onDelete('cascade');
            $table->foreignId('tipo_habitacion_id')->constrained('tipos_habitacion');
            $table->foreignId('acomodacion_id')->constrained('acomodaciones');
            $table->integer('cantidad');
            $table->timestamps();

            $table->unique(['hotel_id', 'tipo_habitacion_id', 'acomodacion_id'], 'uq_habitacion_config');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('habitaciones');
    }
};
