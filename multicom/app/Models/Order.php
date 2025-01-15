<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'invoice_number',
        'total_quantity',
        'total_price',
        'coupon_id',
        'shipping_method',
        'shipping_charge',
        'grand_total',
        'status',
        'payment_status',
        'order_note',
    ];

    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
