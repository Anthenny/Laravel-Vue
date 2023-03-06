<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function index() {
        return inertia('Index/Index', [
            'message' => 'Hello from Laravel'
        ]);
    }

    public function show() {
        return inertia::render('Index/Show');
    }
}
