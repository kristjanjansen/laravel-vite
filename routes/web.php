<?php

use Illuminate\Support\Facades\Route;

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

$users = [['name' => 'Joe'],['name' =>'Jill']];

$about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet, est sit amet dignissim pellentesque, elit est vulputate felis, a interdum quam nisi a metus.";

Route::inertia('/', 'Users', ['users' => $users]);
Route::inertia('/about', 'About', ['about' => $about]);
