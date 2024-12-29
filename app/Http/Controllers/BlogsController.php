<?php

namespace App\Http\Controllers;

use App\Models\Blogs;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blogs::all();
        return Inertia::render('Blogs/Index', [
            'blogs' => $blogs,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $blogs = Blogs::all();

        return Inertia::render('Blogs/Create',  [
            'blogs' => $blogs,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'required|string|max:255',
            'long_description' => 'required|string',
            'date' => 'required|date',
            'photo' => 'required|file|mimes:pdf,jpg,jpeg,png',
        ]);

        if ($request->hasFile('photo')) {
            $filePath = $request->file('photo')->store('blogs', 'public');
        }

        Blogs::create([
            'title' => $request->title,
            'short_description' => $request->short_description,
            'long_description' => $request->long_description,
            'date' => $request->date,
            'photo' => $filePath,
        ]);

        return redirect()->route('blogs.index')->with(['success' => 'Blog post created successfully.']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Blogs $blog)
    {
        return Inertia::render('Blogs/Show', [
            'blog' => $blog,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blogs $blog)
    {
        return Inertia::render('Blogs/Edit', [
            'blog' => $blog,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Validate incoming request (optional fields for image)
        $request->validate([
            'title' => 'nullable|string|max:255',
            'short_description' => 'nullable|string|max:255',
            'long_description' => 'nullable|string',
            'date' => 'nullable|date',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',  // Validate image if provided
        ]);

        // Find the blog by ID
        $blog = Blogs::findOrFail($id);

        // Prepare an array to hold the fields that will be updated
        $updateData = [];

        // Update only the fields that are provided in the request
        if ($request->has('title')) {
            $updateData['title'] = $request->title;
        }

        if ($request->has('short_description')) {
            $updateData['short_description'] = $request->short_description;
        }

        if ($request->has('long_description')) {
            $updateData['long_description'] = $request->long_description;
        }

        if ($request->has('date')) {
            $updateData['date'] = $request->date;
        }

        // Handle image upload if a new image is provided
        if ($request->hasFile('image')) {
            // If there's an existing image, delete it from storage
            if ($blog->photo && file_exists(storage_path('app/public/' . $blog->photo))) {
                // Delete old image file from storage
                unlink(storage_path('app/public/' . $blog->photo));
            }

            // Store the new image and update the photo field
            $imagePath = $request->file('image')->store('blogs', 'public');
            $updateData['photo'] = $imagePath;
        }

        // Update the blog with the provided fields (only those in $updateData)
        $blog->update($updateData);

        // Redirect back with a success message
        return redirect()->route('blogs.index')->with('success', 'Blog updated successfully!');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blogs $blog)
    {
        $blog->delete();
        return redirect()->route('blogs.index')->with(['success' => 'Blog post deleted successfully.']);
    }
}
