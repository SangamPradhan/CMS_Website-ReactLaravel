<?php

namespace App\Http\Controllers;

use App\Models\Events;
use App\Http\Requests\StoreEventsRequest;
use App\Http\Requests\UpdateEventsRequest;
use Inertia\Inertia;

class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Events::all();
        return Inertia::render('Event/Index', [
            'events' => $events,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $events = Events::all();

        return Inertia::render('Event/Create',  [
            'events' => $events,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEventsRequest $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'required|string|max:255',
            'long_description' => 'required|string',
            'date' => 'required|date',
            'hashtags' => 'required|string',
            'short_tips' => 'required|string',
            'photo' => 'required|image|mimes:jpg,jpeg,png|max:2048',
        ]);
        dd($request);

        // Handle file upload
        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('events', 'public');
            $validatedData['photo'] = $photoPath;
        }

        // Store the data in the database
        Events::create($request->all());

        // Return success response
        return redirect()->route('event.index')->with('success', 'Segment created successfully.');
    }


    /**
     * Display the specified resource.
     */
    public function show(Events $events)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Events $events)
    {
        $events = Events::all();

        return Inertia::render('Event/Edit', [
            'events' => $events,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventsRequest $request, Events $events)
    {
        // Validate incoming request data
        $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'required|string|max:255',
            'long_description' => 'required|string',
            'date' => 'required|date',
            'hashtags' => 'nullable|string|max:255',
            'short_tips' => 'nullable|string|max:255',
            'photo' => 'nullable|image|max:2048', // Optional image validation
        ]);

        // Update the event data
        $events->update([
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
            $events->update(['photo' => $path]); // Save the photo path
        }

        // Redirect back to the event listing with a success message
        return redirect()->route('event.index')->with('success', 'Event updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Events $events)
    {
        $events->delete();

        return redirect()->route('event.index')->with('success', 'Event deleted successfully.');
    }
}
