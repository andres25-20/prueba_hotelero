<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Acomodacion extends Model
{

    use HasFactory;
    protected $table = 'acomodaciones';
    protected $fillable = ['nombre'];

    public function reglasAcomodacion()
    {
        return $this->hasMany(ReglaAcomodacion::class);
    }

    public function habitaciones()
    {
        return $this->hasMany(Habitacion::class);
    }

    public function tiposPermitidos()
{
    return $this->belongsToMany(
        \App\Models\TipoHabitacion::class,
        'reglas_acomodacion',
        'acomodacion_id',
        'tipo_habitacion_id'
    );
}
}
