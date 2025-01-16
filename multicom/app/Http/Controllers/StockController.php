<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Stock;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class StockController extends Controller
{
    /**
     * List all stocks with product and vendor details.
     */
    public function index()
    {
        try {
            $stocks = Stock::with(['product', 'vendor'])->get();

            return response()->json([
                'success' => true,
                'data' => $stocks
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch stocks.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Add stock for a product.
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'product_id' => 'required|exists:products,id',
                'vendor_id' => 'required|exists:vendors,id',
                'quantity' => 'required|integer|min:0',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation errors.',
                    'errors' => $validator->errors(),
                ], 422);
            }

            $data = $validator->validated();
            $data['status'] = $data['quantity'] == 0 ? 'Stock Out' : ($data['quantity'] < 5 ? 'Low Stock' : 'Available');

            $stock = Stock::create($data);

            return response()->json([
                'success' => true,
                'message' => 'Stock added successfully.',
                'data' => $stock
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to add stock.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Update stock for a product.
     */
    public function update(Request $request, $id)
    {
        try {
            $stock = Stock::findOrFail($id);

            $validator = Validator::make($request->all(), [
                'quantity' => 'required|integer|min:0',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation errors.',
                    'errors' => $validator->errors(),
                ], 422);
            }

            $data = $validator->validated();
            $data['status'] = $data['quantity'] == 0 ? 'Stock Out' : ($data['quantity'] < 5 ? 'Low Stock' : 'Available');

            $stock->update($data);

            return response()->json([
                'success' => true,
                'message' => 'Stock updated successfully.',
                'data' => $stock
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Stock not found.',
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update stock.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Delete a stock record.
     */
    public function destroy($id)
    {
        try {
            $stock = Stock::findOrFail($id);
            $stock->delete();

            return response()->json([
                'success' => true,
                'message' => 'Stock deleted successfully.'
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Stock not found.',
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete stock.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
