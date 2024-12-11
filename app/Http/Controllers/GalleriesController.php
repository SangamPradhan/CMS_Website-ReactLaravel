<?php

namespace App\Http\Controllers;

use App\Models\Galleries;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $galleries = Galleries::all();
        return Inertia::render('Gallery/Index', [
            'galleries' => $galleries,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $galleries = Galleries::all();
        return Inertia::render('Gallery/Create',  [
            'galleries' => $galleries,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'date' => 'required|date',
            'photo' => 'nullable|file|mimes:jpeg,png,jpg,gif|max:2048',
            'video' => 'nullable|string|max:255',

        ]);

        // Handle file upload
        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('galleries', 'public');
            $validatedData['photo'] = $photoPath;
        }

        // Store the data in the database
        Galleries::create($request->all());
        // Return a response, such as redirecting the user back to the projects listing page
        return redirect()->route('gallery.index')->with('success', 'Gallery created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Galleries $gallery)
    {
        return Inertia::render('Gallery/Show', [
            'gallery' => $gallery,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Galleries $gallery)
    {
        return Inertia::render('Gallery/Edit', [
            'gallery' => $gallery,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Galleries $gallery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Galleries $gallery)
    {
        $gallery->delete();
        return redirect()->route('gallery.index')->with('success', 'Gallery deleted successfully.');
    }
}
