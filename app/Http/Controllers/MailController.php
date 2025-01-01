<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\AI_Solutions;

class MailController extends Controller
{
    public function sendmail(){
        $to = "pradhansangam160@gmail.com";
        $subject = "Test mail";
        $message = "Hello! This is a simple email message.";

        Mail::to($to)->send(new AI_Solutions($subject, $message));
    }


}
