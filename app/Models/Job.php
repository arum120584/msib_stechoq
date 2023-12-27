<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    // jadi setelah bikin tabel migration lalu untuk menyambungkan ke laravel lewat model
    use HasFactory;
    protected $table = "jobs";
}
