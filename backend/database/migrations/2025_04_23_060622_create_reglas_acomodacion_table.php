<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('reglas_acomodacion', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tipo_habitacion_id')->constrained('tipos_habitacion')->onDelete('cascade');
            $table->foreignId('acomodacion_id')->constrained('acomodaciones')->onDelete('cascade');
            $table->timestamps();

            $table->unique(['tipo_habitacion_id', 'acomodacion_id'], 'uq_regla_tipo_acomodacion');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reglas_acomodacion');
    }
};
