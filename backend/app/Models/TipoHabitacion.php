<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class TipoHabitacion extends Model
{
    use HasFactory;
    protected $table = 'tipos_habitacion';
    protected $fillable = ['nombre'];

    public function reglasAcomodacion()
    {
        return $this->hasMany(ReglaAcomodacion::class);
    }

    public function habitaciones()
    {
        return $this->hasMany(Habitacion::class);
    }
}
