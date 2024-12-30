<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReportController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, "register"]);
Route::post('/login', [AuthController::class, "login"]);



Route::middleware(["auth:sanctum", ])->group(function(){
    Route::resource('brand', BrandController::class);
    Route::resource('category', CategoryController::class);
    Route::resource('product', ProductController::class);
    Route::resource('order', OrderController::class);
    Route::resource('cart', CartController::class);
    Route::resource('order', OrderController::class);
    Route::resource('report', ReportController::class);
    Route::resource('posts', PostController::class);
    Route::get('/dashboard', [AdminController::class, 'dashboard']);
    Route::get('/users', [AdminController::class, 'listUsers']);
});
Route::prefix('vendors')->middleware(['auth:sanctum', 'role:Vendor'])->group(function () {
    Route::get('/dashboard', [VendorController::class, 'dashboard']);
    Route::post('/products', [ProductController::class, 'store']);
});

