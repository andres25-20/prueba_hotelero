<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReglaAcomodacion extends Model
{
    protected $table = 'reglas_acomodacion';
    protected $fillable = [
        'tipo_habitacion_id',
        'acomodacion_id'
    ];

    public function tipoHabitacion()
    {
        return $this->belongsTo(TipoHabitacion::class);
    }

    public function acomodacion()
    {
        return $this->belongsTo(Acomodacion::class);
    }
}
