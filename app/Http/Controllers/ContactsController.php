<?php

namespace App\Http\Controllers;

use App\Models\Contacts;
use App\Http\Requests\StoreContactsRequest;
use App\Http\Requests\UpdateContactsRequest;
use App\Mail\AI_Solutions;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function contactpage()
    {
        return Inertia::render('ContactPage');
    }

    public function index()
    {
        $contacts = Contacts::all();
        return Inertia::render('ContactUs/Index', [
            'contacts' => $contacts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('ContactUs/Create');
    }

    public function sendmail(Request $request)
    {
        // Retrieve email, subject, and message from the request
        $email = $request->email;
        $subject = $request->subject;
        $message = $request->message;  // Explicitly typecast message to string

        // Send the email
        Mail::to($email)->send(new AI_Solutions($subject, $message));

        // Return a success response
        return redirect()->back()->with(['message' => 'Email sent successfully']);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:1000',
        ]);

        // Create a new contact record in the database
        Contacts::create([
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
        ]);

        // Redirect back with a success message
        return redirect()->back()->with(['success' => 'Your message has been sent successfully! ']);
    }

    /**
     * Display the specified resource.
     */
    // public function show(Contacts $contact)
    // {
    //     // $contacts = Contacts::findOrFail($id); // Fetch the contact by ID
    //     // return inertia('ContactUs/Show', [
    //     //     'contacts' => $contacts,
    //     // ]);
    //     dd($contact);
    //     return Inertia::render('ContactUs/Show', ['contact' => $contact]);
    // }

    public function show($id)
    {
        $contact = Contacts::findOrFail($id); // Manually fetching the contact by ID

       // dd($contact); // This should show the contact data if it exists

        return Inertia::render('ContactUs/Show', ['contact' => $contact]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contacts $contacts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contacts $contacts)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $contact = Contacts::findOrFail($id); // Fetch the contact by ID
        $contact->delete(); // Delete the contact
        return redirect()->route('contactus.index')->with(['success' => 'Contact deleted successfully.']);
    }
    // {
    //     $contact->delete();
    //     dd($contact);
    //     return redirect()->route('contactus.index')->with(['success' => 'Review deleted successfully.']);
    // }
}
