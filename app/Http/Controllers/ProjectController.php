<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Projects::all();
        return Inertia::render('Projects/Index', [
            'projects' => $projects,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $projects = Projects::all();

        return Inertia::render('Projects/Create',  [
            'projects' => $projects,
        ]);
    }
    // // Store the project data
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string|max:255',
            'description' => 'required|string',
            'date' => 'required|date',
            'image' => 'required|image|mimes:jpg,jpeg,png|max:2048',
        ]);


        $filePath = $request->file('image')->store('projects', 'public');

        Projects::create([
            'title' => $request->title,
            'image' => $filePath,
            'subtitle' => $request->subtitle,
            'description' => $request->description,
            'date' => $request->date,
        ]);

        // return Inertia::render('Projects/Index', [
        //     'success' => 'Project created successfully.',
        // ]);
        return redirect()-> route('projects.index')->with(['success'=> 'Project created successfully.']);
    }



    /**
     * Display the specified resource.
     */
    public function show(Projects $project)
    {
        $project = $project->load('reviews');

        return Inertia::render('Projects/Show', [
            'project' => $project,
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Projects $project)
    {
        // $project = projects::all();

        return Inertia::render('Projects/Edit', [
            'project' => $project,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Projects $project)
    {
        // Validate incoming request data
        $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'required|string|max:255',
            'long_description' => 'required|string',
            'date' => 'required|date',
            'hashtags' => 'nullable|string|max:255',
            'short_tips' => 'nullable|string|max:255',
            'photo' => 'required',
        ]);

        // Update the project data
        $project->update([
            'title' => $request->title,
            'short_description' => $request->short_description,
            'long_description' => $request->long_description,
            'date' => $request->date,
            'hashtags' => $request->hashtags,
            'short_tips' => $request->short_tips,
        ]);

        // Handle photo upload if provided
        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('projects', 'public');
            $project->update(['photo' => $path]); // Save the photo path
        }

        // Redirect back to the project listing with a success message
        return redirect()->route('projects.index')->with(['success'=> 'Project updated successfully.']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Projects $project)
    {
        $project->delete();
        return redirect()->route('projects.index')->with(['success'=> 'Project deleted successfully.']);
    }
}
