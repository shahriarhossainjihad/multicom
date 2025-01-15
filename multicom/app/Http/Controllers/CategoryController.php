<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Exception;

class CategoryController extends Controller
{
    // public function index()
    // {
    //     $categories = Category::whereNull('parent_id')->with('subcategories')->get();

    //     return response()->json([
    //         'success' => true,
    //         'data' => $categories
    //     ]);
    // }
    public function index()
    {
        try {
            $categories = Category::whereNull('parent_id')->with('subcategories')->get();
            $total = $categories->count();
            return response()->json([
                'success' => true,
                'total' => $total,
                'data' => $categories
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch categories.',
                'error' => $e->getMessage()
            ], 500);
        }
    }


    public function store(Request $request)
    {


        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'parent_id' => 'nullable|exists:categories,id',
            ]);

            $validated['slug'] = Str::slug($validated['name']);
            $validated['status'] = 'Active';
            $category = Category::create($validated);

            return response()->json([
                'success' => true,
                'message' => 'Category created successfully.',
                'data' => $category,
            ]);
        }
        catch (\Illuminate\Validation\ValidationException $e) {
            // Handle validation exceptions
            return response()->json([
                'success' => false,
                'message' => 'Validation errors.',
                'errors' => $e->errors(),
            ], 422);
        }
        catch (Exception $e) {
            response()->json([
                'success' => false,
                'message' => 'Failed to create category.',
                'error' => $e->getMessage()
            ]);
        }

    }


    public function show($id)
    {
        try {
            $category = Category::with('subcategories')->find($id);

            if (!$category) {
                return response()->json([
                    'success' => false,
                    'message' => 'Category not found.'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => $category
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch category details.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    // public function update(Request $request, $id)
    // {
    //     try {
    //         $category = Category::findOrFail($id);

    //         $validated = $request->validate([
    //             'name' => 'sometimes|required|string|max:255',
    //             'slug' => 'sometimes|string|max:255|unique:categories,slug,' . $category->id,
    //             'parent_id' => 'nullable|exists:categories,id',
    //             'status' => 'sometimes|in:Active,Inactive'
    //         ]);

    //         if (empty($validated)) {
    //             return response()->json([
    //                 'success' => false,
    //                 'message' => 'No valid data provided to update the category.',
    //             ], 400);
    //         }

    //         if (isset($validated['name'])) {
    //             $validated['slug'] = Str::slug($validated['name']);
    //         }

    //         $category->update($validated);

    //         return response()->json([
    //             'success' => true,
    //             'message' => 'Category updated successfully.',
    //             'data' => $category
    //         ]);

    //     } catch (\Illuminate\Validation\ValidationException $e) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'Validation errors.',
    //             'errors' => $e->errors(),
    //         ], 422);
    //     } catch (Exception $e) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'Failed to update category.',
    //             'error' => $e->getMessage()
    //         ], 500);
    //     }
    // }

    public function update(Request $request, $id)
    {
        // dd($request);
        try {
            $category = Category::findOrFail($id);

            // dd($category);
            // Validate the input
            $validated = $request->validate([
                'name' => 'sometimes|required|string|max:255',
                'parent_id' => 'nullable|exists:categories,id',
                'status' => 'sometimes|in:Active,Inactive',
            ]);
            // dd($validated);
            // Ensure at least one field is provided for the update
            if (empty($validated)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No valid data provided to update the category.',
                ], 400);
            }

            // Auto-generate slug if 'name' is updated
            if (isset($validated['name'])) {
                $validated['slug'] = Str::slug($validated['name']);
            }

            // Update the category
            $category->update($validated);

            return response()->json([
                'success' => true,
                'message' => 'Category updated successfully.',
                'data' => $category,
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
                'message' => 'Failed to update category.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


    public function destroy($id)
    {
        try {
            $category = Category::findOrFail($id);
            // dd($category);
            if (!$category) {
                return response()->json([
                    'success' => false,
                    'message' => 'Category not found.'
                ], 404);
            }
            // Optionally check for subcategories before deletion
            if ($category->subcategories()->count() > 0) {
                // dd($category->subcategories());
                return response()->json([
                    'success' => false,
                    'message' => 'Cannot delete category with subcategories. Remove subcategories first.',
                ], 400);
            }
            // $count = $category->subcategories()->all();
            // dd($count);
            $category->delete();

            return response()->json([
                'success' => true,
                'message' => 'Category deleted successfully.'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete category.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
