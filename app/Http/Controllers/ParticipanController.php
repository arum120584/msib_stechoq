<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Participan;
use Inertia\Inertia;

class ParticipanController extends Controller
{
    public function getParticipan()
    {
        $participan = Participan::all();
        return Inertia::render('Participan/Participan',[
            'participan'=> $participan
        ]);
    }
}
