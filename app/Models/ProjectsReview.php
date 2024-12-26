<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectsReview extends Model
{
    use HasFactory;


    // Define the attributes that are mass assignable
    protected $fillable = [
        'name',
        'email',
        'project_id',
        'project_review',
        'rating',

    ];
}
