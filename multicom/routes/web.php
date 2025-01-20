<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('main');
});

// React Routes catch-all
Route::get('/{any}', function () {
    return view('main'); 
})->where('any', '.*');
