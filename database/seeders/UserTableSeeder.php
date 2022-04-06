<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
                "name" => "admin",
                "email" => "admin@example.com",
                "email_verified_at" => now(),
                "password" => Hash::make("123456"),
                "created_at" => now(),
                "updated_at" => now()
        ]);
    }
}
