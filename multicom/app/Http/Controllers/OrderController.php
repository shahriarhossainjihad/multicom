<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderDetail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Place an order (logged-in users only).
     */
    public function placeOrder(Request $request)
    {
        try {
            // Ensure the user is logged in
            if (!auth()->check()) {
                return response()->json([
                    'success' => false,
                    'message' => 'You must be logged in to place an order.',
                ], 403);
            }

            // Validate the incoming request
            $validator = Validator::make($request->all(), [
                'products' => 'required|array',
                'products.*.product_id' => 'required|exists:products,id',
                'products.*.quantity' => 'required|integer|min:1',
                'products.*.unit_price' => 'required|numeric|min:0',
                'shipping_method' => 'required|string|max:255',
                'shipping_charge' => 'nullable|numeric|min:0',
                'order_note' => 'nullable|string|max:500',
                'coupon_id' => 'nullable|integer',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation errors.',
                    'errors' => $validator->errors(),
                ], 422);
            }

            // Start a database transaction
            DB::beginTransaction();

            // Calculate totals
            $totalQuantity = 0;
            $totalPrice = 0;

            foreach ($request->input('products') as $product) {
                $totalQuantity += $product['quantity'];
                $totalPrice += $product['quantity'] * $product['unit_price'];
            }

            $grandTotal = $totalPrice + ($request->input('shipping_charge', 0));

            // Generate a unique invoice number
            $invoiceNumber = time() . rand(1000, 9999);

            // Create the order
            $order = Order::create([
                'user_id' => auth()->id(),
                'invoice_number' => $invoiceNumber,
                'total_quantity' => $totalQuantity,
                'total_price' => $totalPrice,
                'coupon_id' => $request->input('coupon_id'),
                'shipping_method' => $request->input('shipping_method'),
                'shipping_charge' => $request->input('shipping_charge', 0),
                'grand_total' => $grandTotal,
                'status' => 'Pending',
                'payment_status' => 'Processing',
                'order_note' => $request->input('order_note'),
            ]);

            // Add order details
            foreach ($request->input('products') as $product) {
                OrderDetail::create([
                    'order_id' => $order->id,
                    'product_id' => $product['product_id'],
                    'quantity' => $product['quantity'],
                    'unit_price' => $product['unit_price'],
                    'total_price' => $product['quantity'] * $product['unit_price'],
                ]);
            }

            // Commit the transaction
            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Order placed successfully.',
                'data' => [
                    'order_id' => $order->id,
                    'invoice_number' => $invoiceNumber,
                    'total_quantity' => $totalQuantity,
                    'grand_total' => $grandTotal,
                ],
            ]);
        } catch (\Exception $e) {
            // Rollback the transaction if something goes wrong
            DB::rollBack();

            return response()->json([
                'success' => false,
                'message' => 'Failed to place order.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Fetch order details by ID.
     */
    public function show($id)
    {
        try {
            $order = Order::with('orderDetails.product')->findOrFail($id);

            return response()->json([
                'success' => true,
                'data' => $order,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch order.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
