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

    public function gallery(){
        return Inertia::render('Gallery');
    }

    public function event(){
        return Inertia::render('Events');
    }

    public function project(){
        return Inertia::render('Projects');
    }
}
