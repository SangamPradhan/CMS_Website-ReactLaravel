<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class AI_Solutions extends Mailable
{
    use Queueable, SerializesModels;

    public $message;
    public $subject;

    /**
     * Create a new message instance.
     */
    public function __construct($subject, $message)
    {
        $this->subject = $subject;
        $this->message = (string) $message; // Explicitly cast message to string
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: $this->subject,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.contact', // Replace with your view name
            with: [
                'subject' => $this->subject,
                'message' => $this->message, // Ensure it's a string
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
