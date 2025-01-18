<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'price',
        'unit',
        'size',
        'status',
        'image'
    ];
    protected $guarded = [
        'brand_id',
        'category_id',
        'subcategory_id',
        'vendor_id',
        'approved_by',
    ];
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function subcategory()
    {
        return $this->belongsTo(Category::class, 'subcategory_id');
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function vendor()
    {
        return $this->belongsTo(Vendor::class);
    }

    public function stocks()
    {
        return $this->hasMany(Stock::class, 'product_id');
    }
    // public function totalStock()
    // {
    //     return $this->hasMany(Stock::class, 'product_id')->sum('quantity');
    // }

    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }

    public function carts()
    {
        return $this->hasMany(Cart::class);
    }
}
