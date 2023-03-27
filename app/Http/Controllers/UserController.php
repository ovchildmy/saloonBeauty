<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function phoneRequest(string $phone) {
        return 'Added phone '.$phone;
    }
}
