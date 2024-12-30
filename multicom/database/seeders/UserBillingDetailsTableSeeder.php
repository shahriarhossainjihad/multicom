<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserBillingDetailsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('user_billing_details')->insert([
            [
                'user_id' => 3, // User ID for user1
                'active_payment_method' => 'card',
                'card_number' => '1234567890123456',
                'cvc_code' => '123',
                'card_expiry_date' => '12/25',
                'mobile_banking_id' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
