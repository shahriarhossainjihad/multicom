<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    protected $fillable = [
        'business_name',
        'first_name',
        'last_name',
        'address',
        'phone',
        'tin_number',
        'bin_number',
        'user_id',
        'balance',
        'approved_by',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function stocks()
    {
        return $this->hasMany(Stock::class);
    }
}
