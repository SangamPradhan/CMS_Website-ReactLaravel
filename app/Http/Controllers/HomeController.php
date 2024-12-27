<?php

namespace App\Http\Controllers;

use App\Models\Blogs;
use App\Models\Contacts;
use App\Models\Events;
use App\Models\Projects;
use App\Models\ProjectsReview;
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

        $blogs = Blogs::all()->map(function ($blogs) {
            // Ensure the photo field contains the correct URL
            $blogs->photo = storage_path('storage/blogs/' . $blogs->photo); // Adjust the path as needed
            return $blogs;
        });

        return Inertia::render('Home', [
            'testimonials' => $testimonials,
            'blogs' => $blogs,
        ]);
    }

    public function contactpage()
    {
        return Inertia::render('ContactPage');
    }

    //saving data from the contact us form
    public function store(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:1000',
        ]);

        // Create a new contact record in the database
        Contacts::create([
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
        ]);

        // Redirect back with a success message
        return redirect()->back()->with(['success' => 'Your message has been sent successfully! ']);
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
        $events = Events::orderBy('date', 'desc')->paginate(5);
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

    public function addprojectreview(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'project_review' => 'required|string|max:1000',
            'rating' => 'required|integer|between:1,5',
            'project_id' => 'required|exists:projects,id',

        ]);

        // Create a new contact record in the database
        ProjectsReview::create([
            'name' => $request->name,
            'email' => $request->email,
            'project_review' => $request->project_review,
            'rating' => $request->rating,
            'project_id' => $request->project_id,
        ]);

        // Redirect back with a success message
        return redirect()->back()->with(['success' => 'Your message has been sent successfully! ']);
    }
}
