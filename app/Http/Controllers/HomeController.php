<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function contactpage(){
        return Inertia::render('ContactPage');
    }

    public function aboutus(){
        return Inertia::render('AboutUs');
    }

    public function homegallery(){
        return Inertia::render('Gallery');
    }

    public function homeevent(){
        return Inertia::render('HomeEvents');
    }

    public function homeprojects(){
        return Inertia::render('HomeProjects');
    }
}
