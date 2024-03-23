<?php

use Illuminate\Http\File;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application.
| These routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// The route for entering the application, no need to modify
Route::get('/', function () {
   return view('welcome');
});

// Ensure that the page is not redirected when refreshing the NewsCenter page
Route::get('/NewsCenter', function () {
   return view('welcome');
});

// Ensure that the page is not redirected when refreshing the NewsDetail page
Route::get('/NewsDetail', function () {
   return view('welcome');
});

// Ensure that the page is not redirected when refreshing the Login page
Route::get('/Login', function () {
   return view('welcome');
});

// Fill in the data after logging in with Google
Route::get('/Login/With-Google', function () {
   return view('welcome');
});

// About Us page
Route::get('/About', function () {
   return view('welcome');
});

// User settings
Route::get('/UserSettings/EditProfile', function () {
   return view('welcome');
});

// User settings
Route::get('/privacy-policy', function () {
   return view('welcome');
});

// User settings
Route::get('/terms-and-conditions', function () {
   return view('welcome');
});

// User settings
Route::get('/cookie-policy', function () {
   return view('welcome');
});

// Route for serving the ads.txt file
Route::get('/ads.txt', function () {
   return response()->file(public_path('storage/ads.txt'));
});
