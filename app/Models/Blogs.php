<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blogs extends Model
{
    /** @use HasFactory<\Database\Factories\BlogsFactory> */
    use HasFactory;

    protected $fillable = [
        'id',
        'title',
        'short_description',
        'long_description',
        'date',
        'photo',
    ];
}
