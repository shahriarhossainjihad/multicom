<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Auth;

class AuthController extends Controller
{
    function register(Request $request){
        // Validate the request data
        $validator = Validator::make($request->all(), [
                'name' => 'required|string',
                'username' => 'required',
                'email' => 'required|email',
                'password' => 'required',
                'confirm_password' => 'required|same:password',
        ]);

        if($validator->fails()){
            return response()->json([
                "status" => 400,
                "message" => "Validation errors",
                "errors" => $validator->errors(),
            ]);
        }

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $response = [];
        $response["token"] = $user->createToken("MyApp")->plainTextToken;
        $response["name"] = $user->name;
        $response["email"] = $user->email;

        return response()->json([
            "status" => 200,
            "message" => "User registered successfully",
            "data" => $response,
        ]);
    }

    public function login(Request $request){
        if(Auth::attempt(["email" => $request->email, "password" => $request->password])){
            $user = Auth::user();

            $response = [];
            $response["token"] = $user->createToken("MyApp")->plainTextToken;
            $response["name"] = $user->name;
            $response["email"] = $user->email;

            return response()->json([
                "status" => 200,
                "message" => "User loged in successfully",
                "data" => $response,
            ]);
        }
        return response()->json([
            "status" => 400,
            "message" => "Authentication Error",
            "data" => null,
        ]);
    }
}
