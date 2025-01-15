<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vendor;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Exception;
use Illuminate\Support\Facades\Auth;

class VendorController extends Controller
{
    /**
     * List all vendors.
     */
    public function index()
    {
        try {
            $vendors = Vendor::with('user')->get();

            return response()->json([
                'success' => true,
                'data' => $vendors
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch vendors.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a new vendor.
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'business_name' => 'required|string|max:255',
                'first_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
                'address' => 'required|string',
                'phone' => 'required|digits_between:10,15',
                'balance' => 'nullable|numeric|min:0',
                'tin_number' => 'nullable|string|max:255',
                'bin_number' => 'nullable|string|max:255'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation errors.',
                    'errors' => $validator->errors(),
                ], 422);
            }

            // Add authenticated user's ID
            $data = $validator->validated();
            $data['user_id'] = Auth::user()->id; // Set the user_id
            // $data['approved_by'] = auth()->user()->id; // If an approval mechanism exists

            // Create the vendor
            $vendor = Vendor::create($data);
            // dd($vendor);


            return response()->json([
                'success' => true,
                'message' => 'Vendor created successfully.',
                'data' => $vendor
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create vendor.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Show a specific vendor.
     */
    public function show($id)
    {
        try {
            $vendor = Vendor::with('user')->findOrFail($id);

            return response()->json([
                'success' => true,
                'data' => $vendor
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Vendor not found.',
            ], 404);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch vendor.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update a vendor.
     */
    public function update(Request $request, $id)
    {
        // dd($request->all(), $request->input(), $request->getContent());


        try {
            $vendor = Vendor::findOrFail($id);
            if (!$vendor) {
                return response()->json([
                    'success' => false,
                    'message' => 'Vendor not found.',
                ], 404);
            }
            dd($vendor);
            $validator = Validator::make($request->all(), [
                'business_name' => 'sometimes|required|string|max:255',
                'first_name' => 'sometimes|required|string|max:255',
                'last_name' => 'sometimes|required|string|max:255',
                'address' => 'sometimes|required|string',
                'phone' => 'sometimes|required|digits_between:10,15|unique:vendors,phone,' . $vendor->id,
                'balance' => 'nullable|numeric|min:0',
                'tin_number' => 'nullable|string|max:255',
                'bin_number' => 'nullable|string|max:255'
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation errors.',
                    'errors' => $validator->errors(),
                ], 422);
            }
            $data = $validator->validated();
            dd($data);

            $vendor->update($validator->validated());

            return response()->json([
                'success' => true,
                'message' => 'Vendor updated successfully.',
                'data' => $vendor
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Vendor not found.',
            ], 404);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update vendor.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Delete a vendor.
     */
    public function destroy($id)
    {
        try {
            $vendor = Vendor::findOrFail($id);
            $vendor->delete();

            return response()->json([
                'success' => true,
                'message' => 'Vendor deleted successfully.'
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Vendor not found.',
            ], 404);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete vendor.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Vendor Dashboard: Example Method
     * Fetches vendor-specific data like product count, total sales, etc.
     */
    public function dashboard($id)
    {
        try {
            $vendor = Vendor::findOrFail($id);

            // Example of vendor-specific data aggregation
            $dashboardData = [
                'total_products' => $vendor->products()->count(),
                'total_sales' => $vendor->orders()->sum('total_price'),
                'balance' => $vendor->balance
            ];

            return response()->json([
                'success' => true,
                'data' => $dashboardData
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Vendor not found.',
            ], 404);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch dashboard data.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
