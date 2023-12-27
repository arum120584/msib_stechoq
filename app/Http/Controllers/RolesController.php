<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use Inertia\Inertia;

class RolesController extends Controller
{
    public function getRoles()
    {
        $roles = Role::all();

        return Inertia::render('Roles/Roles',[
            'role'=> $roles
        ]);
    }
}
