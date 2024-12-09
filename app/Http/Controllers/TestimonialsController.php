<?php

namespace App\Http\Controllers;

use App\Models\Testimonials;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestimonialsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonials = Testimonials::all();
        return Inertia::render('Testimonials/Index', [
            'testimonials' => $testimonials,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $testimonials = Testimonials::all();
        return Inertia::render('Testimonials/Create',  [
            'testimonials' => $testimonials,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'rating' => 'required|string|max:255',
            'date' => 'required|date',
            'photo' => 'required',
        ]);

        // Handle file upload
        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('testimonials', 'public');
            $validatedData['photo'] = $photoPath;
        }

        // Store the data in the database
        Testimonials::create($request->all());
        // Return a response, such as redirecting the user back to the projects listing page
        return redirect()->route('testimonials.index')->with('success', 'Testimonial created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Testimonials $testimonial)
    {
        return Inertia::render('Testimonials/Show', [
            'blog' => $testimonial,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Testimonials $testimonial)
    {
        return Inertia::render('Testimonials/Edit', [
            'testimonial' => $testimonial,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Testimonials $testimonials)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Testimonials $testimonial)
    {
        $testimonial->delete();
        return redirect()->route('testimonials.index')->with('success', 'Testimonial deleted successfully.');
    }
}
