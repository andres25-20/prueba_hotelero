<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('hoteles', function (Blueprint $table) {
            $table->id();
            $table->string('nombre')->unique();
            $table->string('direccion');
            $table->foreignId('ciudad_id')->constrained('ciudades')->onDelete('cascade');            $table->string('nit')->unique();
            $table->integer('numero_habitaciones');
            $table->foreignId('gerente_id')->constrained('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('hoteles');
    }
};
