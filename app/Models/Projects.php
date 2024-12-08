<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    use HasFactory;

    // Define the table name if different from the plural form of the model name
    protected $table = 'projects';

    // Define the attributes that are mass assignable
    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'date',
        'image',
    ];
}
