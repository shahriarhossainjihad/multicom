<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->bigInteger('invoice_number')->unique();
            $table->integer('total_quantity');
            $table->decimal('total_price', 10, 2);
            $table->bigInteger('coupon_id')->nullable();
            $table->string('shipping_method');
            $table->decimal('shipping_charge', 10, 2)->nullable();
            $table->decimal('grand_total', 10, 2);
            $table->enum('status', ['Pending', 'Approve'])->default('Pending');
            $table->enum('payment_status', ['Paid', 'Processing', 'Due']);
            $table->text('order_note')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
