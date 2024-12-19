import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useStore } from '../store/useStore';
import toast from 'react-hot-toast';

// Initialize Stripe
const stripePromise = loadStripe('your_publishable_key');

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { cart } = useStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    
    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/order-success`,
        },
      });

      if (error) {
        toast.error(error.message || 'Payment failed');
      }
    } catch (err) {
      toast.error('An error occurred during payment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="btn btn-primary w-full"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
}

export default function Checkout() {
  const { cart } = useStore();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalTotal = total > 500 ? total : total + 50;

  const options = {
    mode: 'payment' as const,
    amount: finalTotal * 100, // Convert to cents
    currency: 'inr',
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between py-2">
              <span>{item.name} × {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>{total > 500 ? 'Free' : '₹50'}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-2">
              <span>Total</span>
              <span>₹{finalTotal}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
}