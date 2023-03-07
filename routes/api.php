<?php

use App\Http\Controllers\ListingController;
use App\Http\Controllers\ProductController;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware("auth:sanctum")->get("/user", function (Request $request) {
    return $request->user();
});

Route::get("/listings", [ListingController::class, "index"]);
Route::get("/listing", [ListingController::class, "show"]);
Route::post("/listing", [ListingController::class, "create"]);

Route::get("/products", [ProductController::class, "index"]);
Route::put("/products/{product}", [ProductController::class, "update"]);
Route::get("/products/{product}", [ProductController::class, "show"]);
Route::delete("/products/{product}", [ProductController::class, "destroy"]);
Route::post("/products", [ProductController::class, "store"]);
Route::get("/products/search/{name}", [ProductController::class, "search"]);
