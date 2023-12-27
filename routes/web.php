<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\JobsController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\ParticipanController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\SelectionCriteriasController;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/users', [UsersController::class, 'getUsers'])->name('user.all');

    Route::get('/jobs', [JobsController::class, 'getJobs'])->name('jobs');
    
    Route::get('/job/detail/{id}', [JobsController::class, 'getJob'])->name('detailjob');


    Route::get('/selectioncriterias', [SelectionCriteriasController::class, 'getSelectionCriterias'])->name('selectioncriterias.all');


    Route::get('/participan',[ParticipanController::class,'getParticipan'])->name('participan');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//fungsi ini untuk memanggil controlerr

Route::get('/roles',[RolesController::class,'getRoles'])->name('roles');


require __DIR__.'/auth.php';
