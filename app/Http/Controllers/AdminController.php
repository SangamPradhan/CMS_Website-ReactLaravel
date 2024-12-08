<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function addproject()
    {
        return Inertia::render('Admin/AddProject');
    }

    public function addevent()
    {
        return Inertia::render('Admin/Events');
    }

    public function blogs()
    {
        return Inertia::render('Admin/Blogs');
    }

    public function addgalery()
    {
        return Inertia::render('Admin/Blogs');
    }
}
