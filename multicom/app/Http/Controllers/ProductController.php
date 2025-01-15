<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Str;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * List all products.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            $products = Product::with(['category', 'brand', 'vendor'])->get();
            $total = count($products);
            return response()->json([
                'success' => true,
                'data' => $products,
                'total' => $total,
                'message' => $total . ' Product found'

            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch products.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a new product.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'price' => 'required|numeric|min:0',
                'unit' => 'nullable|string|max:50',
                'size' => 'nullable|string|max:50',
                'status' => 'nullable|in:Active,Inactive',
                'brand_id' => 'nullable|exists:brands,id',
                'category_id' => 'required|exists:categories,id',
                'subcategory_id' => 'nullable|exists:categories,id',
                // 'vendor_id' => 'required|exists:vendors,id',
                'image' => 'required|string|max:255',
                'warranty' => 'nullable|boolean',
            ]);

            $validated['slug'] = Str::slug($validated['name']);
            $validated['status'] = $validated['status'] ?? 'Active'; 
            $product = Product::create($validated);
            // dd($product);

            return response()->json([
                'success' => true,
                'message' => 'Product created successfully.',
                'data' => $product
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation errors.',
                'errors' => $e->errors(),
            ], 422);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create product.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Show a specific product.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */

    public function show($id)
    {
        if (!is_numeric($id)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid product ID.',
            ], 400);
        }
        try {
            $product = Product::with(['category', 'brand', 'vendor'])->findOrFail($id);

            return response()->json([
                'success' => true,
                'data' => $product
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Product not found.',
            ], 404);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch product.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
    // public function show($id)
    // {
    //     if (!is_numeric($id)) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'Invalid product ID.',
    //         ], 400);
    //     }

    //     try {
    //         $product = Product::with(['category', 'brand', 'vendor'])->findOrFail($id);
    //         dd($product);
    //         return response()->json([
    //             'success' => true,
    //             'data' => $product
    //         ]);
    //     } catch (Exception $e) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'Product not found.',
    //             'error' => $e->getMessage()
    //         ], 404);
    //     }
    // }

    /**
     * Update a product.
     */
    public function update(Request $request, $id)
    {
        // dd($request->all());
        try {
            $product = Product::findOrFail($id);

            // Validate the incoming data
            $validator = Validator::make($request->all(), [
                'name' => 'sometimes|required|string|max:255',
                'price' => 'sometimes|required|numeric|min:0',
                'unit' => 'nullable|string|max:50',
                'size' => 'nullable|string|max:50',
                'status' => 'sometimes|in:Active,Inactive',
                'brand_id' => 'nullable|exists:brands,id',
                'category_id' => 'nullable|exists:categories,id',
                'subcategory_id' => 'nullable|exists:categories,id',
                'vendor_id' => 'nullable|exists:vendors,id',
                'variations' => 'nullable|json',
                'image' => 'nullable|string|max:255',
                'warranty' => 'nullable|boolean',
            ]);

            // dd($request->all());
            // Handle validation errors
            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation errors.',
                    'errors' => $validator->errors(),
                ], 422);
            }

            $validated = $validator->validated();
            // Update slug if name is provided
            if (isset($validated['name'])) {
                $validated['slug'] = \Illuminate\Support\Str::slug($validated['name']);
            }

            $product->update($validated);

            return response()->json([
                'success' => true,
                'message' => 'Product updated successfully.',
                'data' => $product
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Product not found.',
            ], 404);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update product.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Delete a product.
     */
    public function destroy($id)
    {
        try {
            $product = Product::findOrFail($id);

            $product->delete();

            return response()->json([
                'success' => true,
                'message' => 'Product deleted successfully.'
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Product not found.',
            ], 404);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete product.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
