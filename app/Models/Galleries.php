<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Galleries extends Model
{
    /** @use HasFactory<\Database\Factories\TestimonialsFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'photo',
        'date',
        'video',
    ];
}
