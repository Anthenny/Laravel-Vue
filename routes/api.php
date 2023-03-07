<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
//

// Public routes
Route::get("/products", [ProductController::class, "index"]);
Route::get("/products/{product}", [ProductController::class, "show"]);
Route::get("/products/search/{name}", [ProductController::class, "search"]);
Route::post("/register", [AuthController::class, "register"]);

// Protected routes
Route::group(["middleware" => ["auth:sanctum"]], function () {
    Route::post("/products", [ProductController::class, "store"]);
    Route::put("/products/{product}", [ProductController::class, "update"]);
    Route::delete("/products/{product}", [ProductController::class, "destroy"]);
});

// Overig
// Route::get("/listings", [ListingController::class, "index"]);
// Route::get("/listing", [ListingController::class, "show"]);
// Route::post("/listing", [ListingController::class, "create"]);
