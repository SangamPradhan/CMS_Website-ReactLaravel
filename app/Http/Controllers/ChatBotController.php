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

        // System prompt: instruct Gemini to act as AI Solutions
        $systemPrompt = "You are AI Solutions, a professional assistant providing IT and digital services information. Answer user questions helpfully and politely.";

        try {
            // Send both system prompt and user message
            $response = Http::post($url, [
                'contents' => [
                    ['parts' => [['text' => $systemPrompt]]],
                    ['parts' => [['text' => $userMessage]]]
                ],
            ]);

            $data = $response->json();

            // Extract Gemini's reply
            $reply = $data['candidates'][0]['content']['parts'][0]['text'] ?? null;

            if (!$reply || trim($reply) === '') {
                $reply = "Sorry, I couldn't process that. Please try rephrasing your question or visit the contact us page for inquiries.";
            }
        } catch (\Exception $e) {
            $reply = "Sorry, there was an error connecting to AI. Please try again later.";
        }

        // Return only the text reply
        return response()->json([
            'reply' => $reply
        ]);
    }
}
