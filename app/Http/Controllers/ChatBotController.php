<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatBotController extends Controller
{
    public function chat(Request $request)
    {
        $userMessage = $request->input('message');

        $apiKey = env('GEMINI_API_KEY');
        $url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' . $apiKey;

        $response = Http::post($url, [
            'contents' => [
                ['parts' => [['text' => $userMessage]]]
            ],
        ]);

        $data = $response->json();
        $reply = $data['candidates'][0]['content']['parts'][0]['text'] ?? "Sorry, I couldn’t process that please visit the contact us page for inquiries.";

        return response()->json([
            'reply' => $reply
        ]);
    }

}
