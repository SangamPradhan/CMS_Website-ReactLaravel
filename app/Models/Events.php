<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    /** @use HasFactory<\Database\Factories\EventsFactory> */
    use HasFactory;

    protected $fillable = [
        'id',
        'title',
        'short_description',
        'long_description',
        'date',
        'hashtags',
        'short_tips',
        'photo',
    ];
}
