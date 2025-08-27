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
        Schema::create('debt_claims', function (Blueprint $table) {
            $table->id();
            $table->foreignId('expense_id')->constrained('group_expenses')->onDelete('cascade');
            $table->foreignId('creditor_id')->constrained('users')->onDelete('cascade'); 
            $table->decimal('amount', 10, 2); 
            $table->enum('status', ['paid', 'unpaid']); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('debt_claims');
    }
};
