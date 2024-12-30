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
        Schema::create('profit_loss_summaries', function (Blueprint $table) {
            $table->id();
            $table->date('date')->unique();
            $table->decimal('total_sales', 15, 2);
            $table->decimal('total_cost', 15, 2);
            $table->decimal('total_profit', 15, 2);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profit_loss_summaries');
    }
};
