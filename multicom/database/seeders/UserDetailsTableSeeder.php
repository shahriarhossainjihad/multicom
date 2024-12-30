<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserDetailsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('user_details')->insert([
            [
                'user_id' => 3, // User ID for user1
                'first_name' => 'John',
                'last_name' => 'Doe',
                'address' => '123 Main St',
                'phone' => '1234567890',
                'city' => 'New York',
                'postal_code' => '10001',
                'country' => 'USA',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }

}
