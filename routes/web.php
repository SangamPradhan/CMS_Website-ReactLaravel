<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BlogsController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\GalleriesController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TestimonialsController;
use App\Models\Blogs;
use App\Models\Testimonials;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', function () {
    $testimonials = Testimonials::all(); // Fetch all testimonials from the database
    $blogs = Blogs::all(); // Fetch all blogs from the database
    return Inertia::render('Home', [
        'testimonials' => $testimonials, // Pass testimonials to the Home component
        'blogs' => $blogs,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/register', function () {
    return Inertia::render('Auth/Register');
})->middleware(['guest'])->name('register');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/contactpage', [HomeController::class, 'contactpage']);
Route::post('/contact', [ContactsController::class, 'store'])->name('contact.store');
Route::get('/aboutus', [HomeController::class, 'aboutus']);
Route::get('/homegallery', [HomeController::class, 'homegallery']);
Route::get('/homeevent', [HomeController::class, 'homeevent']);
Route::get('/homeprojects', [HomeController::class, 'homeprojects']);
Route::post('/addprojectreview', [HomeController::class, 'addprojectreview'])->name('addprojectreview');
// Route::get('/contactus/{id}', [ContactsController::class, 'show'])->name('contactus.show');


// Segment management routes
Route::middleware('auth')->group(function () {
    Route::resource('event', EventsController::class);
    Route::resource('projects', ProjectController::class);
    Route::resource('blogs', BlogsController::class);
    Route::resource('testimonials', TestimonialsController::class);
    Route::resource('gallery', GalleriesController::class);
    Route::resource('contactus', ContactsController::class);
    Route::post('/contactus/sendmail', [ContactsController::class, 'sendmail'])->name('contactus.sendmail');
});





require __DIR__ . '/auth.php';
