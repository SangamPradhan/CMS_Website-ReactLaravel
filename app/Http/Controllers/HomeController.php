<?php

namespace App\Http\Controllers;

use App\Models\Events;
use App\Models\Projects;
use App\Models\Testimonials;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function home()
    {
        $testimonials = Testimonials::all()->map(function ($testimonial) {
            // Ensure the photo field contains the correct URL
            $testimonial->photo = storage_path('storage/testimonials/' . $testimonial->photo); // Adjust the path as needed
            return $testimonial;
        });

        return Inertia::render('Home', [
            'testimonials' => $testimonials,
        ]);
    }

    public function contactpage()
    {
        return Inertia::render('ContactPage');
    }

    public function aboutus()
    {
        return Inertia::render('AboutUs');
    }

    public function homegallery()
    {
        return Inertia::render('Gallery');
    }

    public function homeevent()
    {
        $events = Events::all();
        return Inertia::render('HomeEvents', [
            'events' => $events,
        ]);
    }

    public function homeprojects()
    {
        $projects = Projects::all();
        return Inertia::render('HomeProjects', [
            'projects' => $projects,
        ]);
    }
}
