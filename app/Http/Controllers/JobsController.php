<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Job;
use Inertia\Inertia;


class JobsController extends Controller
{ 
    // model dipanggil di jobscontrolerr
    //ini adalah fungsi untuk menampilkan data pekerjaan
    public function getJobs()
    {
        //ini adalah fungsi untuk memanggil semua database tabel jobs
        $jobs = Job::all();
        
        //ini untuk memanggil view sekaligus membarika datanya kesana
        return Inertia::render('Jobs/Jobs', [
            // data object 
            'ini' => $jobs
        ]);
    }

    public function getJob($id)
    {
        // dolar bikin variabel
        // varibel adalah untuk menyimpan data
        $job = Job::find($id);
        return Inertia::render('Jobs/DetailJob', [
            // data object 
            'detailjob' => $job
        ]);
    }
}
