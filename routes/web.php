<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Home');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/contactpage', [HomeController::class, 'contactpage']);
Route::get('/aboutus', [HomeController::class, 'aboutus']);
Route::get('/gallery', [HomeController::class, 'gallery']);
Route::get('/homeevent', [HomeController::class, 'homeevent']);
Route::get('/project', [HomeController::class, 'project']);

// Segment management routes
Route::middleware('auth')->group(function () {
    Route::resource('event', EventsController::class);
    Route::resource('projects', ProjectController::class);
    Route::get('/admin/addproject', [AdminController::class, 'addproject'])->name('admin.addproject');
    Route::get('/admin/addevent', [AdminController::class, 'addevent'])->name('admin.addevent');
    Route::get('/admin/addblogs', [AdminController::class, 'blogs'])->name('admin.addblogs');
    Route::get('/admin/addgallery', [AdminController::class, 'addgallery'])->name('admin.addgallery');

    // New route to handle storing projects
    Route::post('/admin/projects', [ProjectController::class, 'store'])->name('admin.projects.store');
});





require __DIR__.'/auth.php';
