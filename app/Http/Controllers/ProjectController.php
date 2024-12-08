<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Projects;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    // Store the project data
    public function store(Request $request)
    {
        // Validate the incoming data
        $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string|max:255',
            'description' => 'required|string',
            'date' => 'required|date',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,gif,webp|max:10240', // image validation
        ]);

        // Handle image upload if present
        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images/projects'); // Store image in 'images/projects' directory
        }

        // Create a new project in the database
        $project = Projects::create([
            'title' => $request->input('title'),
            'subtitle' => $request->input('subtitle'),
            'description' => $request->input('description'),
            'date' => $request->input('date'),
            'image' => $imagePath, // Save the image path if uploaded
        ]);

        // Return a response, such as redirecting the user back to the projects listing page
        return redirect()->route('admin.addproject'); // Adjust this route as needed
    }
}
