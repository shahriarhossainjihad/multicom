<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Auth;
use Exception;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // dd($request->all());
        try {
            // Validate the request data
            $validator = Validator::make($request->all(), [
                'username' => 'required|string|unique:users,username',
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|min:6',
                'confirm_password' => 'required|same:password',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    "status" => 400,
                    "message" => "Validation errors",
                    "errors" => $validator->errors(),
                ]);
            }

            // Create new user
            $user = User::create([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            // Create and return token
            $response = [];
            $response["token"] = $user->createToken("MyApp")->plainTextToken;
            $response["name"] = $user->name;
            $response["email"] = $user->email;
            $response["id"] = $user->id;

            return response()->json([
                "status" => 200,
                "message" => "User registered successfully",
                "data" => $response,
            ]);
        } catch (Exception $e) {
            // Handle unexpected errors
            return response()->json([
                "status" => 500,
                "message" => "Something went wrong, please try again later.",
                "error" => $e->getMessage(),
            ]);
        }
    }

    public function login(Request $request)
    {
        if (Auth::attempt(["email" => $request->email, "password" => $request->password])) {
            $user = Auth::user();

            $response = [];
            $response["token"] = $user->createToken("MyApp")->plainTextToken;
            $response["name"] = $user->name;
            $response["email"] = $user->email;
            $response["id"] = $user->id;

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
    public function user($id)
    {
        $user = User::findOrFail($id);

        if ($user) {
            return response()->json([
                "status" => 200,
                "message" => "User loged in successfully",
                "data" => $user,
            ]);
        } else {
            return response()->json([
                "status" => 400,
                "message" => "User Not Found",
            ]);
        }
    }
}
