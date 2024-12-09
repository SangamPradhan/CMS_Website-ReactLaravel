<?php

namespace App\Http\Controllers;

use App\Models\Events;
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
    // Store the project data
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string|max:255',
            'description' => 'required|string',
            'date' => 'required|date',
            'image' => 'required',
        ]);

        // Handle file upload
        if ($request->hasFile('image')) {
            $photoPath = $request->file('image')->store('projects', 'public');
            $validatedData['image'] = $photoPath;
        }

        // Store the data in the database
        Projects::create($request->all());
        // Return a response, such as redirecting the user back to the projects listing page
        return redirect()->route('projects.index')->with('success', 'Project created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Projects $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Projects $project)
    {
        // $event = Events::all();

        return Inertia::render('Projects/Edit', [
            'project' => $project,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Events $event)
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

        // Update the event data
        $event->update([
            'title' => $request->title,
            'short_description' => $request->short_description,
            'long_description' => $request->long_description,
            'date' => $request->date,
            'hashtags' => $request->hashtags,
            'short_tips' => $request->short_tips,
        ]);

        // Handle photo upload if provided
        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('events', 'public');
            $event->update(['photo' => $path]); // Save the photo path
        }

        // Redirect back to the event listing with a success message
        return redirect()->route('event.index')->with('success', 'Event updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Projects $project)
    {
        $project->delete();
        return redirect()->route('event.index')->with('success', 'Event deleted successfully.');
    }
}
