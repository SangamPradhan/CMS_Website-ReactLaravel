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

        return redirect()->route('blogs.index')->with('success', 'Blog post created successfully.');

        // $validatedData = $request->validate([
        //     'title' => 'required|string|max:255',
        //     'short_description' => 'required|string|max:255',
        //     'long_description' => 'required|string',
        //     'date' => 'required|date',
        //     'photo' => 'required',
        // ]);

        // // Handle file upload
        // if ($request->hasFile('photo')) {
        //     $photoPath = $request->file('photo')->store('blogs', 'public');
        //     $validatedData['photo'] = $photoPath;
        //     $request->save();
        // }

        // Store the data in the database
        // Blogs::create($validatedData);

        // Return success response
        // return redirect()->route('blogs.index')->with('success', 'Blog post created successfully.');
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
    public function update(Request $request, Blogs $blog)
    {
        // Validate incoming request data
        $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'required|string|max:255',
            'long_description' => 'required|string',
            'date' => 'required|date',
            'photo' => 'required',
        ]);

        // Update the blog data
        $blog->update([
            'title' => $request->title,
            'short_description' => $request->short_description,
            'long_description' => $request->long_description,
            'date' => $request->date,
        ]);

        // Handle photo upload if provided
        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('blogs', 'public');
            $blog->update(['photo' => $path]); // Save the photo path
        }

        // Redirect back to the blog listing with a success message
        return redirect()->route('blogs.index')->with('success', 'blog updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blogs $blog)
    {
        $blog->delete();
        return redirect()->route('blogs.index')->with('success', 'Blog post deleted successfully.');

    }
}
