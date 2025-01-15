<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Variation;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Exception;

class VariationController extends Controller
{
    /**
     * List all variations.
     */
    public function index()
    {
        try {
            $variations = Variation::with('product')->get();

            return response()->json([
                'success' => true,
                'data' => $variations,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch variations.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Store a new variation.
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'product_id' => 'required|exists:products,id',
                'price' => 'nullable|numeric|min:0',
                'size' => 'nullable|string|max:255',
                'color' => 'nullable|string|max:255',
                'model_no' => 'nullable|string|max:255',
                'quality' => 'nullable|string|max:255',
                'image' => 'nullable|string|max:255',
                'warranty' => 'nullable|string|max:255',
                'status' => 'required|in:Default,Variant',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation errors.',
                    'errors' => $validator->errors(),
                ], 422);
            }

            $variation = Variation::create($validator->validated());

            return response()->json([
                'success' => true,
                'message' => 'Variation created successfully.',
                'data' => $variation,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create variation.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Show a specific variation.
     */
    public function show($id)
    {
        try {
            $variation = Variation::with('product')->findOrFail($id);

            return response()->json([
                'success' => true,
                'data' => $variation,
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Variation not found.',
            ], 404);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch variation.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Update a variation.
     */
    public function update(Request $request, $id)
    {
        try {
            $variation = Variation::findOrFail($id);

            $validator = Validator::make($request->all(), [
                'price' => 'nullable|numeric|min:0',
                'size' => 'nullable|string|max:255',
                'color' => 'nullable|string|max:255',
                'model_no' => 'nullable|string|max:255',
                'quality' => 'nullable|string|max:255',
                'image' => 'nullable|string|max:255',
                'warranty' => 'nullable|string|max:255',
                'status' => 'nullable|in:Default,Variant',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation errors.',
                    'errors' => $validator->errors(),
                ], 422);
            }

            $variation->update($validator->validated());

            return response()->json([
                'success' => true,
                'message' => 'Variation updated successfully.',
                'data' => $variation,
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Variation not found.',
            ], 404);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update variation.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Delete a variation.
     */
    public function destroy($id)
    {
        try {
            $variation = Variation::findOrFail($id);
            $variation->delete();

            return response()->json([
                'success' => true,
                'message' => 'Variation deleted successfully.',
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Variation not found.',
            ], 404);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete variation.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
