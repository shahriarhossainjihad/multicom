<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\VendorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, "register"]);
Route::post('/login', [AuthController::class, "login"]);

Route::post('/place-order', [OrderController::class, 'placeOrder']);
Route::get('/user/{id}', [AuthController::class, 'user']);
Route::get('/order-by-user/{id}', [OrderController::class, 'orderByUser']);

Route::prefix('products')->group(function () {
    Route::get('/all', [ProductController::class, 'index']);
    Route::get('/view/{id}', [ProductController::class, 'show']);
    // Route::post('/add', [ProductController::class, 'store']);
});

Route::middleware(["auth:sanctum", ])->group(function(){
    Route::resource('brand', BrandController::class);
    Route::resource('category', CategoryController::class);
    // Route::resource('product', ProductController::class);
    Route::resource('order', OrderController::class);
    Route::resource('cart', CartController::class);
    Route::resource('order', OrderController::class);
    Route::resource('report', ReportController::class);
    Route::resource('posts', PostController::class);
    Route::resource('vendor', VendorController::class);
    Route::get('/dashboard', [AdminController::class, 'dashboard']);
    Route::get('/users', [AdminController::class, 'listUsers']);

    Route::prefix('products')->group(function () {
        Route::get('/', [ProductController::class, 'index']);
        Route::post('/', [ProductController::class, 'store']);
        Route::get('/{id}', [ProductController::class, 'show']);
        Route::put('/{id}', [ProductController::class, 'update']);
        Route::delete('/{id}', [ProductController::class, 'destroy']);
    });
});
Route::prefix('vendors')->middleware(['auth:sanctum', 'role:Vendor'])->group(function () {
    Route::get('/dashboard', [VendorController::class, 'dashboard']);
    Route::post('/products', [ProductController::class, 'store']);
});


Route::prefix('orders')->middleware(['auth:sanctum'])->group(function () {
    Route::get('/', [OrderController::class, 'index']);
    Route::post('/place', [OrderController::class, 'placeOrder']);
    Route::get('/{id}', [OrderController::class, 'show']);
});


