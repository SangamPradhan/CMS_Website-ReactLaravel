<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $gallerys = Gallery::all();
        return Inertia::render('Gallery/Index', [
            'testimonials' => $gallerys,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $gallery = Gallery::all();
        return Inertia::render('Gallery/Create',  [
            'gallery' => $gallery,
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
        Gallery::create($request->all());
        // Return a response, such as redirecting the user back to the projects listing page
        return redirect()->route('gallery.index')->with('success', 'Testimonial created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Gallery $gallery)
    {
        return Inertia::render('Gallery/Show', [
            'gallery' => $gallery,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gallery $gallery)
    {
        return Inertia::render('Gallery/Edit', [
            'gallery' => $gallery,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Gallery $gallery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gallery $gallery)
    {
        $gallery->delete();
        return redirect()->route('gallery.index')->with('success', 'Gallery deleted successfully.');
    }
}
