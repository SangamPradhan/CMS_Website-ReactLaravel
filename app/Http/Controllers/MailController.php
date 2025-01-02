<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\AI_Solutions;

class MailController extends Controller
{
    public function sendmail(Request $request)
    {
        $email = $request->email;
        $subject = $request->subject;
        $message = $request->message;

        Mail::to($email)->send(new AI_Solutions($subject, $message));

        return redirect()->back()->with(['message'=> 'Email sent successfully']);
    }
}
