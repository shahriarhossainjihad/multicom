<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'admin 1',
                'username' => 'admin',
                'email' => 'admin@example.com',
                'password' => bcrypt('password'),
                'role' => 'Admin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'vendor 1',
                'username' => 'vendor1',
                'email' => 'vendor1@example.com',
                'password' => bcrypt('password'),
                'role' => 'Vendor',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'user 1',
                'username' => 'user1',
                'email' => 'user1@example.com',
                'password' => bcrypt('password'),
                'role' => 'User',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
