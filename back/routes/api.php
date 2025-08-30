<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile',[UserController::class,'myProfile']);
    Route::get('users',[UserController::class,'index']);
    Route::get('users/edit',[UserController::class,'allWithoutAdmin']);
    Route::put('users/change-role',[UserController::class,'changeUserRole']);
     Route::delete('users/{id}',[UserController::class,'destroy']);
 
   
    
});