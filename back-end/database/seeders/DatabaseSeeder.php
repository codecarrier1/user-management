<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0;$i < 10;$i++) {
            $phone = rand(1111111111, 9999999999);

            $user = new User;
            $user->name = Str::random(10);
            $user->email = Str::random(10);
            $user->phone = $phone;
            
            $user->save();
        }
    }
}
