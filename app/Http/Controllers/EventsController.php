<?php

namespace App\Http\Controllers;

use App\Models\Events;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'required|string|max:255',
            'long_description' => 'required|string',
            'date' => 'required|date',
            'hashtags' => 'required|string|max:255',
            'short_tips' => 'required|string|max:255',
            'photo' => 'required|image|mimes:jpg,jpeg,png,gif|max:2048',
        ]);

        // Handle file upload
        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('events', 'public');
        }

        // Store the event data
        Events::create([
            'title' => $request->title,
            'short_description' => $request->short_description,
            'long_description' => $request->long_description,
            'date' => $request->date,
            'hashtags' => $request->hashtags,
            'short_tips' => $request->short_tips,
            'photo' => $photoPath,
        ]);

        // Redirect with success message
        return redirect()->route('event.index')->with('success', 'Event created successfully.');
    }


    /**
     * Display the specified resource.
     */
    public function show(Events $event)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Events $event)
    {
        // $event = Events::all();

        return Inertia::render('Event/Edit', [
            'event' => $event,
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
            if ($event->photo) {
                Storage::disk('public')->delete($event->photo);
            }
            $path = $request->file('photo')->store('events', 'public');
            $event->update(['photo' => $path]);
        }


        // Redirect back to the event listing with a success message
        return redirect()->route('event.index')->with('success', 'Event updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Events $event)
    {
        $event->delete();
        return redirect()->route('event.index')->with('success', 'Event deleted successfully.');
    }
}
